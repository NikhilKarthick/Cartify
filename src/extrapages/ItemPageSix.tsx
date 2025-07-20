import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Accordion } from "../components/Accordion";
import { Gallery } from "../components/Gallery";
import { ShoppingCart, Heart } from "lucide-react";

interface ItemPageSixProps {
  addToCart: (item: { title: string; price: string; image: string }) => void;
  addToWishlist: (item: { title: string; price: string; image: string }) => void;
}

const ItemPageSix: React.FC<ItemPageSixProps> = ({ addToCart, addToWishlist }) => {
  const images = [
    {
      id: "main",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713770769/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/306453_d0ywup.png",
      alt: "Nothing Ear 2024 - Main View",
    },
    {
      id: "case",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713770760/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/306453_4_lyt9fq.png?tr=w-1000",
      alt: "Nothing Ear 2024 - Charging Case",
    },
    {
      id: "in-ear",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713770759/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/306453_3_dsdhky.png?tr=w-1000",
      alt: "Nothing Ear 2024 - In-Ear Fit",
    },
  ];

  const product = {
    title: "Nothing Ear (2024) TWS Earbuds – Black",
    price: "Rs 11999",
    image: images[0].src,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Discounts", href: "/discounts" },
          { label: "Nothing Ear (2024)" },
        ]}
      />

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Gallery */}
        <div className="w-full lg:w-1/2">
          <Gallery images={images} />
        </div>

        {/* Product Info + Accordion */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-100">{product.title}</h1>
          <h3 className="text-2xl font-bold text-gray-200">Price :- {product.price}</h3>
          <p className="text-gray-400 text-base">
            The Nothing Ear (2024) offers high-fidelity sound, active noise cancellation,
            and a transparent design with intuitive gesture controls. Crafted for immersive
            audio and a premium everyday experience.
          </p>

          <Accordion
            items={[
              {
                id: "details",
                title: "Key Features",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Active Noise Cancellation (ANC) up to 45dB</li>
                    <li>Dual chamber design with 11mm dynamic drivers</li>
                    <li>Up to 40 hours of total battery life with case</li>
                    <li>Dual Connection (Bluetooth Multipoint)</li>
                    <li>Hi-Res Audio Wireless with LHDC 5.0 support</li>
                    <li>Clear Voice Technology for crystal-clear calls</li>
                    <li>IP54 water and dust resistance (earbuds)</li>
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
                        <td className="py-2 px-3 font-medium text-gray-700">Driver Size</td>
                        <td className="py-2 px-3">11mm Dynamic</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Noise Cancellation</td>
                        <td className="py-2 px-3">Up to 45dB (Adaptive ANC)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Battery Life</td>
                        <td className="py-2 px-3">Up to 8.5h (buds), 40h (with case)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Charging</td>
                        <td className="py-2 px-3">USB-C & Qi Wireless Charging</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Connectivity</td>
                        <td className="py-2 px-3">Bluetooth 5.3, LHDC 5.0, Multipoint</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Water Resistance</td>
                        <td className="py-2 px-3">IP54 (earbuds), IPX2 (case)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Companion App</td>
                        <td className="py-2 px-3">Nothing X app (Android & iOS)</td>
                      </tr>
                    </tbody>
                  </table>
                ),
              },
              {
                id: "warranty",
                title: "Warranty & Returns",
                content:
                  "This product includes a 1-year manufacturer warranty from Nothing. Returnable within 7 days of delivery if unopened and in original packaging.",
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

export default ItemPageSix;
