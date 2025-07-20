import React, { useState, useEffect } from "react";
import clsx from "clsx";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
  className?: string;

  /** Optional left gradient color (Storybook-only) */
  fromColor?: string;

  /** Optional middle gradient color (Storybook-only) */
  viaColor?: string;

  /** Optional right gradient color (Storybook-only) */
  toColor?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultIndex = 0,
  className,
  fromColor,
  viaColor,
  toColor,
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    setActiveIndex(defaultIndex);
  }, [defaultIndex]);

  const gradientStyle =
    fromColor && viaColor && toColor
      ? {
          background: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
        }
      : undefined;

  return (
    <div className={clsx("w-full", className)} style={gradientStyle}>
      <div className="flex border-b border-gray-700 space-x-4">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={tab.label}
              className={clsx(
                "px-4 py-2 font-medium text-sm transition border-b-2",
                isActive
                  ? "text-white border-green-500"
                  : "text-gray-400 border-transparent hover:text-white"
              )}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
};
