// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import type { NavbarProps } from "../components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    forceMobileMode: {
      control: "boolean",
      description: "Force mobile layout (Storybook only)",
      table: { category: "Storybook Controls" },
    },
    forceOpenMobileMenu: {
      control: "boolean",
      description: "Force mobile menu open (Storybook only)",
      table: { category: "Storybook Controls" },
    },
    vertical: {
      control: "boolean",
      description: "Render navbar vertically",
      table: { category: "Layout" },
    },
  },
};

export default meta;

type Story = StoryObj<NavbarProps>;

const commonArgs: NavbarProps = {
  logo: <span className="text-white font-bold text-xl">Cartify</span>,
  navItems: [
    { label: "Home", href: "/home" },
    { label: "Link", href: "/link" },
    {
      label: "Dropdown",
      href: "#",
      dropdownItems: [
        { label: "Action", href: "/action" },
        { label: "Another action", href: "/another" },
        { label: "Something else", href: "/something" },
      ],
    },
    { label: "Disabled", href: "#", disabled: true },
  ],
  rightContent: (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="px-2 py-1 rounded text-white border border-gray-400 bg-transparent placeholder-gray-400"
      />
      <button className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-white">
        Search
      </button>
      <button className="bg-green-500 px-3 py-1 rounded hover:bg-green-400 text-white">
        Login
      </button>
    </div>
  ),
};

export const Default: Story = {
  args: {
    ...commonArgs,
    forceMobileMode: false,
    forceOpenMobileMenu: false,
    vertical: false,
  },
};

export const MobileMode: Story = {
  args: {
    ...commonArgs,
    forceMobileMode: true,
    forceOpenMobileMenu: true,
    vertical: false,
  },
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const Vertical: Story = {
  args: {
    ...commonArgs,
    vertical: true,
    forceMobileMode: false,
    forceOpenMobileMenu: false,
  },
};
