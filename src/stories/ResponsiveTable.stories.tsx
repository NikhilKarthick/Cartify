// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import {
  ResponsiveTable,
  type ResponsiveTableProps,
  type TableColumn,
} from "../components/ResponsiveTable";

// Add index signature to satisfy Record<string, unknown>
interface SampleData {
  name: string;
  age: number;
  email: string;
  [key: string]: unknown;
}

const sampleData: SampleData[] = [
  { name: "Alice", age: 28, email: "alice@example.com" },
  { name: "Bob", age: 34, email: "bob@example.com" },
  { name: "Charlie", age: 22, email: "charlie@example.com" },
  { name: "David", age: 30, email: "david@example.com" },
  { name: "Eva", age: 25, email: "eva@example.com" },
  { name: "Frank", age: 29, email: "frank@example.com" },
  { name: "Grace", age: 31, email: "grace@example.com" },
  { name: "Henry", age: 27, email: "henry@example.com" },
];

const sampleColumns: TableColumn<SampleData>[] = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Email", accessor: "email" },
];

const meta: Meta<typeof ResponsiveTable<SampleData>> = {
  title: "Components/ResponsiveTable",
  component: ResponsiveTable,
  tags: ["autodocs"],
  argTypes: {
    adjustTable: {
      control: "boolean",
      description: "Toggle full width or fixed width table layout",
    },
  },
  parameters: {
    layout: "fullscreen", 
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<ResponsiveTableProps<SampleData>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: sampleColumns,
    adjustTable: true,
  },
};
