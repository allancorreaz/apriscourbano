import Link from "next/link";
import { AdminDashboard } from "../components/AdminDashboard";
import {
  chatGPTSignOutPath,
  requireChatGPTUser,
} from "../chatgpt-auth";
import { getAdminState, resolveCurrentUser } from "../admin-service";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Administração",
  description: "Área administrativa protegida.",
};

export default async function Page() {
  const identity = await requireChatGPTUser("/admin");
  const actor = await resolveCurrentUser(identity);

  if (!actor) {
    return (
      <main className="access-page">
        <section>
          <span className="access-mark">AU</span>
          <p className="eyebrow dark">Acesso protegido</p>
          <h1>Seu usuário ainda não possui acesso.</h1>
          <p>
            Peça ao administrador para cadastrar o e-mail{" "}
            <strong>{identity.email}</strong> e definir seu perfil.
          </p>
          <div>
            <Link className="button dark" href="/">
              Voltar ao site
            </Link>
            <Link className="text-link" href={chatGPTSignOutPath("/")}>
              Sair desta conta
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const state = await getAdminState(actor);
  return (
    <AdminDashboard
      initialState={state}
      signOutPath={chatGPTSignOutPath("/")}
    />
  );
}

