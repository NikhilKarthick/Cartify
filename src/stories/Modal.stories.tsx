
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal } from "../components/Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Controls visibility of the modal",
    },
    title: { control: "text" },
    message: { control: "text" },
    confirmText: { control: "text" },
    cancelText: { control: "text" },
  },
  args: {
    isOpen: true,
    title: "Login",
    message: "Are you sure you want to login?",
    confirmText: "Yes, Login",
    cancelText: "Cancel",
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;



export const Playground: Story = {
  args: {
    isOpen: true,
  },
  render: (args) => (
    <div className="h-64 relative">
      <Modal
        {...args}
        onClose={() => alert("Modal closed")}
        onConfirm={() => alert("Confirmed")}
      />
    </div>
  ),
};


const ModalInteractiveStory: React.FC<React.ComponentProps<typeof Modal>> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 h-64 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Open Modal
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          alert("Successful, return to home page!");
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const Interactive: Story = {
  render: (args) => <ModalInteractiveStory {...args} />,
};
