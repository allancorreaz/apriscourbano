import Link from "next/link";
import { Icon } from "../components/Icons";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { ministryGroups } from "../site-content";

export const metadata = {
  title: "Ministérios",
  description: "Ministérios de serviço e cuidado da Aprisco Urbano.",
};

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Servir, cuidar, formar"
        title="Dons diferentes. O mesmo propósito."
        description="Cada ministério existe para revelar o amor de Jesus em gestos práticos, ambientes seguros e relacionamentos verdadeiros."
        image="/media/hero-noite-pertencimento.png"
      />
      <section className="inner-section section-pad">
        <div className="container centered-page">
          <p className="eyebrow dark">Encontre sua expressão</p>
          <h2 className="display">
            Não ocupamos posições.
            <br />
            <em>Servimos pessoas.</em>
          </h2>
          <p>
            Conheça cada frente, sua missão, seu líder e a cobertura pastoral
            responsável.
          </p>
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
                      <small>Líder</small>
                      <strong>{ministry.leader.name}</strong>
                    </div>
                    <Link
                      href={`/ministerios/${ministry.slug}`}
                      className="text-link"
                    >
                      Conhecer ministério <Icon name="arrow" />
                    </Link>
                  </article>
                ))}
                <article className="add-card">
                  <b>+</b>
                  <h3>Outro ministério</h3>
                  <p>
                    Espaço pronto para novas frentes de serviço e cuidado.
                  </p>
                </article>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="leaders section-pad">
        <div className="container leaders-layout">
          <div>
            <p className="eyebrow">Liderança que cuida</p>
            <h2 className="display light">
              Cada ministério tem
              <br />
              <em>uma liderança próxima.</em>
            </h2>
          </div>
          <div className="leadership-note">
            <p>
              Nas páginas individuais haverá espaço para a fotografia, a
              apresentação do líder do ministério e a fotografia do pastor ou
              pastora responsável.
            </p>
            <span>
              Os nomes e retratos oficiais poderão ser atualizados conforme a
              igreja autorizar a publicação.
            </span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

