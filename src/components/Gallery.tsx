import React, { useState } from "react";
import { ZoomImage } from "./ZoomImage";

export interface GalleryImage {
  id: string;
  src: string;
  alt?: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  className?: string;
  enableZoom?: boolean; 
}

export const Gallery: React.FC<GalleryProps> = ({
  images,
  className,
  enableZoom = true, 
}) => {
  const [activeId, setActiveId] = useState(images[0]?.id);

  const activeImage = images.find((img) => img.id === activeId);

  if (!activeImage) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main image */}
      {enableZoom ? (
        <ZoomImage
          src={activeImage.src}
          alt={activeImage.alt ?? "Product Image"}
          className="rounded-lg w-full h-auto object-cover object-center"
          data-testid="main-image" //  for testing
        />
      ) : (
        <img
          src={activeImage.src}
          alt={activeImage.alt ?? "Product Image"}
          className="rounded-lg w-full h-auto object-cover object-center"
          data-testid="main-image" //  for consistency
        />
      )}

      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto">
        {images.map((img) => (
          <button
            key={img.id}
            onClick={() => setActiveId(img.id)}
            className={`border rounded overflow-hidden focus:outline-none ${
              activeId === img.id
                ? "border-blue-500 ring-2 ring-blue-300"
                : "border-transparent"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt ?? "Thumbnail"}
              className="w-20 h-20 object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
