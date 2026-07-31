function youtubeId(rawUrl: string) {
  try {
    const url = new URL(rawUrl, "https://aprisco.local");
    if (url.hostname === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] ?? null;
    }
    if (url.hostname.includes("youtube.com")) {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      const parts = url.pathname.split("/").filter(Boolean);
      if (parts[0] === "embed" || parts[0] === "shorts") return parts[1] ?? null;
    }
  } catch {
    return null;
  }
  return null;
}

function vimeoId(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    if (!url.hostname.includes("vimeo.com")) return null;
    return (
      url.pathname
        .split("/")
        .filter(Boolean)
        .find((part) => /^\d+$/.test(part)) ?? null
    );
  } catch {
    return null;
  }
}

function instagramEmbedUrl(rawUrl: string) {
  try {
    const url = new URL(rawUrl);
    if (!url.hostname.includes("instagram.com")) return null;
    const parts = url.pathname.split("/").filter(Boolean);
    if (parts[0] === "reel" && parts[1]) {
      return `https://www.instagram.com/reel/${parts[1]}/embed`;
    }
  } catch {
    return null;
  }
  return null;
}

export function VideoPlayer({
  title,
  url,
  poster,
}: {
  title: string;
  url: string;
  poster?: string;
}) {
  const youtube = youtubeId(url);
  if (youtube && /^[a-zA-Z0-9_-]{6,20}$/.test(youtube)) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtube}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  const vimeo = vimeoId(url);
  if (vimeo) {
    return (
      <iframe
        src={`https://player.vimeo.com/video/${vimeo}`}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }

  const instagram = instagramEmbedUrl(url);
  if (instagram) {
    return (
      <iframe
        src={instagram}
        title={title}
        loading="lazy"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  const directVideo =
    url.startsWith("/media/") ||
    /\.(mp4|webm|ogg)(?:$|[?#])/i.test(url);
  if (directVideo) {
    return (
      <video controls preload="metadata" playsInline poster={poster}>
        <source src={url} />
        Seu navegador nao conseguiu reproduzir este video.
      </video>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className="external-video">
      Assistir ao video em uma nova aba
    </a>
  );
}
