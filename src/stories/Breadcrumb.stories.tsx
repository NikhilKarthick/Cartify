// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../components/Breadcrumb";
import { BrowserRouter } from "react-router-dom";
import type { BreadcrumbProps } from "../components/Breadcrumb";

const allItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Mobiles", href: "/shop/mobiles" },
  { label: "Samsung", href: "/shop/mobiles/samsung" },
  { label: "Galaxy S24" },
];

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="p-6 bg-gray-100 min-h-screen">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    separator: {
      control: "text",
      description: "Character used to separate breadcrumb items",
    },
    level: {
      control: { type: "range", min: 1, max: allItems.length },
      description: "Number of breadcrumb levels (Storybook only)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const DynamicLevel: Story = {
  args: {
    separator: "/",
    level: 3,
  },
  render: (args: BreadcrumbProps & { level?: number }) => {
    const { separator, level } = args;
    return (
      <Breadcrumb
        separator={separator}
        level={level}
        items={allItems.slice(0, level ?? allItems.length)}
      />
    );
  },
};
