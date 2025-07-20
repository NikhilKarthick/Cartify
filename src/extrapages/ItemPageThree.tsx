import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Accordion } from "../components/Accordion";
import { Gallery } from "../components/Gallery";
import { ShoppingCart, Heart } from "lucide-react";

interface ItemPageThreeProps {
  addToCart: (item: { title: string; price: string; image: string }) => void;
  addToWishlist: (item: { title: string; price: string; image: string }) => void;
}

const ItemPageThree: React.FC<ItemPageThreeProps> = ({ addToCart, addToWishlist }) => {
  const productImages = [
    {
      id: "front",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739459415/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307123_0_qdgrja.png",
      alt: "HP Omen 16 - Front View",
    },
    {
      id: "side",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739459420/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307123_4_mazfhf.png?tr=w-1000",
      alt: "HP Omen 16 - Side View",
    },
    {
      id: "keyboard",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739459422/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307123_6_z2mihh.png?tr=w-1000",
      alt: "HP Omen 16 - Keyboard Closeup",
    },
  ];

  const product = {
    title: "HP Omen 16 Gaming Laptop (16GB RAM, 1TB SSD, RTX 4060)",
    price: "Rs 139999",
    image: productImages[0].src,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Discounts", href: "/discounts" },
          { label: "HP Omen 16" },
        ]}
      />

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Gallery */}
        <div className="w-full lg:w-1/2">
          <Gallery images={productImages} />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-100">{product.title}</h1>
          <h3 className="text-2xl font-bold text-gray-200">Price :- {product.price}</h3>
          <p className="text-gray-400 text-base">
            The HP Omen 16 is a high-performance gaming laptop built for immersive experiences,
            featuring powerful graphics, fast refresh rates, and a sleek design. Perfect for gamers, creators, and multitaskers.
          </p>

          <Accordion
            items={[
              {
                id: "details",
                title: "Key Features",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>16.1-inch QHD 165Hz anti-glare IPS display</li>
                    <li>Intel Core i7 13th Gen processor</li>
                    <li>NVIDIA GeForce RTX 4060 GPU with 8GB GDDR6</li>
                    <li>OMEN Tempest Cooling Technology</li>
                    <li>RGB backlit keyboard with per-key lighting</li>
                    <li>OMEN Gaming Hub with performance tuning</li>
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
                        <td className="py-2 px-3">16.1" QHD IPS, 165Hz, 300 nits</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Processor</td>
                        <td className="py-2 px-3">Intel Core i7-13700HX</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Graphics</td>
                        <td className="py-2 px-3">NVIDIA RTX 4060, 8GB</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Memory</td>
                        <td className="py-2 px-3">16GB DDR5 RAM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Storage</td>
                        <td className="py-2 px-3">1TB PCIe Gen4 NVMe SSD</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Battery</td>
                        <td className="py-2 px-3">6-cell, 83Wh Li-ion, up to 6 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Operating System</td>
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
                  "This laptop comes with a 1-year onsite warranty from HP. Return eligible within 7 days of delivery if unused and in original packaging.",
              },
            ]}
          />

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded shadow"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>

            <button
              type="button"
              onClick={() => addToWishlist(product)}
              className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded shadow"
            >
              <Heart size={20} />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPageThree;
