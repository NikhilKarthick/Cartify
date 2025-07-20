import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

const socialMediaLinks = [
  { name: "facebook", href: "https://facebook.com" },
  { name: "twitter", href: "https://twitter.com" },
  { name: "instagram", href: "https://instagram.com" },
  { name: "linkedin", href: "https://linkedin.com" },
];

describe("SocialMediaLinks", () => {
  it("renders all social media links", () => {
    render(<SocialMediaLinks />);
    socialMediaLinks.forEach(({ name, href }) => {
      const link = screen.getByRole("link", { name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("applies horizontal orientation by default", () => {
    const { container } = render(<SocialMediaLinks />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("flex");
    expect(wrapper.className).toContain("space-x-4");
  });

  it("applies vertical orientation when specified", () => {
    const { container } = render(<SocialMediaLinks orientation="vertical" />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain("flex-col");
    expect(wrapper.className).toContain("space-y-4");
  });

  it("opens links in a new tab with noreferrer and noopener", () => {
    render(<SocialMediaLinks />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

  
  });

  it("renders the correct icons for each social media platform", () => {
  render(<SocialMediaLinks />);

  const facebookLink = screen.getByRole("link", { name: "facebook" });
  const twitterLink = screen.getByRole("link", { name: "twitter" });
  const instagramLink = screen.getByRole("link", { name: "instagram" });
  const linkedinLink = screen.getByRole("link", { name: "linkedin" });

  expect(facebookLink.querySelector("svg")).toBeInTheDocument();
  expect(twitterLink.querySelector("svg")).toBeInTheDocument();
  expect(instagramLink.querySelector("svg")).toBeInTheDocument();
  expect(linkedinLink.querySelector("svg")).toBeInTheDocument();
});

});
