import { CellsGrid } from "../components/CellsGrid";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
export const metadata={title:"Células",description:"Encontre uma célula da Aprisco Urbano."};
export default function Page(){return <main><PageHero eyebrow="Igreja nas casas" title="A vida muda quando ninguém caminha sozinho." description="Encontre pessoas com quem compartilhar a semana, crescer na Palavra e construir amizades que permanecem." image="/media/celulas-comunidade.png"/>
  <section className="inner-section section-pad"><div className="container page-intro"><div><p className="eyebrow dark">Encontre seu lugar</p><h2 className="display">Uma célula para<br/><em>chamar de casa.</em></h2></div><p>Use os filtros para encontrar o grupo mais próximo do seu momento de vida. Endereço e líder são atualizáveis pela equipe.</p></div><div className="container"><CellsGrid/></div></section>
  <section className="simple-cta"><div className="container"><p className="eyebrow">Ainda não sabe qual escolher?</p><h2>A gente ajuda você a encontrar a célula certa.</h2><a href="/contato" className="button ivory">Falar com a Aprisco</a></div></section><SiteFooter/></main>}
