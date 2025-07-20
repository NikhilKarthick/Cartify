import { describe, it, expect, beforeAll } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Gallery } from "../components/Gallery";


beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

const mockImages = [
  { id: "1", src: "img1.jpg", alt: "Main Image 1" },
  { id: "2", src: "img2.jpg", alt: "Main Image 2" },
  { id: "3", src: "img3.jpg", alt: "Main Image 3" },
];

describe("Gallery", () => {
  it("renders the main image by default", () => {
    render(<Gallery images={mockImages} />);
    const mainImage = screen.getByTestId("main-image");
    expect(mainImage).toBeInTheDocument();
    expect(mainImage).toHaveAttribute("src", "img1.jpg");
  });

  it("renders all thumbnails", () => {
    render(<Gallery images={mockImages} />);
    const thumbnails = screen.getAllByRole("button");
    expect(thumbnails.length).toBe(3);
  });

  it("updates the main image when a thumbnail is clicked", () => {
    render(<Gallery images={mockImages} />);
    const thumbnails = screen.getAllByRole("button");

    fireEvent.click(thumbnails[1]); // click second thumbnail
    const mainImage = screen.getByTestId("main-image");
    expect(mainImage).toHaveAttribute("src", "img2.jpg");
  });

  it("renders without zoom when enableZoom is false", () => {
    render(<Gallery images={mockImages} enableZoom={false} />);
    const mainImage = screen.getByTestId("main-image");
    expect(mainImage.tagName).toBe("IMG");
  });

  it("renders with ZoomImage when enableZoom is true", () => {
    render(<Gallery images={mockImages} enableZoom={true} />);
    const mainImage = screen.getByTestId("main-image");
    expect(mainImage).toBeInTheDocument();
  });
});
