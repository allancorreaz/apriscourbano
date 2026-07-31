import Link from "next/link";
import { getChatGPTUser } from "../chatgpt-auth";
import { hasPermission } from "../access-control";
import { resolveCurrentUser } from "../admin-service";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { churchPurpose, ministryGroups } from "../site-content";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Ministerios",
  description: "Ministerios de servico e cuidado da Aprisco Urbano.",
};

export default async function Page() {
  const identity = await getChatGPTUser();
  const actor = identity ? await resolveCurrentUser(identity) : null;
  const canSeeAddCard =
    actor &&
    (hasPermission(actor.role, "ministries.manage") ||
      hasPermission(actor.role, "content.manage") ||
      hasPermission(actor.role, "users.manage"));

  return (
    <main>
      <PageHero
        eyebrow="Servir, cuidar, formar"
        title="Cada membro um sacerdote."
        description="Nos ministerios da Aprisco Urbano, servimos pessoas, sustentamos a casa e vivemos a missao em gestos praticos, ambientes seguros e relacoes verdadeiras."
        image="/media/hero-glaucio-pregando.png"
      />
      <section className="inner-section section-pad">
        <div className="container centered-page">
          <p className="eyebrow dark">Encontre sua expressao</p>
          <h2 className="display">Nao ocupamos posicoes.<br /><em>Servimos pessoas.</em></h2>
          <p>{churchPurpose.vision}</p>
        </div>

        <div className="container purpose-grid purpose-grid-inner">
          <article><span>Missao da casa</span><p>{churchPurpose.mission}</p></article>
          <article><span>Ministerios de servico</span><p>Recepcao, midia, louvor e outras frentes ajudam a transformar cada culto e encontro em uma extensao viva da igreja.</p></article>
        </div>

        <div className="container ministry-stack">
          {ministryGroups.map((group, groupIndex) => (
            <section key={group.id}>
              <header>
                <span>0{groupIndex + 1}</span>
                <div>
                  <p className="eyebrow dark">{group.eyebrow}</p>
                  <h2>{group.title}</h2>
                  <p>{group.description}</p>
                </div>
              </header>
              <div className="ministry-grid">
                {group.ministries.map((ministry, index) => (
                  <article key={ministry.slug}>
                    <span>0{index + 1}</span>
                    <Icon name={ministry.icon} size={28} />
                    <h3>{ministry.name}</h3>
                    <p>{ministry.summary}</p>
                    <div className="ministry-responsible">
                      <small>Lideranca</small>
                      <strong>{ministry.leader.name}</strong>
                    </div>
                    <Link href={`/ministerios/${ministry.slug}`} className="text-link">
                      Conhecer ministerio <Icon name="arrow" />
                    </Link>
                  </article>
                ))}
                {canSeeAddCard ? <article className="add-card"><b>+</b><h3>Adicionar ministerio</h3><p>Este espaco fica visivel apenas para perfis com permissao de edicao do site ou administracao.</p></article> : null}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="leaders section-pad">
        <div className="container leaders-layout">
          <div><p className="eyebrow">Lideranca que cuida</p><h2 className="display light">Cada ministerio tem<br /><em>uma lideranca proxima.</em></h2></div>
          <div className="leadership-note"><p>Nas paginas individuais voce encontra foco, apresentacao, foto da lideranca e, quando houver, a cobertura pastoral responsavel por aquela frente.</p><span>Novos ministerios e ajustes de lideranca permanecem protegidos para quem possui acesso de edicao.</span></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
