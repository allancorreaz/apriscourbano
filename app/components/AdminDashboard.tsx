"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  roleDefinitions,
  type Permission,
  type Role,
} from "../access-control";
import type { AdminState } from "../admin-types";
import { ministryGroups, siteConfig } from "../site-content";
import { Icon } from "./Icons";

type Tab =
  | "Visão geral"
  | "Conteúdo"
  | "Loja"
  | "Ministérios"
  | "Vídeos"
  | "Pessoas"
  | "Usuários"
  | "Relatórios";

const tabPermissions: Record<Tab, Permission> = {
  "Visão geral": "dashboard.view",
  Conteúdo: "content.manage",
  Loja: "store.manage",
  Ministérios: "ministries.manage",
  Vídeos: "media.manage",
  Pessoas: "people.view",
  Usuários: "users.manage",
  Relatórios: "reports.view",
};

const roleEntries = Object.entries(roleDefinitions) as [
  Role,
  (typeof roleDefinitions)[Role],
][];

function formatDate(value: string) {
  const normalized = value.includes("T") ? value : `${value.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Sao_Paulo",
  }).format(date);
}

async function readError(response: Response) {
  const body = (await response.json().catch(() => null)) as
    | { error?: string }
    | null;
  return body?.error ?? "Não foi possível concluir a ação.";
}

export function AdminDashboard({
  initialState,
  signOutPath,
}: {
  initialState: AdminState;
  signOutPath: string;
}) {
  const availableTabs = (Object.keys(tabPermissions) as Tab[]).filter((tab) =>
    initialState.currentUser.permissions.includes(tabPermissions[tab]),
  );
  const [active, setActive] = useState<Tab>(availableTabs[0] ?? "Visão geral");
  const [state, setState] = useState(initialState);
  const [notice, setNotice] = useState<{
    kind: "success" | "error";
    message: string;
  } | null>(null);
  const [busy, setBusy] = useState(false);
  const [auditSearch, setAuditSearch] = useState("");
  const [auditArea, setAuditArea] = useState("TODAS");
  const initialProducts = useMemo(() => {
    try {
      const parsed = JSON.parse(initialState.settings.store_products || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }, [initialState.settings.store_products]);
  const [storeProducts, setStoreProducts] = useState<Array<{
    id: string; name: string; category: string; description: string;
    price: string; image: string; active: boolean;
  }>>(initialProducts);

  const can = (permission: Permission) =>
    state.currentUser.permissions.includes(permission);

  async function refreshState() {
    const response = await fetch("/api/admin/state", { cache: "no-store" });
    if (!response.ok) throw new Error(await readError(response));
    setState((await response.json()) as AdminState);
  }

  async function execute(action: () => Promise<Response>, success: string) {
    setBusy(true);
    setNotice(null);
    try {
      const response = await action();
      if (!response.ok) throw new Error(await readError(response));
      await refreshState();
      setNotice({ kind: "success", message: success });
      return true;
    } catch (error) {
      setNotice({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Não foi possível concluir a ação.",
      });
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function saveHero(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await execute(
      () =>
        fetch("/api/admin/settings", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            hero_media_type: String(form.get("hero_media_type") ?? "image"),
            hero_image_url: String(form.get("hero_image_url") ?? ""),
            hero_video_url: String(form.get("hero_video_url") ?? ""),
            logo_url: String(form.get("logo_url") ?? ""),
            page_background_url: String(form.get("page_background_url") ?? ""),
          }),
        }),
      "Mídia principal atualizada e registrada na auditoria.",
    );
  }

  async function saveStore(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    await execute(
      () => fetch("/api/admin/settings", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          store_products: JSON.stringify(storeProducts),
          payment_pix_enabled: form.get("payment_pix_enabled") === "on" ? "true" : "false",
          payment_pix_key: String(form.get("payment_pix_key") ?? ""),
          payment_credit_enabled: form.get("payment_credit_enabled") === "on" ? "true" : "false",
          payment_credit_url: String(form.get("payment_credit_url") ?? ""),
          payment_debit_enabled: form.get("payment_debit_enabled") === "on" ? "true" : "false",
          payment_debit_url: String(form.get("payment_debit_url") ?? ""),
          payment_boleto_enabled: form.get("payment_boleto_enabled") === "on" ? "true" : "false",
          payment_boleto_url: String(form.get("payment_boleto_url") ?? ""),
        }),
      }),
      "Loja, produtos e formas de pagamento atualizados.",
    );
  }

  async function addUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const succeeded = await execute(
      () =>
        fetch("/api/admin/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: form.get("name"),
            email: form.get("email"),
            role: form.get("role"),
          }),
        }),
      "Usuário criado com o perfil selecionado.",
    );
    if (succeeded) formElement.reset();
  }

  async function changeUser(
    id: number,
    payload: { role?: Role; status?: "ACTIVE" | "INACTIVE" },
  ) {
    await execute(
      () =>
        fetch(`/api/admin/users/${id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        }),
      "Acesso do usuário atualizado.",
    );
  }

  async function addMedia(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const succeeded = await execute(
      () =>
        fetch("/api/admin/media", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            title: form.get("title"),
            description: form.get("description"),
            url: form.get("url"),
            thumbnailUrl: form.get("thumbnailUrl"),
            status: form.get("status"),
            featured: form.get("featured") === "on",
            mediaType: "DOCUMENTARY",
          }),
        }),
      "Vídeo salvo e disponibilizado na página Sobre nós.",
    );
    if (succeeded) formElement.reset();
  }

  async function removeMedia(id: number) {
    if (!window.confirm("Remover este vídeo da página Sobre nós?")) return;
    await execute(
      () => fetch(`/api/admin/media/${id}`, { method: "DELETE" }),
      "Vídeo removido.",
    );
  }

  const filteredAudit = useMemo(() => {
    const query = auditSearch.trim().toLocaleLowerCase("pt-BR");
    return state.auditLogs.filter((log) => {
      const matchesArea = auditArea === "TODAS" || log.area === auditArea;
      const matchesQuery =
        !query ||
        [
          log.actorName,
          log.actorEmail,
          log.action,
          log.area,
          log.target,
          log.details,
        ]
          .join(" ")
          .toLocaleLowerCase("pt-BR")
          .includes(query);
      return matchesArea && matchesQuery;
    });
  }, [auditArea, auditSearch, state.auditLogs]);

  const ministries = ministryGroups.flatMap((group) =>
    group.ministries.map((ministry) => ({ ...ministry, group: group.title })),
  );

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <div className="admin-brand">
          <span>AU</span>
          <div>
            <strong>Aprisco Urbano</strong>
            <small>Administração</small>
          </div>
        </div>
        <nav aria-label="Módulos administrativos">
          {availableTabs.map((tab) => (
            <button
              key={tab}
              className={active === tab ? "active" : ""}
              onClick={() => {
                setActive(tab);
                setNotice(null);
              }}
            >
              <i />
              {tab}
            </button>
          ))}
        </nav>
        <div className="admin-side-actions">
          <Link href="/" className="admin-back">
            <Icon name="arrow" />
            Ver site público
          </Link>
          <Link href={signOutPath} className="admin-back">
            <Icon name="close" />
            Sair
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-top">
          <div>
            <p className="eyebrow dark">Área protegida</p>
            <h1>{active}</h1>
          </div>
          <div className="admin-user">
            <span>{state.currentUser.name.slice(0, 1).toUpperCase()}</span>
            <div>
              <strong>{state.currentUser.name}</strong>
              <small>{roleDefinitions[state.currentUser.role].label}</small>
            </div>
          </div>
        </header>

        {notice && (
          <div className={`admin-notice ${notice.kind}`} role="status">
            <Icon name={notice.kind === "success" ? "check" : "close"} />
            {notice.message}
          </div>
        )}

        {active === "Visão geral" && (
          <>
            <section className="admin-welcome">
              <div>
                <p>Olá, {state.currentUser.name.split(" ")[0]}</p>
                <h2>A igreja em uma visão clara.</h2>
                <span>
                  Conteúdo, pessoas, acessos e atividades em um só ambiente.
                </span>
              </div>
              <div className="service-pill">
                <Icon name="calendar" />
                <span>
                  Próximo culto
                  <strong>
                    {siteConfig.service.day} · {siteConfig.service.time}
                  </strong>
                </span>
              </div>
            </section>
            <section className="metrics">
              {[
                ["Células", "03", "Conteúdo demonstrativo"],
                ["Ministérios", String(ministries.length).padStart(2, "0"), "Todos catalogados"],
                [
                  "Usuários ativos",
                  String(state.users.filter((user) => user.status === "ACTIVE").length).padStart(2, "0"),
                  "Perfis controlados",
                ],
                [
                  "Vídeos",
                  String(state.mediaItems.length).padStart(2, "0"),
                  "Documentários e conteúdos",
                ],
              ].map((item) => (
                <article key={item[0]}>
                  <p>{item[0]}</p>
                  <strong>{item[1]}</strong>
                  <span>{item[2]}</span>
                </article>
              ))}
            </section>
            <section className="admin-panel">
              <header>
                <div>
                  <p className="eyebrow dark">Governança</p>
                  <h2>Segurança e rastreabilidade</h2>
                </div>
                <span>Ativo</span>
              </header>
              {[
                ["Identificação por usuário", 100],
                ["Perfis e permissões", 100],
                ["Auditoria de alterações", 100],
                ["Conteúdo e documentários", 100],
                ["Ministérios e responsáveis", 100],
              ].map((module) => (
                <div className="module" key={module[0]}>
                  <div>
                    <strong>{module[0]}</strong>
                    <small>Configurado no projeto</small>
                  </div>
                  <i>
                    <b style={{ width: `${module[1]}%` }} />
                  </i>
                  <span>{module[1]}%</span>
                </div>
              ))}
            </section>
          </>
        )}

        {active === "Conteúdo" && can("content.manage") && (
          <section className="admin-panel editor">
            <header>
              <div>
                <p className="eyebrow dark">Edição segura</p>
                <h2>Mídia principal do site</h2>
              </div>
              <span>Foto ou vídeo</span>
            </header>
            <form className="hero-editor" onSubmit={saveHero}>
              <div
                className="editor-preview"
                style={{
                  backgroundImage: `linear-gradient(rgba(3,17,22,.18),rgba(3,17,22,.55)),url(${
                    state.settings.hero_image_url || siteConfig.hero.image
                  })`,
                }}
              />
              <div className="editor-fields">
                <label>
                  <span>Logo da Aprisco</span>
                  <input name="logo_url" defaultValue={state.settings.logo_url || ""} placeholder="/media/logo-aprisco.png" />
                </label>
                <label>
                  <span>Background padrão das páginas internas</span>
                  <input name="page_background_url" defaultValue={state.settings.page_background_url || ""} placeholder="/media/background-aprisco.jpg" />
                </label>
                <label>
                  <span>Tipo de mídia</span>
                  <select
                    name="hero_media_type"
                    defaultValue={state.settings.hero_media_type || "image"}
                  >
                    <option value="image">Imagem</option>
                    <option value="video">Vídeo curto em MP4/WebM</option>
                  </select>
                </label>
                <label>
                  <span>Imagem ou capa do vídeo</span>
                  <input
                    name="hero_image_url"
                    defaultValue={
                      state.settings.hero_image_url || siteConfig.hero.image
                    }
                    placeholder="/media/capa-aprisco.jpg"
                  />
                </label>
                <label>
                  <span>Endereço do vídeo de fundo</span>
                  <input
                    name="hero_video_url"
                    defaultValue={state.settings.hero_video_url || ""}
                    placeholder="/media/hero-aprisco.mp4"
                  />
                </label>
                <div className="field-help">
                  Para vídeos de fundo, use um MP4/WebM curto e sem áudio. Para
                  documentários do YouTube ou Vimeo, use a aba Vídeos.
                </div>
                <button className="button dark" disabled={busy}>
                  {busy ? "Salvando..." : "Salvar alterações"}
                </button>
              </div>
            </form>
          </section>
        )}

        {active === "Loja" && can("store.manage") && (
          <form className="admin-store-layout" onSubmit={saveStore}>
            <section className="admin-panel">
              <header><div><p className="eyebrow dark">Catálogo</p><h2>Produtos da loja</h2></div>
                <button type="button" className="button dark" onClick={() => setStoreProducts((items) => [...items, {
                  id: crypto.randomUUID(), name: "Novo produto", category: "Categoria",
                  description: "", price: "0,00", image: "", active: true,
                }])}>Adicionar produto</button>
              </header>
              <div className="store-admin-list">
                {storeProducts.map((product, index) => <article key={product.id}>
                  <div className="store-admin-grid">
                    <label><span>Nome</span><input value={product.name} onChange={(e) => setStoreProducts(items => items.map((p,i) => i === index ? {...p,name:e.target.value}:p))}/></label>
                    <label><span>Categoria</span><input value={product.category} onChange={(e) => setStoreProducts(items => items.map((p,i) => i === index ? {...p,category:e.target.value}:p))}/></label>
                    <label><span>Preço (R$)</span><input value={product.price} onChange={(e) => setStoreProducts(items => items.map((p,i) => i === index ? {...p,price:e.target.value}:p))}/></label>
                    <label><span>Foto</span><input value={product.image} placeholder="/media/produto.jpg" onChange={(e) => setStoreProducts(items => items.map((p,i) => i === index ? {...p,image:e.target.value}:p))}/></label>
                    <label className="wide"><span>Descrição</span><input value={product.description} onChange={(e) => setStoreProducts(items => items.map((p,i) => i === index ? {...p,description:e.target.value}:p))}/></label>
                  </div>
                  <div className="store-admin-actions">
                    <label className="checkbox-field"><input type="checkbox" checked={product.active} onChange={(e) => setStoreProducts(items => items.map((p,i) => i === index ? {...p,active:e.target.checked}:p))}/><span>Produto visível</span></label>
                    <button type="button" onClick={() => setStoreProducts(items => items.filter((_,i) => i !== index))}>Remover</button>
                  </div>
                </article>)}
                {!storeProducts.length && <div className="empty-state">Nenhum produto cadastrado. Clique em “Adicionar produto”.</div>}
              </div>
            </section>
            <section className="admin-panel">
              <header><div><p className="eyebrow dark">Recebimentos</p><h2>Formas de pagamento</h2></div><span>Pré-configuração</span></header>
              <div className="payment-admin-grid">
                {[
                  ["pix","Pix","Chave Pix"],
                  ["credit","Cartão de crédito","Link do checkout de crédito"],
                  ["debit","Cartão de débito","Link do checkout de débito"],
                  ["boleto","Boleto","Link para geração do boleto"],
                ].map(([key,label,placeholder]) => <div key={key} className="payment-admin-card">
                  <label className="checkbox-field"><input type="checkbox" name={`payment_${key}_enabled`} defaultChecked={state.settings[`payment_${key}_enabled`] === "true"}/><span>{label}</span></label>
                  <input name={key === "pix" ? "payment_pix_key" : `payment_${key}_url`} defaultValue={state.settings[key === "pix" ? "payment_pix_key" : `payment_${key}_url`] || ""} placeholder={placeholder}/>
                </div>)}
              </div>
              <p className="field-help">Os links devem ser gerados por um provedor de pagamento. Nenhum dado de cartão é armazenado no site.</p>
              <button className="button dark" disabled={busy}>{busy ? "Salvando..." : "Salvar loja e pagamentos"}</button>
            </section>
          </form>
        )}

        {active === "Ministérios" && can("ministries.manage") && (
          <section className="admin-panel">
            <header>
              <div>
                <p className="eyebrow dark">Estrutura ministerial</p>
                <h2>Ministérios e responsáveis</h2>
              </div>
              <span>{ministries.length} ministérios</span>
            </header>
            <p className="panel-lead">
              Cada ministério possui página própria, apresentação, espaço para o
              líder e espaço para o pastor responsável.
            </p>
            <div className="admin-ministry-grid">
              {ministries.map((ministry) => (
                <article key={ministry.slug}>
                  <div>
                    <span>{ministry.group}</span>
                    <h3>{ministry.name}</h3>
                    <p>{ministry.summary}</p>
                  </div>
                  <dl>
                    <div>
                      <dt>Líder</dt>
                      <dd>{ministry.leader.name}</dd>
                    </div>
                    <div>
                      <dt>Pastor responsável</dt>
                      <dd>{ministry.pastor.name}</dd>
                    </div>
                  </dl>
                  <Link href={`/ministerios/${ministry.slug}`}>
                    Ver página <Icon name="arrow" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {active === "Vídeos" && can("media.manage") && (
          <div className="admin-two-column">
            <section className="admin-panel">
              <header>
                <div>
                  <p className="eyebrow dark">Documentários e histórias</p>
                  <h2>Adicionar vídeo</h2>
                </div>
                <span>YouTube, Vimeo ou arquivo</span>
              </header>
              <form className="admin-form" onSubmit={addMedia}>
                <label>
                  <span>Título</span>
                  <input name="title" required placeholder="A história dos nossos pastores" />
                </label>
                <label>
                  <span>Descrição</span>
                  <textarea
                    name="description"
                    placeholder="Uma breve apresentação do documentário."
                  />
                </label>
                <label>
                  <span>Link do vídeo</span>
                  <input
                    name="url"
                    required
                    placeholder="https://youtube.com/watch?v=... ou /media/video.mp4"
                  />
                </label>
                <label>
                  <span>Imagem de capa (opcional)</span>
                  <input
                    name="thumbnailUrl"
                    placeholder="https://... ou /media/capa.jpg"
                  />
                </label>
                <label>
                  <span>Publicação</span>
                  <select name="status" defaultValue="PUBLISHED">
                    <option value="PUBLISHED">Publicar agora</option>
                    <option value="DRAFT">Salvar como rascunho</option>
                  </select>
                </label>
                <label className="checkbox-field">
                  <input type="checkbox" name="featured" />
                  <span>Destacar este documentário</span>
                </label>
                <button className="button dark" disabled={busy}>
                  {busy ? "Salvando..." : "Adicionar vídeo"}
                </button>
              </form>
            </section>
            <section className="admin-panel">
              <header>
                <div>
                  <p className="eyebrow dark">Biblioteca</p>
                  <h2>Vídeos cadastrados</h2>
                </div>
                <span>{state.mediaItems.length}</span>
              </header>
              <div className="admin-media-list">
                {state.mediaItems.length === 0 && (
                  <div className="empty-state">
                    Nenhum vídeo cadastrado. A seção documental já está pronta
                    na página Sobre nós.
                  </div>
                )}
                {state.mediaItems.map((media) => (
                  <article key={media.id}>
                    <div>
                      <span>
                        {media.provider} ·{" "}
                        {media.status === "PUBLISHED" ? "Publicado" : "Rascunho"}
                      </span>
                      <h3>{media.title}</h3>
                      <p>{media.description || media.url}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeMedia(media.id)}
                      disabled={busy}
                    >
                      Remover
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </div>
        )}

        {active === "Pessoas" && can("people.view") && (
          <section className="admin-panel coming">
            <Icon name="shield" size={34} />
            <p className="eyebrow dark">Dados protegidos</p>
            <h2>Membros, visitantes e frequências</h2>
            <p>
              Este módulo respeita os perfis de acesso. Líderes visualizam apenas
              o que lhes for autorizado; administração e pastoral mantêm a visão
              necessária para acompanhamento.
            </p>
            <div>
              {["Membros", "Visitantes", "Células", "Cultos", "Discipulados"].map(
                (item) => (
                  <span key={item}>{item}</span>
                ),
              )}
            </div>
          </section>
        )}

        {active === "Usuários" && can("users.manage") && (
          <>
            <section className="admin-panel">
              <header>
                <div>
                  <p className="eyebrow dark">Controle do administrador</p>
                  <h2>Usuários e perfis de acesso</h2>
                </div>
                <span>{state.users.length} cadastrados</span>
              </header>
              <form className="new-user-form" onSubmit={addUser}>
                <label>
                  <span>Nome</span>
                  <input name="name" required placeholder="Nome completo" />
                </label>
                <label>
                  <span>E-mail de acesso</span>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="usuario@email.com"
                  />
                </label>
                <label>
                  <span>Perfil</span>
                  <select name="role" defaultValue="LEITURA">
                    {roleEntries.map(([key, definition]) => (
                      <option key={key} value={key}>
                        {definition.label}
                      </option>
                    ))}
                  </select>
                </label>
                <button className="button dark" disabled={busy}>
                  Adicionar usuário
                </button>
              </form>
              <div className="users-table table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Usuário</th>
                      <th>Perfil</th>
                      <th>Status</th>
                      <th>Última alteração</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.users.map((user) => {
                      const isCurrent = user.id === state.currentUser.id;
                      return (
                        <tr key={user.id}>
                          <td>
                            <strong>{user.name}</strong>
                            <span>{user.email}</span>
                          </td>
                          <td>
                            <select
                              value={user.role}
                              disabled={busy || isCurrent}
                              onChange={(event) =>
                                changeUser(user.id, {
                                  role: event.target.value as Role,
                                })
                              }
                            >
                              {roleEntries.map(([key, definition]) => (
                                <option key={key} value={key}>
                                  {definition.label}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            <button
                              type="button"
                              className={`status-button ${user.status.toLowerCase()}`}
                              disabled={busy || isCurrent}
                              onClick={() =>
                                changeUser(user.id, {
                                  status:
                                    user.status === "ACTIVE"
                                      ? "INACTIVE"
                                      : "ACTIVE",
                                })
                              }
                            >
                              {user.status === "ACTIVE" ? "Ativo" : "Inativo"}
                            </button>
                          </td>
                          <td>
                            {formatDate(user.updatedAt)}
                            {isCurrent && <small>Seu acesso protegido</small>}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="admin-panel">
              <header>
                <div>
                  <p className="eyebrow dark">Matriz de permissões</p>
                  <h2>O que cada perfil pode fazer</h2>
                </div>
              </header>
              <div className="role-grid">
                {roleEntries.map(([key, definition]) => (
                  <article key={key}>
                    <h3>{definition.label}</h3>
                    <p>{definition.description}</p>
                    <ul>
                      {definition.permissions.map((permission) => (
                        <li key={permission}>
                          <Icon name="check" /> {permissionLabel(permission)}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {active === "Relatórios" && can("reports.view") && (
          <section className="admin-panel audit-panel">
            <header>
              <div>
                <p className="eyebrow dark">Auditoria administrativa</p>
                <h2>Quem fez o quê</h2>
              </div>
              <span>{state.auditLogs.length} registros recentes</span>
            </header>
            <p className="panel-lead">
              Toda alteração administrativa registra usuário, perfil, ação,
              área afetada, conteúdo alterado e data/hora.
            </p>
            <div className="audit-filters">
              <label>
                <span>Pesquisar</span>
                <input
                  value={auditSearch}
                  onChange={(event) => setAuditSearch(event.target.value)}
                  placeholder="Usuário, ação ou conteúdo"
                />
              </label>
              <label>
                <span>Área</span>
                <select
                  value={auditArea}
                  onChange={(event) => setAuditArea(event.target.value)}
                >
                  <option value="TODAS">Todas</option>
                  {[...new Set(state.auditLogs.map((log) => log.area))].map(
                    (area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ),
                  )}
                </select>
              </label>
            </div>
            <div className="audit-table table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Data e hora</th>
                    <th>Usuário</th>
                    <th>Perfil</th>
                    <th>Ação</th>
                    <th>Área / alvo</th>
                    <th>Detalhes</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAudit.map((log) => (
                    <tr key={log.id}>
                      <td>{formatDate(log.createdAt)}</td>
                      <td>
                        <strong>{log.actorName}</strong>
                        <span>{log.actorEmail}</span>
                      </td>
                      <td>{roleDefinitions[log.actorRole].label}</td>
                      <td>
                        <b className="audit-action">{log.action}</b>
                      </td>
                      <td>
                        <strong>{log.area}</strong>
                        <span>{log.target}</span>
                      </td>
                      <td>{log.details || "—"}</td>
                    </tr>
                  ))}
                  {filteredAudit.length === 0 && (
                    <tr>
                      <td colSpan={6} className="empty-cell">
                        Nenhum registro corresponde aos filtros.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function permissionLabel(permission: Permission) {
  const labels: Record<Permission, string> = {
    "dashboard.view": "Visualizar painel",
    "content.manage": "Editar conteúdo",
    "ministries.manage": "Gerenciar ministérios",
    "events.manage": "Gerenciar eventos",
    "store.manage": "Gerenciar loja e pagamentos",
    "media.manage": "Publicar fotos e vídeos",
    "people.view": "Visualizar pessoas",
    "people.manage": "Gerenciar pessoas",
    "attendance.manage": "Registrar frequências",
    "reports.view": "Visualizar relatórios e auditoria",
    "users.manage": "Controlar usuários e acessos",
  };
  return labels[permission];
}
