import Link from "next/link";
import { HeroMedia } from "./components/HeroMedia";
import { Icon } from "./components/Icons";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import {
  bookGallery,
  cells,
  churchPurpose,
  events,
  ministryGroups,
  products,
  siteConfig,
} from "./site-content";
import { BookCarousel } from "./components/BookCarousel";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="home-hero">
        <HeroMedia
          initialImage={siteConfig.hero.image}
          initialType={siteConfig.hero.type}
          initialVideo={siteConfig.hero.type === "video" ? siteConfig.hero.video : ""}
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <div>
            <p className="eyebrow">Igreja Aprisco Urbano</p>
            <h1>
              {churchPurpose.mission}
            </h1>
            <p className="hero-desc hero-purpose-text">
              <strong>Visao:</strong> {churchPurpose.vision}
            </p>
            <p className="hero-desc hero-meta-text">
              Domingos às 18h · {siteConfig.city} · {siteConfig.instagramHandle}
            </p>
            <div className="hero-actions">
              <Link href="/contato" className="button ivory">Planeje sua visita</Link>
              <Link href="/celulas" className="button outline">Encontre uma celula <Icon name="arrow" /></Link>
            </div>
            <div className="hero-social-strip">
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer">{siteConfig.instagramHandle}</a>
              <span>{siteConfig.seniorPastors.pastor.instagram}</span>
              <span>{siteConfig.seniorPastors.pastora.instagram}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="welcome section-pad">
        <div className="container split">
          <div><p className="eyebrow dark">Seja bem-vindo</p><h2 className="display">Igreja acontece quando a vida e <em>compartilhada.</em></h2></div>
          <div className="intro-copy"><p>A Aprisco Urbano e uma comunidade para quem quer conhecer Jesus, construir relacionamentos verdadeiros e crescer em proposito.</p><Link href="/sobre" className="text-link">Conheca nossa historia <Icon name="arrow" /></Link></div>
        </div>
        <div className="container pathway">
          {[["01","Venha como voce esta","Seu primeiro domingo pode ser simples, leve e acolhedor.","/contato"],["02","Encontre sua comunidade","Celulas sao lugares de cuidado, amizade e crescimento.","/celulas"],["03","Descubra seu lugar","Ha um ministerio onde seus dons podem servir pessoas.","/ministerios"]].map((item) => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><Link href={item[3]}><Icon name="arrow" /></Link></article>)}
        </div>
      </section>

      <section className="purpose-section section-pad">
        <div className="container center-title"><p className="eyebrow dark">Visao e missao</p><h2 className="display">Uma igreja que quer ser igual a Jesus<br /><em>e fazer as mesmas coisas que Ele fez.</em></h2></div>
        <div className="container purpose-grid">
          <article><span>Visao</span><p>{churchPurpose.vision}</p></article>
          <article><span>Missao</span><p>{churchPurpose.mission}</p></article>
        </div>
      </section>

      <section className="dark-section section-pad">
        <div className="container split">
          <div><p className="eyebrow">Igreja nas casas</p><h2 className="display light">Cada casa uma extensao da igreja.<br /><em>Cada quinta-feira uma oportunidade de discipular.</em></h2></div>
          <div className="intro-copy light"><p>As celulas da Aprisco Urbano se reunem todas as quintas-feiras às 19h para sustentar pessoas, formar discipulos e expandir a vida da igreja pela cidade.</p><Link href="/celulas" className="text-link light">Ver todas as celulas <Icon name="arrow" /></Link></div>
        </div>
        <div className="container featured-cells">
          {cells.slice(0,3).map((cell, i) => <article key={cell.id}>
            <div style={{ backgroundImage: `linear-gradient(180deg,transparent 38%,rgba(3,18,23,.9)),url(${cell.image})`, backgroundPosition: `${42 + i * 12}% center` }}>
              <span>{cell.type}</span>
              <section><p>{cell.day} · {cell.time}</p><h3>{cell.name}</h3><small><Icon name="pin" />{cell.neighborhood}</small></section>
            </div><Link href="/celulas"><Icon name="arrow" /></Link>
          </article>)}
        </div>
      </section>

      <section className="announcements section-pad">
        <div className="container split">
          <div><p className="eyebrow dark">Avisos da casa</p><h2 className="display">O que estamos vivendo<br /><em>agora como igreja.</em></h2></div>
          <div className="intro-copy"><p>Campanhas, conferencias, comunhao e indicacoes importantes para a vida da igreja reunidas em um so lugar.</p><Link href="/eventos" className="text-link">Ver agenda completa <Icon name="arrow" /></Link></div>
        </div>
        <div className="container announcement-grid">
          {events.map((event) => <article key={event.id}><span>{event.status}</span><h3>{event.title}</h3><strong>{event.date}</strong><p>{event.description}</p><Link href={event.href} className="text-link">{event.action} <Icon name="arrow" /></Link></article>)}
        </div>
      </section>

      <section className="ministries-home section-pad">
        <div className="container center-title"><p className="eyebrow dark">Uma igreja, muitos lugares para servir</p><h2 className="display">Cada pessoa tem valor.<br /><em>Cada dom tem proposito.</em></h2></div>
        <div className="container ministry-cols">
          {ministryGroups.map((group, index) => <article key={group.id}><header><span>0{index + 1}</span><div><p className="eyebrow dark">{group.eyebrow}</p><h3>{group.title}</h3></div></header><ul>{group.ministries.slice(0, 4).map((ministry) => <li key={ministry.slug}><Link href={`/ministerios/${ministry.slug}`} aria-label={`Conhecer o ministerio ${ministry.name}`}><Icon name={ministry.icon} /><span>{ministry.name}</span><Icon name="arrow" /></Link></li>)}</ul></article>)}
        </div>
        <div className="container centered"><Link href="/ministerios" className="button dark">Conheca todos os ministerios <Icon name="arrow" /></Link></div>
      </section>

      <section className="event-home" style={{ backgroundImage: `linear-gradient(90deg,rgba(3,17,22,.96),rgba(3,17,22,.68) 45%,rgba(3,17,22,.18)),url(${events[1].image})` }}>
        <div className="container"><p className="eyebrow">Destaque desta semana</p><h2>FAGULHA FLOW.<br />31/07 as 19h30 e 01/08 a partir das 7h30.</h2><p>A conferencia FAGULHA FLOW comeca hoje, sexta-feira, 31 de julho de 2026, às 19h30, e continua no sabado, 1 de agosto de 2026, a partir das 7h30.</p><Link href="/eventos" className="button ivory">Ver agenda completa <Icon name="arrow" /></Link><div className="payments"><span>Inscricoes e apoio preparados para</span><b>PIX</b><b>CARTAO</b><b>ACOLHIMENTO</b></div></div>
      </section>

      <section className="store-home section-pad">
        <div className="container split"><div><p className="eyebrow dark">Livro em destaque</p><h2 className="display">Glaucio Muniz<br /><em>Cumpra plenamente o seu ministerio.</em></h2></div><div className="intro-copy"><p>Um unico card com fotos reais do livro do pastor Glaucio, em carrossel responsivo para celular, tablet e desktop.</p><Link href="/loja" className="text-link">Ver a loja <Icon name="arrow" /></Link></div></div>
        <div className="container featured-book-card"><article><BookCarousel images={bookGallery} title="Livro do pastor Glaucio" /><section><p>Livro Aprisco</p><h3>{products[0][1]}</h3><span>{products[0][3]}</span></section></article></div>
      </section>

      <section className="final-cta"><div className="container"><p className="eyebrow">Seu proximo domingo pode ser diferente</p><h2>Tem lugar para voce aqui.</h2><Link href="/contato" className="button ivory">Planeje sua visita <Icon name="arrow" /></Link></div></section>
      <SiteFooter />
    </main>
  );
}
