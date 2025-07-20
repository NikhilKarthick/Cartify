import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EventList } from "../components/EventList";

const mockEvents = [
  {
    id: 1,
    title: "Mega Summer Sale",
    description: "Up to 50% off on select electronics",
    date: "2025-07-08",
  },
  {
    id: 2,
    title: "Monsoon Madness",
    description: "Buy 1 Get 1 Free on fashion apparel",
    date: "2025-07-10",
  },
  {
    id: 3,
    title: "Flash Deal Friday",
    description: "Limited-time deals on home appliances",
    date: "2025-07-12",
  },
];

describe("EventList", () => {
  it("renders the heading", () => {
    render(<EventList events={mockEvents} />);
    expect(screen.getByText("Event Highlights")).toBeInTheDocument();
  });

  it("renders the correct number of events", () => {
    render(<EventList events={mockEvents} />);
    const eventTitles = screen.getAllByRole("heading", { level: 3 });
    expect(eventTitles).toHaveLength(mockEvents.length);
  });

  it("renders event titles and descriptions", () => {
    render(<EventList events={mockEvents} />);
    mockEvents.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getByText(event.description)).toBeInTheDocument();
    });
  });

  it("applies default bg color class if none is provided", () => {
    const { container } = render(<EventList events={mockEvents} />);
    const firstItem = container.querySelector("li");
    expect(firstItem?.className).toContain("bg-gray-800");
  });

  it("applies custom bg color class if provided", () => {
    const { container } = render(<EventList events={mockEvents} bgColorClass="bg-blue-600" />);
    const firstItem = container.querySelector("li");
    expect(firstItem?.className).toContain("bg-blue-600");
  });

  it("renders nothing when event list is empty", () => {
    render(<EventList events={[]} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
