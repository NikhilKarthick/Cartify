import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EventCalendar } from "../components/EventCalender";
import type { Event } from "../components/EventList";
import { format } from "date-fns";

// Utility to get today’s date as "YYYY-MM-DD"
const todayStr = format(new Date(), "yyyy-MM-dd");

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Demo Day",
    description: "Final product presentation.",
    date: todayStr,
  },
  {
    id: 2,
    title: "Team Sync",
    description: "Weekly team meeting.",
    date: "2025-07-31",
  },
];

describe("EventCalendar", () => {
  it("renders the calendar heading", () => {
    render(<EventCalendar events={mockEvents} />);
    expect(screen.getByText("Event Calendar")).toBeInTheDocument();
  });

  it("renders all 7 weekday labels", () => {
    render(<EventCalendar events={mockEvents} />);
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach((day) => {
      expect(screen.getByText(day)).toBeInTheDocument();
    });
  });

  it("renders the correct number of day cells (between 28 and 42)", () => {
    const { container } = render(<EventCalendar events={mockEvents} />);
    const dayCells = container.querySelectorAll(".grid.grid-cols-7.gap-2 > div");
    expect(dayCells.length).toBeGreaterThanOrEqual(28);
    expect(dayCells.length).toBeLessThanOrEqual(42);
  });

  it("displays events on their corresponding dates", () => {
    render(<EventCalendar events={mockEvents} />);
    expect(screen.getByText("Demo Day")).toBeInTheDocument();
    expect(screen.getByText("Team Sync")).toBeInTheDocument();
  });

  it("highlights today's date", () => {
    const { container } = render(<EventCalendar events={mockEvents} />);
    const todayCell = container.querySelector(".border-3.border-green-600");
    expect(todayCell).toBeTruthy();
    expect(todayCell?.textContent).toContain(new Date().getDate().toString());
  });

  it("applies custom background class if provided", () => {
    const { container } = render(
      <EventCalendar events={mockEvents} bgColorClass="bg-blue-700" />
    );
    const coloredCell = Array.from(container.querySelectorAll(".p-2"))
      .find((el) => el.classList.contains("bg-blue-700"));
    expect(coloredCell).toBeTruthy();
  });
});
