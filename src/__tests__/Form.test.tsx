import { render, screen } from "@testing-library/react";
import { describe, it, expect,vi } from "vitest";
import { FormField, FormInput, FormSelect, FormButton } from "../components/Form";

describe("Form Components", () => {
  it("renders FormField with label and child", () => {
    render(
      <FormField label="Username">
        <input data-testid="child-input" />
      </FormField>
    );

    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByTestId("child-input")).toBeInTheDocument();
  });

  it("renders FormInput with correct placeholder", () => {
    render(<FormInput placeholder="Enter name" />);
    const input = screen.getByPlaceholderText("Enter name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("bg-gray-800");
  });

  it("renders FormSelect with options", () => {
    render(
      <FormSelect>
        <option value="india">India</option>
        <option value="usa">USA</option>
      </FormSelect>
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(screen.getByText("India")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
  });

  it("renders FormButton with text and click handler", () => {
    const handleClick = vi.fn();
    render(<FormButton onClick={handleClick}>Submit</FormButton>);

    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();
    button.click();
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("applies fullWidth class when prop is passed", () => {
    render(<FormButton fullWidth>Full Width</FormButton>);
    const button = screen.getByRole("button", { name: /full width/i });
    expect(button).toHaveClass("w-full");
  });

  it("renders FormField with custom className and label", () => {
  render(
    <FormField label="Email" className="custom-field">
      <input type="email" />
    </FormField>
  );

  const label = screen.getByText("Email");
  expect(label).toBeInTheDocument();

  const wrapper = label.closest("div");
  expect(wrapper).toHaveClass("custom-field");
});

});
