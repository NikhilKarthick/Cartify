import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  id?: string;
}

type AccordionMode = "single" | "multiple" | "none";

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string | string[];
  mode?: AccordionMode;
  accentColor?: string;
  containerClassName?: string; // controls outer container styling
  itemClassName?: string; // controls each button styling
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  mode = "single",
  accentColor = "text-white",
  containerClassName = "bg-gray-800",
  itemClassName = "bg-gray-800 hover:bg-gray-700",
}) => {
  // Normalize to string array
  const normalizeDefaultOpenIds = (): string[] => {
    if (typeof defaultOpenId === "string") return [defaultOpenId];
    if (Array.isArray(defaultOpenId)) return defaultOpenId;
    return [];
  };

  const [openIds, setOpenIds] = useState<string[]>(normalizeDefaultOpenIds());

  useEffect(() => {
    setOpenIds(normalizeDefaultOpenIds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultOpenId]);

  const toggleId = (id: string) => {
    if (mode === "none") return;

    if (mode === "multiple") {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else if (mode === "single") {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      className={`w-full divide-y divide-gray-200 border rounded-lg overflow-hidden ${containerClassName}`}
    >
      {items.map((item) => {
        const id = item.id ?? item.title;
        const isOpen = openIds.includes(id);

        return (
          <div key={id}>
            <button
              onClick={() => toggleId(id)}
              className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium transition ${itemClassName} ${accentColor}`}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${id}`}
            >
              <span>{item.title}</span>
              {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            {isOpen && (
              <div
                id={`accordion-content-${id}`}
                className="px-4 py-3 text-gray-600 bg-gray-50 text-sm"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
