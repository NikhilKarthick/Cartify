import React, { useState } from "react";
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import {
  FormField,
  FormInput,
  FormSelect,
  FormButton,
} from "../components/Form";



const meta: Meta<typeof FormField> = {
  title: "Components/Form",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: {
        type: "radio",
        options: ["Name", "Email", "Role"],
      },
      description: "Label for the form field",
      defaultValue: "Name",
    },
    className: {
      control: {
        type: "radio",
        options: ["", "mb-4", "text-red-500", "bg-gray-100 p-2"],
      },
      description: "Optional custom class for styling",
    },
  },
};


export default meta;

// ----------- Default Full Form Story -----------

export const Default: StoryObj = {
  name: "Full Form Example",
  render: () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      role: "user",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert(JSON.stringify(formData, null, 2));
    };

    return (
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 space-y-5 rounded-lg bg-white text-black shadow"
      >
        <FormField label="Name">
          <FormInput
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Email">
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Role">
          <FormSelect
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
          </FormSelect>
        </FormField>

        <FormButton type="submit" fullWidth>
          Submit
        </FormButton>
      </form>
    );
  },
};

// ----------- Playground: FormInput -----------

export const InputPlayground: StoryObj<typeof FormInput> = {
  name: "Input Field Playground",
  args: {
    name: "demo",
    placeholder: "Try typing...",
    type: "text",
    value: "",
  },
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["text", "email", "password", "number"],
      },
      description: "Input type",
    },
    onChange: { action: "changed", description: "onChange handler" },
  },
  render: (args) => (
    <FormField label="Input Label">
      <FormInput {...args} />
    </FormField>
  ),
};

// ----------- Playground: FormButton -----------

export const ButtonPlayground: StoryObj<typeof FormButton> = {
  name: "ButtonPlayground",
  args: {
    type: "submit",
    children: "Submit Now",
    fullWidth: true,
  },
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["submit", "button", "reset"],
      },
      description: "Button type",
    },
    fullWidth: {
      control: "boolean",
      description: "Should the button take full width?",
    },
  },
  render: (args) => <FormButton {...args} />,
};
