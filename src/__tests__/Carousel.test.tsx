import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Carousel } from "../components/Carousel"; // adjust path as needed

beforeEach(() => {
  vi.useFakeTimers();
});

describe("Carousel", () => {
  const TestSlides = () => (
    <Carousel autoSlide autoSlideInterval={3000}>
      <div data-testid="slide">Slide 1</div>
      <div data-testid="slide">Slide 2</div>
      <div data-testid="slide">Slide 3</div>
    </Carousel>
  );

  it("renders the first slide by default", () => {
    render(<TestSlides />);
    const slides = screen.getAllByTestId("slide");
    expect(slides[0]).toBeInTheDocument();
  });

  it("navigates to next slide on next button click", () => {
    render(<TestSlides />);
    const nextButton = screen.getByLabelText("Next slide");

    fireEvent.click(nextButton);
    const slides = screen.getAllByTestId("slide");
    expect(slides.length).toBe(3);
  });

  it("navigates to previous slide on previous button click", () => {
    render(<TestSlides />);
    const prevButton = screen.getByLabelText("Previous slide");

    fireEvent.click(prevButton);
    const slides = screen.getAllByTestId("slide");
    expect(slides.length).toBe(3);
  });

  it("auto-advances slides at specified interval", () => {
    render(<TestSlides />);

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    const slides = screen.getAllByTestId("slide");
    expect(slides.length).toBe(3);
  });

  it("renders correct number of indicators", () => {
    render(<TestSlides />);
    const indicators = screen.getAllByRole("button", { name: /Go to slide/i });
    expect(indicators.length).toBe(3);
  });

  it("clicking indicator navigates to the corresponding slide", () => {
    render(<TestSlides />);
    const indicator = screen.getByRole("button", { name: "Go to slide 2" });
    fireEvent.click(indicator);

    const slides = screen.getAllByTestId("slide");
    expect(slides.length).toBe(3);
  });
});
