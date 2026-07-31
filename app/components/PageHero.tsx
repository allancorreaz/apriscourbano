"use client";

import type { CSSProperties } from "react";
import { SiteHeader } from "./SiteHeader";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  compact?: boolean;
}) {
  const configuredImage = image || "/media/hero-glaucio-pregando.png";

  return (
    <>
      <SiteHeader />
      <section
        className={`page-hero ${compact ? "compact" : ""}`}
        style={
          configuredImage
            ? ({ "--page-image": `url(${configuredImage})` } as CSSProperties)
            : undefined
        }
      >
        <div className="page-shade" />
        <div className="container">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}
