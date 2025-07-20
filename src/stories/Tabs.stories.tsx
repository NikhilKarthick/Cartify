
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../components/Tabs";
import type { TabItem } from "../components/Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    fromColor: {
      control: "color",
      description: "Left gradient color (optional)",
      table: { category: "Style" },
    },
    viaColor: {
      control: "color",
      description: "Middle gradient color (optional)",
      table: { category: "Style" },
    },
    toColor: {
      control: "color",
      description: "Right gradient color (optional)",
      table: { category: "Style" },
    },
    defaultIndex: {
      control: { type: "number", min: 0 },
      description: "Index of the tab to be active initially",
      table: { category: "Behavior" },
    },
  },
  args: {
    defaultIndex: 0,
    fromColor: "",
    viaColor: "",
    toColor: "",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

//  Sample tabs
const shoppingTabs: TabItem[] = [
  {
    label: "Cart",
    content: <p className="text-white">You have 3 items in your cart.</p>,
  },
  {
    label: "Wishlist",
    content: <p className="text-white">You have 2 items in your wishlist.</p>,
  },
  {
    label: "Out of Stock",
    content: <p className="text-white">We’ll notify you when items are back in stock.</p>,
  },
];

//  Default story with no gradient
export const Default: Story = {
  args: {
    tabs: shoppingTabs,
  },
  render: (args) => (
    <div className="bg-gray-900 p-6 rounded max-w-xl mx-auto">
      <Tabs {...args} />
    </div>
  ),
};

//  Custom gradient story using the provided gradient props
export const WithGradientBackground: Story = {
  args: {
    tabs: shoppingTabs,
    fromColor: "#6b21a8", // purple-800
    viaColor: "#3730a3",  // indigo-800
    toColor: "#1e3a8a",   // blue-800
  },
  render: (args) => (
    <div className="p-6 rounded max-w-xl mx-auto">
      <Tabs {...args} />
    </div>
  ),
};

//  Starts on Wishlist tab (index 1)
export const StartOnWishlist: Story = {
  args: {
    tabs: shoppingTabs,
    defaultIndex: 1,
  },
  render: (args) => (
    <div className="bg-gray-900 p-6 rounded max-w-xl mx-auto">
      <Tabs {...args} />
    </div>
  ),
};

//  Tabs with empty content
export const WithEmptyStates: Story = {
  args: {
    tabs: [
      {
        label: "Cart",
        content: <p className="text-white">Items added to your cart appear here.</p>,
      },
      {
        label: "Wishlist",
        content: <p className="text-gray-500">Your wishlist is currently empty.</p>,
      },
      {
        label: "Out of Stock",
        content: <p className="text-gray-500">No notifications available.</p>,
      },
    ],
  },
  render: (args) => (
    <div className="bg-gray-900 p-6 rounded max-w-xl mx-auto">
      <Tabs {...args} />
    </div>
  ),
};
