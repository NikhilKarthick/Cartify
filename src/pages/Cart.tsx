import React from "react";
import { Tabs } from "../components/Tabs";
import { useNavigate } from "react-router-dom";

interface CartItem {
  title: string;
  price: string;
  image: string;
  [key: string]: unknown; //  Allow dynamic props if needed
}

interface CartPageProps {
  cartItems: CartItem[];
  wishlistItems: CartItem[];
  removeFromCart: (index: number) => void;
  toggleWishlistSelection: (index: number) => void;
  selectedWishlist: number[];
  moveSelectedToCart: () => void;
}

const CartPage: React.FC<CartPageProps> = ({
  cartItems,
  wishlistItems,
  removeFromCart,
  toggleWishlistSelection,
  selectedWishlist,
  moveSelectedToCart,
}) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const number = parseInt((item.price as string).replace(/\D/g, ""), 10);
      return sum + (isNaN(number) ? 0 : number);
    }, 0);
  };

  const totalPrice = calculateTotal();

  const cartContent = cartItems.length > 0 ? (
    <>
      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="border border-gray-700 rounded-lg p-4 flex items-center justify-between space-x-4 bg-gray-800"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image as string}
                alt={item.title as string}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-white">{item.title as string}</h3>
                <p className="text-gray-300">{item.price as string}</p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              className="text-sm text-red-400 hover:text-red-300 border border-red-400 hover:border-red-300 px-3 py-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-6 border-t border-gray-600 pt-4">
        <div className="text-lg font-semibold text-white">
          Total: ₹{totalPrice.toLocaleString("en-IN")}
        </div>
        <button
          onClick={() => navigate("/payment")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow"
        >
          Proceed to Payment
        </button>
      </div>
    </>
  ) : (
    <p className="text-gray-300">Your cart is currently empty.</p>
  );

  const wishlistContent = wishlistItems.length > 0 ? (
    <div className="space-y-4">
      <ul className="space-y-4">
        {wishlistItems.map((item, index) => (
          <li
            key={index}
            className={`border rounded-lg p-4 flex items-center justify-between space-x-4 ${
              selectedWishlist.includes(index)
                ? "border-green-500 bg-gray-800"
                : "border-gray-700 bg-gray-800"
            }`}
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={selectedWishlist.includes(index)}
                onChange={() => toggleWishlistSelection(index)}
              />
              <img
                src={item.image as string}
                alt={item.title as string}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-white">{item.title as string}</h3>
                <p className="text-gray-300">{item.price as string}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedWishlist.length > 0 && (
        <button
          onClick={moveSelectedToCart}
          className="mt-4 bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Add Selected to Cart
        </button>
      )}
    </div>
  ) : (
    <p className="text-gray-300">Your wishlist is empty.</p>
  );

  const outOfStockItems = [
    {
      title: "Google Pixel 8 Pro (256GB, Obsidian)",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1724266735/Croma%20Assets/Communication/Mobiles/Images/309134_0_cv9vxa.png",
    },
    {
      title: "OnePlus 12R (256GB, Cool Blue)",
      image:
        "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1740666266/Croma%20Assets/Communication/Mobiles/Images/304696_0_l54t3d.png",
    },
  ];

  const outOfStockContent = (
    <ul className="space-y-4">
      {outOfStockItems.map((item, index) => (
        <li
          key={index}
          className="border border-yellow-500 rounded-lg p-4 flex items-center space-x-4 bg-gray-800"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded"
          />
          <div>
            <h3 className="font-semibold text-yellow-300">{item.title}</h3>
            <p className="text-yellow-200 text-sm">We’ll notify you when it's back in stock.</p>
          </div>
        </li>
      ))}
    </ul>
  );

  const tabs = [
    { label: "Cart", content: <div className="text-gray-300">{cartContent}</div> },
    { label: "Wishlist", content: <div className="text-gray-300">{wishlistContent}</div> },
    {
      label: "Out of Stock Notifs",
      content: <div className="text-gray-300">{outOfStockContent}</div>,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen text-white bg-gray-950">
      <h1 className="text-2xl font-bold mb-4">Your Account</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default CartPage;
