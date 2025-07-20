import React from "react";
import { EventList } from "../components/EventList";
import { EventCalendar } from "../components/EventCalender";

// Sample event data
const eventData = [
  {
    id: 1,
    title: "Mega Summer Sale",
    description: "Up to 50% off on select electronics",
    date: "2025-07-22",
  },
  {
    id: 2,
    title: "Monsoon Madness",
    description: "Buy 1 Get 1 Free on fashion apparel",
    date: "2025-07-24",
  },
  {
    id: 3,
    title: "Flash Deal Friday",
    description: "Limited-time deals on home appliances",
    date: "2025-07-26",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-white space-y-10">
      <h1 className="text-3xl font-bold text-center text-green-400">Upcoming Store Events</h1>

      <EventList events={eventData} />

      <EventCalendar events={eventData} />
    </div>
  );
};

export default EventsPage;
