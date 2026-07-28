import Link from "next/link";
import { HeroMedia } from "./components/HeroMedia";
import { Icon } from "./components/Icons";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { cells, events, ministryGroups, products, siteConfig } from "./site-content";

export default function Home() {
  return <main>
    <SiteHeader/>
    <section className="home-hero">
      <HeroMedia
        initialImage={siteConfig.hero.image}
        initialType={siteConfig.hero.type}
        initialVideo={siteConfig.hero.type === "video" ? siteConfig.hero.video : ""}
      />
      <div className="hero-shade"/>
      <div className="container hero-content">
        <div>
          <p className="eyebrow">Igreja Aprisco Urbano</p>
          <h1>Uma casa para pertencer. <em>Um lugar para crescer.</em></h1>
          <p className="hero-desc">Venha viver igreja, comunhão e propósito com a gente.</p>
          <div className="hero-actions">
            <Link href="/contato" className="button ivory">Planeje sua visita</Link>
            <Link href="/celulas" className="button outline">Encontre uma célula <Icon name="arrow"/></Link>
          </div>
          <div className="service-note"><i/><span>{siteConfig.service.day}</span><b>•</b><span>{siteConfig.service.time}</span></div>
        </div>
      </div>
    </section>

    <section className="welcome section-pad">
      <div className="container split">
        <div><p className="eyebrow dark">Seja bem-vindo</p><h2 className="display">Igreja acontece quando a vida é <em>compartilhada.</em></h2></div>
        <div className="intro-copy"><p>A Aprisco Urbano é uma comunidade para quem quer conhecer Jesus, construir relacionamentos verdadeiros e crescer em propósito.</p><Link href="/sobre" className="text-link">Conheça nossa história <Icon name="arrow"/></Link></div>
      </div>
      <div className="container pathway">
        {[
          ["01","Venha como você está","Seu primeiro domingo pode ser simples, leve e acolhedor.","/contato"],
          ["02","Encontre sua comunidade","Células são lugares de cuidado, amizade e crescimento.","/celulas"],
          ["03","Descubra seu lugar","Há um ministério onde seus dons podem servir pessoas.","/ministerios"]
        ].map(item => <article key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><Link href={item[3]}><Icon name="arrow"/></Link></article>)}
      </div>
    </section>

    <section className="dark-section section-pad">
      <div className="container split">
        <div><p className="eyebrow">Igreja nas casas</p><h2 className="display light">Perto de você.<br/><em>Perto de verdade.</em></h2></div>
        <div className="intro-copy light"><p>Um lugar durante a semana para ser conhecido pelo nome, caminhar junto e amadurecer na fé.</p><Link href="/celulas" className="text-link light">Ver todas as células <Icon name="arrow"/></Link></div>
      </div>
      <div className="container featured-cells">
        {cells.map((cell,i) => <article key={cell.id}>
          <div style={{backgroundImage:`linear-gradient(180deg,transparent 38%,rgba(3,18,23,.9)),url(${cell.image})`,backgroundPosition:`${42+i*12}% center`}}>
            <span>{cell.age}</span><section><p>{cell.day} · {cell.time}</p><h3>{cell.name}</h3><small><Icon name="pin"/>{cell.neighborhood}</small></section>
          </div><Link href="/celulas"><Icon name="arrow"/></Link>
        </article>)}
      </div>
    </section>

    <section className="ministries-home section-pad">
      <div className="container center-title"><p className="eyebrow dark">Uma igreja, muitos lugares para servir</p><h2 className="display">Cada pessoa tem valor.<br/><em>Cada dom tem propósito.</em></h2></div>
      <div className="container ministry-cols">
        {ministryGroups.map((g,i)=><article key={g.id}><header><span>0{i+1}</span><div><p className="eyebrow dark">{g.eyebrow}</p><h3>{g.title}</h3></div></header>
          <ul>{g.ministries.slice(0,4).map(m=><li key={m.slug}><Link href={`/ministerios/${m.slug}`} aria-label={`Conhecer o ministério ${m.name}`}><Icon name={m.icon}/><span>{m.name}</span><Icon name="arrow"/></Link></li>)}</ul>
        </article>)}
      </div>
      <div className="container centered"><Link href="/ministerios" className="button dark">Conheça todos os ministérios <Icon name="arrow"/></Link></div>
    </section>

    <section className="event-home" style={{backgroundImage:`linear-gradient(90deg,rgba(3,17,22,.96),rgba(3,17,22,.68) 45%,rgba(3,17,22,.18)),url(${events[1].image})`}}>
      <div className="container"><p className="eyebrow">Próximos encontros</p><h2>Há sempre um novo<br/>capítulo para viver.</h2><p>Eventos e encontros especiais em uma experiência de inscrição simples e segura.</p><Link href="/eventos" className="button ivory">Ver agenda completa <Icon name="arrow"/></Link><div className="payments"><span>Inscrições preparadas para</span><b>PIX</b><b>CARTÃO</b><b>SYMPLA</b></div></div>
    </section>

    <section className="store-home section-pad">
      <div className="container split"><div><p className="eyebrow dark">Loja Aprisco</p><h2 className="display">Identidade que vai<br/><em>além do domingo.</em></h2></div><div className="intro-copy"><p>Produtos da comunidade com catálogo preparado para retirada local e entregas.</p><Link href="/loja" className="text-link">Visitar a loja <Icon name="arrow"/></Link></div></div>
      <div className="container products">{products.map((p,i)=><article key={p[0]}><div className={p[4]}><span>{i===0?"AU":i===1?"AP":"A"}</span><i/></div><p>{p[2]}</p><h3>{p[1]}</h3><small>Em breve</small></article>)}</div>
    </section>
    <section className="final-cta"><div className="container"><p className="eyebrow">Seu próximo domingo pode ser diferente</p><h2>Tem lugar para você aqui.</h2><Link href="/contato" className="button ivory">Planeje sua visita <Icon name="arrow"/></Link></div></section>
    <SiteFooter/>
  </main>;
}
