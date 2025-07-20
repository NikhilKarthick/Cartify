import React from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: string;
  level?: number; // Optional and used only for Storybook
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = "/",
  level,
}) => {
  const visibleItems = items.slice(0, level ?? items.length);

  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center space-x-2 text-gray-700">
        {visibleItems.map((item, index) => {
          const isHome = index === 0 && item.label.toLowerCase() === "home";
          const isLast = index === visibleItems.length - 1;

          let content;
          if (isHome) {
            content = (
              <Link
                to={item.href ?? "/"}
                className="text-blue-600 hover:underline flex items-center space-x-1"
              >
                <HiHome className="w-4 h-4" />
              </Link>
            );
          } else if (item.href) {
            content = (
              <Link
                to={item.href}
                className="text-blue-600 hover:underline font-semibold"
              >
                {item.label}
              </Link>
            );
          } else {
            content = (
              <span className="font-semibold text-gray-600">{item.label}</span>
            );
          }

          return (
            <li key={item.label} className="flex items-center">
              {content}
              {!isLast && <span className="mx-2 text-gray-400">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
