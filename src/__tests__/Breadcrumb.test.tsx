import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Breadcrumb, type BreadcrumbProps } from "../components/Breadcrumb";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

const items: BreadcrumbProps["items"] = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "Product", href: "/product" },
];

describe("Breadcrumb", () => {
   it("renders all breadcrumb items", () => {
    renderWithRouter(<Breadcrumb items={items} />);

    // Check all links (Home and Category)
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    // Verify text content of breadcrumb items (Category and Product)
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();

    // Optionally check if Home link uses an icon
    expect(links[0]).toHaveAttribute("href", "/");
   });


  it("renders Home icon correctly", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
    ];

    renderWithRouter(<Breadcrumb items={items} />);

    // Get all links
    const links = screen.getAllByRole("link");

    // First link is Home icon
    expect(links[0]).toBeInTheDocument();
    expect(links[0].querySelector("svg")).toBeInTheDocument(); 

    // Optional: ensure it's pointing to "/"
    expect(links[0]).toHaveAttribute("href", "/");
  });

  it("renders separator between items", () => {
    renderWithRouter(<Breadcrumb items={items} separator=">" />);
    const separators = screen.getAllByText(">");
    expect(separators.length).toBe(items.length - 1); 
  });

  it("renders only up to the specified level", () => {
    renderWithRouter(<Breadcrumb items={items} level={2} />);
    expect(screen.queryByText("Product")).not.toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
  });

  it("renders last breadcrumb as plain text", () => {
    const items = [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
      { label: "Product" }, 
    ];

    renderWithRouter(<Breadcrumb items={items} />);

    const product = screen.getByText("Product");
    expect(product.tagName.toLowerCase()).toBe("span"); 
  });
});
