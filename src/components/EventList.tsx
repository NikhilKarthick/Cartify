import React from "react";

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface EventListProps {
  events: Event[];
  /** Optional Tailwind class to override background color for storybook usage */
  bgColorClass?: string;
}

export const EventList: React.FC<EventListProps> = ({ events, bgColorClass }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Event Highlights</h2>
      <ul className="space-y-3">
        {events.map((event) => (
          <li
            key={event.id}
            className={`p-4 rounded-lg shadow-md ${
              bgColorClass ?? "bg-gray-800"
            }`}
          >
            <h3 className="text-lg font-bold text-white">{event.title}</h3>
            <p className="text-sm text-gray-300">{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
