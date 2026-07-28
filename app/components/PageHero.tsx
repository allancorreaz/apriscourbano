"use client";
import { useEffect, useState } from "react";
import { SiteHeader } from "./SiteHeader";
export function PageHero({eyebrow,title,description,image,compact=false}:{eyebrow:string;title:string;description:string;image?:string;compact?:boolean}) {
  const [configuredImage, setConfiguredImage] = useState(image || "");
  useEffect(() => {
    fetch("/api/public/settings").then(r => r.ok ? r.json() : null)
      .then((settings: Record<string,string> | null) => {
        if (!image && settings?.page_background_url) setConfiguredImage(settings.page_background_url);
      }).catch(() => undefined);
  }, [image]);
  return <><SiteHeader/><section className={`page-hero ${compact?"compact":""}`} style={configuredImage?{"--page-image":`url(${configuredImage})`} as React.CSSProperties:undefined}>
    <div className="page-shade"/><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
  </section></>;
}
