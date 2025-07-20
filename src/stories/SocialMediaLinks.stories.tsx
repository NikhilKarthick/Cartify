// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { SocialMediaLinks } from "../components/SocialMediaLinks";
import type { SocialMediaLinksProps } from "../components/SocialMediaLinks";

const meta: Meta<typeof SocialMediaLinks> = {
  title: "Components/SocialMediaLinks",
  component: SocialMediaLinks,
  tags: ["autodocs"], 
};

export default meta;

type Story = StoryObj<SocialMediaLinksProps>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};
