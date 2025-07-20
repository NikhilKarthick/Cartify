import { useState } from "react";
// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWrapper = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-4 text-white bg-gray-900 p-6 rounded max-w-2xl mx-auto">
      <p className="text-center">Current Page: {currentPage}</p>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <PaginationWrapper totalPages={5} />,
};

export const ManyPages: Story = {
  render: () => <PaginationWrapper totalPages={15} />,
};

export const OnFirstPage: Story = {
  render: () => (
    <div className="p-6 bg-gray-900 text-white rounded max-w-md mx-auto">
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={() => {}}
      />
    </div>
  ),
};

export const OnLastPage: Story = {
  render: () => (
    <div className="p-6 bg-gray-900 text-white rounded max-w-md mx-auto">
      <Pagination
        currentPage={10}
        totalPages={10}
        onPageChange={() => {}}
      />
    </div>
  ),
};



export const SinglePage: Story = {
  render: () => (
    <div className="p-6 bg-gray-900 text-white rounded max-w-md mx-auto">
      <Pagination
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      />
    </div>
  ),
};
