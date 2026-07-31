import Link from "next/link";
import { navigation, siteConfig } from "../site-content";
import { Icon } from "./Icons";
import { Brand } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>Uma casa para pertencer.<br />Um lugar para crescer.</p>
        </div>
        <div>
          <b>Explore</b>
          {navigation.slice(0, 4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <b>Conheca</b>
          {navigation.slice(4).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          <Link href="/admin">Area administrativa</Link>
        </div>
        <div>
          <b>Venha celebrar</b>
          <strong>{siteConfig.service.day}</strong>
          <span>{siteConfig.service.time}</span>
          <span>{siteConfig.city}</span>
          <a href={siteConfig.social.instagram}><Icon name="instagram" />{siteConfig.instagramHandle}</a>
          <small>{siteConfig.seniorPastors.pastor.instagram} · {siteConfig.seniorPastors.pastora.instagram}</small>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Aprisco Urbano</span><span>Conectando pessoas a Jesus e umas as outras.</span></div>
    </footer>
  );
}
