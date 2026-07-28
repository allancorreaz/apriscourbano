"use client";

import { useEffect, useState } from "react";

export function HeroMedia({
  initialImage,
  initialVideo = "",
  initialType = "image",
}: {
  initialImage: string;
  initialVideo?: string;
  initialType?: "image" | "video";
}) {
  const [media, setMedia] = useState({
    type: initialType,
    image: initialImage,
    video: initialVideo,
  });

  useEffect(() => {
    let active = true;
    fetch("/api/public/settings")
      .then((response) => (response.ok ? response.json() : null))
      .then((settings: Record<string, string> | null) => {
        if (!active || !settings) return;
        const type =
          settings.hero_media_type === "video" ? "video" : "image";
        setMedia({
          type,
          image: settings.hero_image_url || initialImage,
          video: settings.hero_video_url || "",
        });
      })
      .catch(() => {
        // A mídia configurada no código continua como fallback seguro.
      });
    return () => {
      active = false;
    };
  }, [initialImage]);

  const useVideo = media.type === "video" && media.video.length > 0;
  return (
    <div className="hero-media" aria-hidden="true">
      {useVideo ? (
        <video autoPlay muted loop playsInline poster={media.image}>
          <source src={media.video} />
        </video>
      ) : (
        <div style={{ backgroundImage: `url(${media.image})` }} />
      )}
    </div>
  );
}

