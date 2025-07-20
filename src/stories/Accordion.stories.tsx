

// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    defaultOpenId: {
      control: "object",
      description: "IDs of the accordion items to open by default (string or array)",
      defaultValue: ["details"],
    },
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "none"],
      description: "Accordion behavior mode",
      defaultValue: "multiple",
    },
    accentColor: {
      control: { type: "select" },
      description: "Text color class applied to the accordion title",
      options: [
        "text-white",
        "text-blue-600",
        "text-gray-800",
        "text-red-500",
        "text-green-600",
        "text-yellow-500",
      ],
      defaultValue: "text-white",
    },
    itemClassName: {
      control: { type: "select" },
      description: "Background + hover class for each accordion item button",
      options: [
        "bg-gray-800 hover:bg-gray-700",
        "bg-white hover:bg-gray-100",
        "bg-blue-600 hover:bg-blue-100",
        "bg-red-600 hover:bg-red-100",
        "bg-green-600 hover:bg-green-100",
        "bg-yellow-600 hover:bg-yellow-100",
        "bg-orange-600 hover:bg-orange-100",
      ],
      defaultValue: "bg-gray-800 hover:bg-gray-700",
    },
   
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    defaultOpenId: ["details"],
    mode: "multiple",
    accentColor: "text-white",
    itemClassName: "bg-gray-800 hover:bg-gray-700",
    containerClassName: "bg-white",
    items: [
      {
        id: "details",
        title: "Key Features",
        content: (
          <ul className="list-disc pl-5 space-y-1">
            <li>6.1‑inch Super Retina XDR display</li>
            <li>A16 Bionic chip for powerful performance</li>
            <li>48MP main camera with 2x telephoto</li>
            <li>Dynamic Island and USB-C connectivity</li>
            <li>All-day battery life with fast charging</li>
          </ul>
        ),
      },
      {
        id: "specs",
        title: "Technical Specifications",
        content: (
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-2 px-3 font-semibold text-gray-800">Specification</th>
                <th className="py-2 px-3 font-semibold text-gray-800">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-3 font-medium text-gray-700">Display</td>
                <td className="py-2 px-3">6.1" OLED Super Retina XDR</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-gray-700">Processor</td>
                <td className="py-2 px-3">A16 Bionic chip</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-gray-700">Storage</td>
                <td className="py-2 px-3">128GB</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-gray-700">Camera</td>
                <td className="py-2 px-3">48MP + 12MP (rear), 12MP (front)</td>
              </tr>
              <tr>
                <td className="py-2 px-3 font-medium text-gray-700">Battery</td>
                <td className="py-2 px-3">Up to 20 hours video playback</td>
              </tr>
            </tbody>
          </table>
        ),
      },
      {
        id: "warranty",
        title: "Warranty & Returns",
        content:
          "This product comes with a 1-year limited warranty from Apple and is eligible for return within 7 days of delivery in original packaging.",
      },
    ],
  },
};
