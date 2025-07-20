import React, { useState } from "react";
import { Gallery } from "../components/Gallery";
import { Breadcrumb } from "../components/Breadcrumb";
import { Accordion } from "../components/Accordion";
import { ShoppingCart, Heart } from "lucide-react";

interface ItemPageFourProps {
  addToCart: (item: { title: string; price: string; image: string }) => void;
  addToWishlist: (item: { title: string; price: string; image: string }) => void;
}

const ItemPageFour: React.FC<ItemPageFourProps> = ({ addToCart, addToWishlist }) => {
  const [showAlert, setShowAlert] = useState(false);

  const productTitle = "Lenovo Legion 5 (16GB RAM, 1TB SSD, RTX 4070)";
  const productPrice = "Rs 129999";
  const productImage =
    "https://media.croma.com/image/upload/v1715929263/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272327_0_ygpb1v.png";

  const images = [
    {
      id: "front",
      src: productImage,
      alt: "Lenovo Legion 5 Pro - Front View",
    },
    {
      id: "angled",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739459218/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310919_10_slukqw.png?tr=w-1000",
      alt: "Lenovo Legion 5 Pro - Angled View",
    },
    {
      id: "keyboard",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739459222/Croma%20Assets/Computers%20Peripherals/Laptop/Images/310919_12_nt6rtu.png?tr=w-1000",
      alt: "Lenovo Legion 5 Pro - Keyboard View",
    },
  ];

  const product = {
    title: productTitle,
    price: productPrice,
    image: productImage,
  };

  const handleAddToCart = () => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Discounts", href: "/discounts" },
          { label: productTitle },
        ]}
      />

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Image gallery */}
        <div className="w-full lg:w-1/2">
          <Gallery images={images} />
        </div>

        {/* Product info */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-100">{productTitle}</h1>
          <h3 className="text-2xl font-bold text-gray-200">Price :- {productPrice}</h3>
          <p className="text-gray-400 text-base">
            The Lenovo Legion 5 Pro is designed for professional-level gaming and productivity,
            offering top-tier graphics, stunning visuals, and Legion Coldfront cooling. Built for serious gamers and creators.
          </p>

          <Accordion
            items={[
              {
                id: "details",
                title: "Key Features",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>16-inch WQXGA IPS anti-glare display, 500 nits</li>
                    <li>AMD Ryzen 7 7845HX processor</li>
                    <li>NVIDIA GeForce RTX 4070 GPU with 8GB GDDR6</li>
                    <li>165Hz refresh rate with Dolby Vision</li>
                    <li>4-zone RGB backlit keyboard</li>
                    <li>Legion Coldfront 5.0 thermal system</li>
                  </ul>
                ),
              },
              {
                id: "specs",
                title: "Technical Specifications",
                content: (
                  <table className="w-full text-sm border border-gray-200">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="py-2 px-3 font-semibold text-gray-800">Specification</th>
                        <th className="py-2 px-3 font-semibold text-gray-800">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Display</td>
                        <td className="py-2 px-3">16" WQXGA (2560x1600), 165Hz, 500 nits</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Processor</td>
                        <td className="py-2 px-3">AMD Ryzen 7 7845HX</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Graphics</td>
                        <td className="py-2 px-3">NVIDIA RTX 4070, 8GB</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Memory</td>
                        <td className="py-2 px-3">16GB DDR5 RAM (expandable)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Storage</td>
                        <td className="py-2 px-3">1TB PCIe Gen4 SSD</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Battery</td>
                        <td className="py-2 px-3">4-cell 80Wh, Rapid Charge Pro</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">OS</td>
                        <td className="py-2 px-3">Windows 11 Home</td>
                      </tr>
                    </tbody>
                  </table>
                ),
              },
              {
                id: "warranty",
                title: "Warranty & Returns",
                content:
                  "Includes 1-year onsite warranty from Lenovo with accidental damage protection. Return available within 7 days of delivery if unused.",
              },
            ]}
          />

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={handleAddToWishlist}
              className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
            >
              <Heart size={20} />
              <span>Add to Wishlist</span>
            </button>
          </div>

          {/* Alert */}
          {showAlert && (
            <div className="mt-3 p-3 rounded bg-green-700 text-white font-semibold">
              Item added to cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemPageFour;
