import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ id, title, description, image }) => {
  const [flipped, setFlipped] = useState(false);

  const handleToggle = () => setFlipped((prev) => !prev);

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="w-full h-64 relative outline-none focus:ring-2 focus:ring-blue-500 perspective"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-65 "
            loading="lazy"
          />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 shadow-md rounded-lg p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-gray-800 font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-700 mb-4">{description}</p>
          </div>

          <Link
            to={`/discounts/${id}`}
            onClick={(e) => e.stopPropagation()} // Prevents flipping back when clicking
            className="mt-auto inline-block w-full text-center bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </button>
  );
};
