"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, siteConfig } from "../site-content";
import { Icon } from "./Icons";

export function Brand({ light = true }: { light?: boolean }) {
  const logo = siteConfig.logo || "";
  return (
    <Link href="/" className={`brand ${light ? "light" : ""}`} aria-label="Aprisco Urbano">
      {logo ? <img className="brand-logo" src={logo} alt="Logo Aprisco Urbano" /> : <span className="brand-mark"><b>A</b><i /><b>U</b></span>}
      <span className="brand-name">{siteConfig.churchName}</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 36);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    const firstLink = mobileNavRef.current?.querySelector<HTMLAnchorElement>("a");
    window.requestAnimationFrame(() => firstLink?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;
      const links = Array.from(mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
      const focusable = [toggleRef.current, ...links].filter((item): item is HTMLElement => Boolean(item));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1181px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
        <div className="nav-wrap">
          <Brand light={open || !scrolled} />
          <nav className="desktop-nav" aria-label="Navegacao principal">
            {navigation.map((item) => <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} size={27} />
          </button>
        </div>
      </header>
      <nav
        ref={mobileNavRef}
        id="mobile-site-nav"
        className={`mobile-nav ${open ? "visible" : ""}`}
        aria-label="Navegacao movel"
        aria-hidden={!open}
      >
        <div className="mobile-nav-inner">
          <p>Encontre seu lugar</p>
          {navigation.map((item, i) => <Link tabIndex={open ? 0 : -1} className={pathname === item.href ? "active" : ""} href={item.href} key={item.href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item.label}</Link>)}
          <small>{siteConfig.service.day} · {siteConfig.service.time} · {siteConfig.city}</small>
        </div>
      </nav>
    </>
  );
}
