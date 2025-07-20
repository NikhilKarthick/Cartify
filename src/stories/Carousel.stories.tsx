

// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "../components/Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: {
    autoSlide: {
      control: "boolean",
      defaultValue: false,
    },
    autoSlideInterval: {
      control: { type: "number", min: 1000, step: 500 },
      defaultValue: 3000,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const images = [
  {
    src: "https://ivenus.in/wp-content/uploads/2024/07/0-1024x1024.jpeg",
    alt: "Discount 1",
  },
  {
    src: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/10/samsung-1.jpg?ssl=1&quality=80&w=f",
    alt: "Discount 2",
  },
  {
    src: "https://www.hindustantimes.com/ht-img/img/2025/06/10/1600x900/now_and_N_1749557608475_1749557613270.png",
    alt: "Discount 3",
  },
];

// Use image.src as a unique key (it's guaranteed to be unique in this case)
const imageSlides = images.map((img) => (
  <img
    key={img.src}
    src={img.src}
    alt={img.alt}
    className="w-full h-148 object-cover rounded"
  />
));

export const Default: Story = {
  args: {
    autoSlide: false,
    children: imageSlides,
  },
};

export const AutoSliding: Story = {
  args: {
    autoSlide: true,
    autoSlideInterval: 3000,
    children: imageSlides,
  },
};
