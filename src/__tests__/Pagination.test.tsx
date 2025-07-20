import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from "../components/Pagination";

describe("Pagination", () => {
  it("renders all page numbers", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockChange} />);

    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(String(i))).toBeInTheDocument();
    }
  });

  it("calls onPageChange with correct number when page number is clicked", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockChange} />);

    fireEvent.click(screen.getByText("4"));
    expect(mockChange).toHaveBeenCalledWith(4);
  });

  it("disables Prev button on first page", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={mockChange} />);

    const prevButton = screen.getByText("Prev");
    expect(prevButton).toBeDisabled();
  });

  it("disables Next button on last page", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={5} totalPages={5} onPageChange={mockChange} />);

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange with previous page when Prev is clicked", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockChange} />);

    fireEvent.click(screen.getByText("Prev"));
    expect(mockChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with next page when Next is clicked", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={mockChange} />);

    fireEvent.click(screen.getByText("Next"));
    expect(mockChange).toHaveBeenCalledWith(3);
  });

  it("highlights the current page", () => {
    const mockChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockChange} />);

    const currentPageButton = screen.getByText("3");
    expect(currentPageButton).toHaveClass("bg-blue-500");
    expect(currentPageButton).toHaveClass("text-white");
  });
});
