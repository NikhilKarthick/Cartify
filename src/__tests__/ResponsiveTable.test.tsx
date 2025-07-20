import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResponsiveTable, type TableColumn } from "../components/ResponsiveTable";

// Sample generic data using Record<string, unknown>
const sampleData: Record<string, unknown>[] = [
  { name: "Alice", age: 28, email: "alice@example.com" },
  { name: "Bob", age: 34, email: "bob@example.com" },
];

const columns: TableColumn<Record<string, unknown>>[] = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Email", accessor: "email" },
];

describe("ResponsiveTable", () => {
  it("renders table headers correctly", () => {
    render(<ResponsiveTable data={sampleData} columns={columns} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders all data rows", () => {
    render(<ResponsiveTable data={sampleData} columns={columns} />);
    sampleData.forEach((row) => {
      expect(screen.getByText(String(row.name))).toBeInTheDocument();
      expect(screen.getByText(String(row.age))).toBeInTheDocument();
      expect(screen.getByText(String(row.email))).toBeInTheDocument();
    });
  });

  it("renders custom cell content when cell prop is provided", () => {
    const customColumns: TableColumn<Record<string, unknown>>[] = [
      { header: "Name", accessor: "name" },
      {
        header: "Age Group",
        accessor: "age",
        cell: (row) => (Number(row.age) > 30 ? "Senior" : "Junior"),
      },
    ];

    render(<ResponsiveTable data={sampleData} columns={customColumns} />);
    expect(screen.getByText("Senior")).toBeInTheDocument();
    expect(screen.getByText("Junior")).toBeInTheDocument();
  });

  it("applies max-w-md when adjustTable is false", () => {
    const { container } = render(
      <ResponsiveTable data={sampleData} columns={columns} adjustTable={false} />
    );
    const wrapperDiv = container.querySelector("div");
    expect(wrapperDiv?.className).toContain("max-w-md");
  });

  it("defaults to max-w-full when adjustTable is true or undefined", () => {
    const { container } = render(
      <ResponsiveTable data={sampleData} columns={columns} />
    );
    const wrapperDiv = container.querySelector("div");
    expect(wrapperDiv?.className).toContain("max-w-full");
  });
});
