"use client";

export function HeroMedia({
  initialImage,
  initialVideo = "",
  initialType = "image",
}: {
  initialImage: string;
  initialVideo?: string;
  initialType?: "image" | "video";
}) {
  const media = {
    type: initialType,
    image: initialImage,
    video: initialVideo,
  };

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
