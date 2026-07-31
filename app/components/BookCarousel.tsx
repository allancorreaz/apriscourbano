"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icons";

export function BookCarousel({
  images,
  title,
}: {
  images: readonly string[];
  title: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="book-carousel">
      <div className="book-carousel-frame" aria-label={title}>
        {images.map((image, index) => (
          <div
            key={image}
            className={`book-carousel-slide ${index === active ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      {images.length > 1 ? (
        <div className="book-carousel-dots" aria-label="Selecionar foto do livro">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Mostrar foto ${index + 1}`}
            >
              <Icon name="spark" size={12} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
