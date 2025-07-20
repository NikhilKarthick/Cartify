import React, { useEffect, useRef, useState, useCallback } from "react";

interface CarouselProps {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const items = React.Children.toArray(children); // Ensures children have stable keys
  const length = items.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  useEffect(() => {
    if (!autoSlide) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => next(), autoSlideInterval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, autoSlide, autoSlideInterval, next]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
       {items.map((child) => {
        if (React.isValidElement(child)) {
            return (
            <div key={child.key ?? undefined} className="w-full flex-shrink-0">
                {child}
            </div>
            );
        }
        return null;
        })}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-2 bg-white/30 hover:bg-white/50 rounded-full text-black"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="p-2 bg-white/30 hover:bg-white/50 rounded-full text-black"
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
       {items.map((child, idx) => {
        if (React.isValidElement(child)) {
            return (
            <button
                key={child.key ?? idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none ${
                current === idx ? "bg-white" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
            />
            );
        }
        return null;
        })}

      </div>
    </div>
  );
};
