
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { EventCalendar } from "../components/EventCalender";
import type { Event } from "../components/EventList";

const meta: Meta<typeof EventCalendar> = {
  title: "Components/EventCalendar",
  component: EventCalendar,
  tags: ["autodocs"],
  argTypes: {
    bgColorClass: {
      control: "select",
      options: ["bg-gray-800",  "bg-blue-600", "bg-purple-600", "bg-orange-600","bg-yellow-600"],
      description: "Background color for active month day cells",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EventCalendar>;

const sampleEvents: Event[] = [
  {
    id: 1,
    title: "Mega Summer Sale",
    description: "Up to 50% off on select electronics",
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Monsoon Madness",
    description: "Buy 1 Get 1 Free on fashion apparel",
    date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(),
  },
  {
    id: 3,
    title: "Flash Deal Friday",
    description: "Limited-time deals on home appliance",
    date: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
  },
];

export const Default: Story = {
  args: {
    events: sampleEvents,
    bgColorClass: "bg-gray-800", // Default for Storybook
  },
};
