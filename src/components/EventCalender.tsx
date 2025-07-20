import React from "react";
import type { Event } from "./EventList";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  isSameMonth,
} from "date-fns";

interface EventCalendarProps {
  events: Event[];
  /** Optional Tailwind class to override day cell background (for Storybook only) */
  bgColorClass?: string;
}

export const EventCalendar: React.FC<EventCalendarProps> = ({ events, bgColorClass }) => {
  const today = new Date();
  const start = startOfWeek(startOfMonth(today));
  const end = endOfWeek(endOfMonth(today));

  const dayMatrix = [];
  let current = start;

  while (current <= end) {
    const week: Date[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(current);
      current = addDays(current, 1);
    }
    dayMatrix.push(week);
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Event Calendar</h2>
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-400 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {dayMatrix.flat().map((day, index) => {
          const dayEvents = events.filter((e) => isSameDay(new Date(e.date), day));
          const isToday = isSameDay(day, new Date());
          const inMonth = isSameMonth(day, new Date());

          return (
            <div
              key={index}
              className={`p-2 rounded-lg text-xs ${
                inMonth ? `${bgColorClass ?? "bg-gray-800"} text-white` : "bg-white text-gray-600"
              } ${isToday ? "border-3 border-green-600" : ""}`}
            >
              <div className="font-bold">{format(day, "d")}</div>
              {dayEvents.map((event) => (
                <div key={event.id} className="mt-1 text-white truncate">
                  {event.title}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
