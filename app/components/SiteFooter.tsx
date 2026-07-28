import Link from "next/link";
import { navigation, siteConfig } from "../site-content";
import { Icon } from "./Icons";
import { Brand } from "./SiteHeader";
export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div><Brand/><p>Uma casa para pertencer.<br/>Um lugar para crescer.</p></div>
      <div><b>Explore</b>{navigation.slice(0,4).map(i => <Link href={i.href} key={i.href}>{i.label}</Link>)}</div>
      <div><b>Conheça</b>{navigation.slice(4).map(i => <Link href={i.href} key={i.href}>{i.label}</Link>)}<Link href="/admin">Área administrativa</Link></div>
      <div><b>Venha celebrar</b><strong>{siteConfig.service.day}</strong><span>{siteConfig.service.time}</span><span>{siteConfig.city}</span><a href={siteConfig.social.instagram}><Icon name="instagram"/>{siteConfig.instagramHandle}</a></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Aprisco Urbano</span><span>Conectando pessoas a Jesus e umas às outras.</span></div>
  </footer>;
}
