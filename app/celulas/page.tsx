import { CellsGrid } from "../components/CellsGrid";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { churchPurpose } from "../site-content";

export const metadata = { title: "Celulas", description: "Encontre uma celula da Aprisco Urbano." };

export default function Page() {
  return (
    <main>
      <PageHero
        eyebrow="Igreja nas casas"
        title="Cada casa uma extensao da igreja."
        description="As celulas da Aprisco Urbano se reunem todas as quintas-feiras às 19h para discipular, sustentar e enviar pessoas em comunidade."
        image="/media/celula-ide.png"
      />
      <section className="inner-section section-pad">
        <div className="container page-intro">
          <div>
            <p className="eyebrow dark">Encontre uma celula perto de voce</p>
            <h2 className="display">
              Viver a missao da casa
              <br />
              <em>tambem durante a semana.</em>
            </h2>
          </div>
          <p>
            {churchPurpose.vision}
          </p>
        </div>
        <div className="container purpose-grid purpose-grid-inner">
          <article>
            <span>Missao nas celulas</span>
            <p>{churchPurpose.mission}</p>
          </article>
          <article>
            <span>Horario da casa</span>
            <p>Todas as celulas se reunem às quintas-feiras às 19h, em casas, bairros e frentes que estendem a vida da igreja para perto das pessoas.</p>
          </article>
        </div>
        <div className="container"><CellsGrid /></div>
      </section>
      <section className="simple-cta">
        <div className="container">
          <p className="eyebrow">Ainda nao sabe qual escolher?</p>
          <h2>A gente ajuda voce a encontrar a celula certa.</h2>
          <a href="/contato" className="button ivory">Falar com a Aprisco</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
