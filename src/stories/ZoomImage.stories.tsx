
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { ZoomImage } from "../components/ZoomImage";

const meta: Meta<typeof ZoomImage> = {
  title: "Components/ZoomImage",
  component: ZoomImage,
  tags: ["autodocs"],
  args: {
    src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750517/Croma%20Assets/Communication/Mobiles/Images/300779_0_polix6.png",
    alt: "iPhone 15",
    className: "w-80 rounded-lg",
    isZoomEnabled: false,
  },
  argTypes: {
    isZoomEnabled: {
      control: "boolean",
      description: "Force zoom when true",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ZoomImage>;

export const Default: Story = {};
