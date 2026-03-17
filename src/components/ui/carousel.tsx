import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface CarouselProps {
  children: React.ReactNode[];
  visibleCount?: number;
}

export default function Carousel({ children, visibleCount = 1 }: CarouselProps) {
  const [start, setStart] = React.useState(0);
  const total = children.length;

  const handlePrev = () => {
    setStart((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStart((prev) => Math.min(prev + visibleCount, total - visibleCount));
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={handlePrev}
          disabled={start === 0}
          className="p-2 bg-slate-200 rounded-full disabled:opacity-50"
          aria-label="Anterior"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          disabled={start + visibleCount >= total}
          className="p-2 bg-slate-200 rounded-full disabled:opacity-50"
          aria-label="Próximo"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex gap-6 overflow-hidden">
        {children.slice(start, start + visibleCount)}
      </div>
    </div>
  );
}
