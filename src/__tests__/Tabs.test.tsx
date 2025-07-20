import { describe, it, expect} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs, type TabItem } from "../components/Tabs";

const sampleTabs: TabItem[] = [
  { label: "Tab 1", content: <div>Content 1</div> },
  { label: "Tab 2", content: <div>Content 2</div> },
  { label: "Tab 3", content: <div>Content 3</div> },
];

describe("Tabs", () => {
  it("renders all tab labels", () => {
    render(<Tabs tabs={sampleTabs} />);
    sampleTabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });
  });

  it("shows content of default tab", () => {
    render(<Tabs tabs={sampleTabs} defaultIndex={1} />);
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("changes content when a different tab is clicked", () => {
    render(<Tabs tabs={sampleTabs} />);
    fireEvent.click(screen.getByText("Tab 3"));
    expect(screen.getByText("Content 3")).toBeInTheDocument();
  });

  it("applies active styling to selected tab", () => {
    render(<Tabs tabs={sampleTabs} />);
    const tabButton = screen.getByText("Tab 1");
    expect(tabButton).toHaveClass("text-white");
    expect(tabButton).toHaveClass("border-green-500");
  });

  it("updates activeIndex if defaultIndex changes", () => {
    const { rerender } = render(<Tabs tabs={sampleTabs} defaultIndex={0} />);
    expect(screen.getByText("Content 1")).toBeInTheDocument();

    rerender(<Tabs tabs={sampleTabs} defaultIndex={2} />);
    expect(screen.getByText("Content 3")).toBeInTheDocument();
  });

  it("applies gradient background if colors are provided", () => {
    render(
      <Tabs
        tabs={sampleTabs}
        fromColor="#ff0000"
        viaColor="#00ff00"
        toColor="#0000ff"
      />
    );

    const container = screen.getByText("Tab 1").parentElement?.parentElement;
    expect(container?.getAttribute("style")).toContain(
      "linear-gradient(to right, #ff0000, #00ff00, #0000ff)"
    );
  });
});
