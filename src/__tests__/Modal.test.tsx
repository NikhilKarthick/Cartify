import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "../components/Modal";

describe("Modal Component", () => {
  const defaultProps = {
    isOpen: true,
    title: "Test Title",
    message: "Test message",
    onClose: vi.fn(),
    onConfirm: vi.fn(),
    confirmText: "Yes",
    cancelText: "No",
  };

  it("does not render when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
  });

  it("renders correctly when isOpen is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test message")).toBeInTheDocument();
    expect(screen.getByText("Yes")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });

  it("calls onClose when Cancel button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("No"));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
  

  it("calls onConfirm and onClose when Confirm button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("Yes"));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("does not render anything when isOpen is false", () => {
  const { container } = render(
    <Modal
      isOpen={false}
      onClose={() => {}}
      title="Should not be visible"
      message="This should not be rendered"
    />
  );

  expect(container.firstChild).toBeNull();
  });

  it("renders default title and buttons if not provided", () => {
    const fallbackProps = {
      isOpen: true,
      onClose: vi.fn(),
    };

    render(<Modal {...fallbackProps} />);
    expect(screen.getByText("Confirmation")).toBeInTheDocument();
    expect(screen.getByText("OK")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
  
});
