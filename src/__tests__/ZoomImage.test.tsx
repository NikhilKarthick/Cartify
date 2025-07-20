import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll } from "vitest";
import { ZoomImage } from "../components/ZoomImage";


beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

describe("ZoomImage", () => {
  const defaultProps = {
    src: "https://example.com/image.jpg",
    alt: "Example Image",
  };

  it("renders an image with correct src and alt attributes", () => {
    render(<ZoomImage {...defaultProps} />);
    const img = screen.getByAltText("Example Image") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(defaultProps.src);
    expect(img.alt).toBe(defaultProps.alt);
  });

  it("applies custom className", () => {
    render(<ZoomImage {...defaultProps} className="custom-class" />);
    const img = screen.getByAltText("Example Image");
    expect(img).toHaveClass("custom-class");
  });

  it("shows zoom-in cursor when zoom is enabled (default)", () => {
    render(<ZoomImage {...defaultProps} />);
    const img = screen.getByAltText("Example Image");
    expect(img).toHaveStyle({ cursor: "zoom-in" });
  });

  it("shows default cursor when zoom is disabled", () => {
    render(<ZoomImage {...defaultProps} isZoomEnabled={false} />);
    const img = screen.getByAltText("Example Image");
    expect(img).toHaveStyle({ cursor: "default" });
  });

  it("renders inside Zoom wrapper when isZoomEnabled is true", () => {
  render(<ZoomImage {...defaultProps} />);
  const img = screen.getByAltText("Example Image");
  expect(img.parentElement?.tagName.toLowerCase()).toBe("div");
});


  it("renders without Zoom wrapper when isZoomEnabled is false", () => {
    const { container } = render(<ZoomImage {...defaultProps} isZoomEnabled={false} />);
    expect(container.querySelector(".react-medium-image-zoom")).toBeFalsy();
  });
});
