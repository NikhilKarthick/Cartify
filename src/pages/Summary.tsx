import React from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveTable } from "../components/ResponsiveTable";
import type { TableColumn } from "../components/ResponsiveTable";

interface CartItem {
  title: string;
  price: string;
  image: string;
  [key: string]: unknown;
}

interface SummaryProps {
  cartItems: CartItem[];
  clearCart: () => void;
}

const columns: TableColumn<CartItem>[] = [
  {
    header: "Item",
    accessor: "title",
    cell: (item) => (
      <div className="flex items-center space-x-3">
        <img
          src={item.image as string}
          alt={item.title as string}
          className="w-12 h-12 rounded object-cover"
        />
        <span className="font-medium">{item.title as string}</span>
      </div>
    ),
  },
  {
    header: "Price",
    accessor: "price",
    cell: (item) => (
      <span className="text-green-400">{item.price as string}</span>
    ),
  },
];

const Summary: React.FC<SummaryProps> = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    clearCart(); // 🧹 Clear cart on return
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-semibold text-center text-green-400">
           Payment Successful!
        </h1>
        <p className="text-center text-gray-400">
          Thank you for your purchase. Below is a summary of your order:
        </p>

        {cartItems.length > 0 ? (
          <ResponsiveTable<CartItem> data={cartItems} columns={columns} />
        ) : (
          <p className="text-center text-gray-500">No items in cart.</p>
        )}

        <div className="text-center pt-6">
          <button
            onClick={handleReturnHome}
            className="px-6 py-2 bg-green-500 rounded hover:bg-green-600 text-white transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
