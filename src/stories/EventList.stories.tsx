
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { EventList, type Event } from "../components/EventList";

const meta: Meta<typeof EventList> = {
  title: "Components/EventList",
  component: EventList,
  tags: ["autodocs"],
  argTypes: {
    bgColorClass: {
      control: "select",
      options: ["bg-gray-800", "bg-gray-900", "bg-blue-600", "bg-green-600", "bg-orange-600" ,"bg-yellow-600"],
      description: "Background color for each event card",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EventList>;

const sampleEvents: Event[] = [
  {
    id: 1,
    title: "Mega Summer Sale",
    description: "Up to 50% off on select electronics",
    date: "2025-07-08",
  },
  {
    id: 2,
    title: "Monsoon Madness",
    description: "Buy 1 Get 1 Free on fashion apparel",
    date: "2025-07-10",
  },
  {
    id: 3,
    title: "Flash Deal Friday",
    description: "Limited-time deals on home appliance",
    date: "2025-07-12",
  },
];

export const Default: Story = {
  args: {
    events: sampleEvents,
    bgColorClass: "bg-gray-800", // default
  },
};
