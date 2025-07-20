import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Accordion } from "../components/Accordion";
import { Gallery } from "../components/Gallery";
import { ShoppingCart, Heart } from "lucide-react";

interface ItemPageFiveProps {
  addToCart: (item: { title: string; price: string; image: string }) => void;
  addToWishlist: (item: { title: string; price: string; image: string }) => void;
}

const ItemPageFive: React.FC<ItemPageFiveProps> = ({ addToCart, addToWishlist }) => {
  const images = [
    {
      id: "front",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1741280909/Croma%20Assets/Communication/Mobiles/Images/314524_0_jjix9p.png",
      alt: "Nothing Phone 3a - Front View",
    },
    {
      id: "side",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1741280996/Croma%20Assets/Communication/Mobiles/Images/314521_3_zjzakk.png?tr=w-1000",
      alt: "Nothing Phone 3a - Side View",
    },
    {
      id: "back",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1741280998/Croma%20Assets/Communication/Mobiles/Images/314521_7_iwnthb.png?tr=w-1000",
      alt: "Nothing Phone 3a - Back View",
    },
  ];

  const product = {
    title: "Nothing Phone 3a (8GB RAM, 128GB, Black)",
    price: "Rs 24999",
    image: images[0].src,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Discounts", href: "/discounts" },
          { label: "Nothing Phone 3a" },
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
            The Nothing Phone 3a brings a minimalist design and transparent aesthetics with upgraded internals,
            improved Glyph interface, and clean Android experience. Ideal for those who value style and performance.
          </p>

          <Accordion
            items={[
              {
                id: "details",
                title: "Key Features",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>6.7-inch FHD+ OLED display with 120Hz refresh rate</li>
                    <li>Qualcomm Snapdragon 7+ Gen 2 processor</li>
                    <li>Dual rear camera system: 50MP + 50MP ultra-wide</li>
                    <li>16MP front-facing camera</li>
                    <li>Glyph Interface 2.0 for smart LED notifications</li>
                    <li>Android 14 with Nothing OS 3</li>
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
                        <td className="py-2 px-3">6.7" FHD+ OLED, 120Hz, HDR10+</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Processor</td>
                        <td className="py-2 px-3">Snapdragon 7+ Gen 2</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Camera</td>
                        <td className="py-2 px-3">50MP + 50MP (rear), 16MP (front)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Memory</td>
                        <td className="py-2 px-3">8GB LPDDR5 RAM</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Storage</td>
                        <td className="py-2 px-3">128GB UFS 3.1</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Battery</td>
                        <td className="py-2 px-3">4700mAh with 45W fast charging</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Operating System</td>
                        <td className="py-2 px-3">Android 14 with Nothing OS 3</td>
                      </tr>
                    </tbody>
                  </table>
                ),
              },
              {
                id: "warranty",
                title: "Warranty & Returns",
                content:
                  "This product comes with a 1-year manufacturer warranty from Nothing. Returns accepted within 7 days if unused and in original condition.",
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

export default ItemPageFive;
