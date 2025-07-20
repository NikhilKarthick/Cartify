// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "../components/Gallery";

const meta: Meta<typeof Gallery> = {
  title: "Components/Gallery",
  component: Gallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      description: "Array of images with `id`, `src`, and `alt`",
      control: { type: "object" },
    },
    className: {
      control: "text",
      description: "Custom class names for styling",
    },
    enableZoom: {
      control: "boolean",
      description: "Toggle zoom behavior on images",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Gallery>;

const sampleImages = [
  {
    id: "main",
    src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750517/Croma%20Assets/Communication/Mobiles/Images/300779_0_polix6.png",
    alt: "Main Image",
  },
  {
    id: "side",
    src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749526/Croma%20Assets/Communication/Mobiles/Images/300716_1_annw4d.png?tr=w-1000",
    alt: "Side View ",
  },
  {
    id: "side2",
    src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749531/Croma%20Assets/Communication/Mobiles/Images/300716_4_niattl.png?tr=w-1000",
    alt: "Side View 2",
  },
];

export const DefaultGallery: Story = {
  args: {
    images: sampleImages,
    enableZoom: true,
    className: "max-w-sm",
  },
};

export const SingleImage: Story = {
  args: {
    images: [
      {
        id: "only",
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750517/Croma%20Assets/Communication/Mobiles/Images/300779_0_polix6.png",
        alt: "Only Image",
      },
    ],
    enableZoom: false,
    className: "max-w-xs",
  },
};

export const FiveImages: Story = {
  args: {
    images: [
      {
        id: "img1",
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750517/Croma%20Assets/Communication/Mobiles/Images/300779_0_polix6.png",
        alt: "Front View",
      },
      {
        id: "img2",
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749526/Croma%20Assets/Communication/Mobiles/Images/300716_1_annw4d.png?tr=w-1000",
        alt: "Back View",
      },
      {
        id: "img3",
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749531/Croma%20Assets/Communication/Mobiles/Images/300716_4_niattl.png?tr=w-1000",
        alt: "Left View",
      },
      {
        id: "img4",
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749529/Croma%20Assets/Communication/Mobiles/Images/300716_3_omh1tp.png?tr=w-1000",
        alt: "Right View",
      },
      {
        id: "img5",
        src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749540/Croma%20Assets/Communication/Mobiles/Images/300716_8_hbqykp.png?tr=w-1000",
        alt: "In Use",
      },
    ],
    enableZoom: false,
    className: "max-w-xs",
  },
};

export const ZoomOnTapMobileEmulation: Story = {
  parameters: {
    viewport: {
      defaultViewport: "iphonexr",
    },
  },
  args: {
    images: sampleImages,
    enableZoom: true,
    className: "max-w-sm",
  },
};
