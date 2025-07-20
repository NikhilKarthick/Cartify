import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Accordion, type AccordionItem } from "../components/Accordion";

const sampleItems: AccordionItem[] = [
  {
    id: "faq1",
    title: "What is your return policy?",
    content: <p>You can return any item within 30 days.</p>,
  },
  {
    id: "faq2",
    title: "How do I track my order?",
    content: <p>Use the tracking link in your confirmation email.</p>,
  },
];

describe("Accordion", () => {
  it("renders all accordion items", () => {
    render(<Accordion items={sampleItems} mode="none" />);
    expect(screen.getByText("What is your return policy?")).toBeInTheDocument();
    expect(screen.getByText("How do I track my order?")).toBeInTheDocument();
  });

  it("does not open any items by default when defaultOpenId is not provided", () => {
    render(<Accordion items={sampleItems} />);
    expect(screen.queryByText(/return any item/i)).not.toBeInTheDocument();
  });

  it("opens item passed via defaultOpenId", () => {
    render(<Accordion items={sampleItems} defaultOpenId="faq1" />);
    expect(screen.getByText(/return any item/i)).toBeInTheDocument();
  });

  it("toggles item open and closed in single mode", () => {
    render(<Accordion items={sampleItems} mode="single" />);
    const btn1 = screen.getByRole("button", { name: /return policy/i });

    fireEvent.click(btn1);
    expect(screen.getByText(/return any item/i)).toBeInTheDocument();

    fireEvent.click(btn1);
    expect(screen.queryByText(/return any item/i)).not.toBeInTheDocument();
  });

  it("allows multiple items open in multiple mode", () => {
    render(<Accordion items={sampleItems} mode="multiple" />);
    fireEvent.click(screen.getByRole("button", { name: /return policy/i }));
    fireEvent.click(screen.getByRole("button", { name: /track my order/i }));

    expect(screen.getByText(/return any item/i)).toBeInTheDocument();
    expect(screen.getByText(/tracking link/i)).toBeInTheDocument();
  });

  it("respects accentColor and itemClassName", () => {
    render(
      <Accordion
        items={sampleItems}
        accentColor="text-red-500"
        itemClassName="bg-yellow-100"
      />
    );
    const button = screen.getByRole("button", { name: /return policy/i });
    expect(button).toHaveClass("text-red-500");
    expect(button).toHaveClass("bg-yellow-100");
  });

  it("does not allow toggling items when mode is 'none'", () => {
    render(<Accordion items={sampleItems} mode="none" />);
    const btn1 = screen.getByRole("button", { name: /return policy/i });

    fireEvent.click(btn1);
    expect(screen.queryByText(/return any item/i)).not.toBeInTheDocument();
  });
});
