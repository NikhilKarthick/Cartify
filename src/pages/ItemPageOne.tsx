import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Accordion } from "../components/Accordion";
import { Gallery } from "../components/Gallery";
import { ShoppingCart, Heart } from "lucide-react";

interface ItemPageOneProps {
  addToCart: (item: { title: string; price: string; image: string }) => void;
  addToWishlist: (item: { title: string; price: string; image: string }) => void;
}

const ItemPageOne: React.FC<ItemPageOneProps> = ({ addToCart, addToWishlist }) => {
  const productImages = [
    {
      id: "front",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750517/Croma%20Assets/Communication/Mobiles/Images/300779_0_polix6.png",
      alt: "iPhone 15 Front",
    },
    {
      id: "side",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749526/Croma%20Assets/Communication/Mobiles/Images/300716_1_annw4d.png?tr=w-1000",
      alt: "iPhone 15 Side",
    },
    {
      id: "back",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747749531/Croma%20Assets/Communication/Mobiles/Images/300716_4_niattl.png?tr=w-1000",
      alt: "iPhone 15 Back",
    },
  ];

  const product = {
    title: "Apple iPhone 15 (128GB, Green)",
    price: "Rs 59000",
    image: productImages[0].src,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Discounts", href: "/discounts" },
          { label: "iPhone 15" },
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
            The iPhone 15 features a sleek new design, advanced camera system,
            and powerful A16 Bionic chip. Experience the Dynamic Island, USB-C connectivity,
            and all-day battery life — perfect for work and play.
          </p>

          <Accordion
            items={[
              {
                id: "details",
                title: "Key Features",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>6.1 inch Super Retina XDR display</li>
                    <li>A16 Bionic chip for powerful performance</li>
                    <li>48MP main camera with 2x telephoto</li>
                    <li>Dynamic Island and USB-C connectivity</li>
                    <li>All-day battery life with fast charging</li>
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
                        <td className="py-2 px-3">6.1" OLED Super Retina XDR</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Processor</td>
                        <td className="py-2 px-3">A16 Bionic chip</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Storage</td>
                        <td className="py-2 px-3">128GB</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Camera</td>
                        <td className="py-2 px-3">48MP + 12MP (rear), 12MP (front)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Battery</td>
                        <td className="py-2 px-3">Up to 20 hours video playback</td>
                      </tr>
                    </tbody>
                  </table>
                ),
              },
              {
                id: "warranty",
                title: "Warranty & Returns",
                content:
                  "This product comes with a 1-year limited warranty from Apple and is eligible for return within 7 days of delivery in original packaging.",
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

export default ItemPageOne;
