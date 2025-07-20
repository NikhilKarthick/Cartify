import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";
import { Accordion } from "../components/Accordion";
import { Gallery } from "../components/Gallery";
import { ShoppingCart, Heart } from "lucide-react";

interface ItemPageTwoProps {
  addToCart: (item: { title: string; price: string; image: string }) => void;
  addToWishlist: (item: { title: string; price: string; image: string }) => void;
}

const ItemPageTwo: React.FC<ItemPageTwoProps> = ({ addToCart, addToWishlist }) => {
  const productImages = [
    {
      id: "front",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715785378/Croma%20Assets/Communication/Mobiles/Images/268993_0_ujhcoa.png",
      alt: "Samsung Galaxy S23 Front",
    },
    {
      id: "side",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671632/Croma%20Assets/Communication/Mobiles/Images/268992_12_urbhks.png?tr=w-1000",
      alt: "Samsung Galaxy S23 Side",
    },
    {
      id: "back",
      src: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708671638/Croma%20Assets/Communication/Mobiles/Images/268992_11_jhf5yt.png?tr=w-1000",
      alt: "Samsung Galaxy S23 Back",
    },
  ];

  const product = {
    title: "Samsung Galaxy S23 (128GB, Lavender)",
    price: "Rs 74999",
    image: productImages[0].src,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Discounts", href: "/discounts" },
          { label: "Samsung Galaxy S23" },
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
            The Samsung Galaxy S23 delivers a premium Android experience with its compact design,
            flagship Snapdragon 8 Gen 2 processor, and stunning AMOLED display. Perfect for photography, gaming, and productivity.
          </p>

          <Accordion
            items={[
              {
                id: "details",
                title: "Key Features",
                content: (
                  <ul className="list-disc pl-5 space-y-1">
                    <li>6.1-inch FHD+ Dynamic AMOLED 2X display</li>
                    <li>Snapdragon 8 Gen 2 for Galaxy processor</li>
                    <li>50MP triple rear camera system</li>
                    <li>12MP front camera with Nightography</li>
                    <li>IP68 water and dust resistance</li>
                    <li>Compact and sleek design with Gorilla Glass Victus 2</li>
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
                        <td className="py-2 px-3">6.1" FHD+ Dynamic AMOLED 2X, 120Hz</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Processor</td>
                        <td className="py-2 px-3">Snapdragon 8 Gen 2 (4nm)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Storage</td>
                        <td className="py-2 px-3">128GB / 256GB</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Camera</td>
                        <td className="py-2 px-3">50MP + 12MP + 10MP (rear), 12MP (front)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-medium text-gray-700">Battery</td>
                        <td className="py-2 px-3">3900mAh, 25W Fast Charging</td>
                      </tr>
                    </tbody>
                  </table>
                ),
              },
              {
                id: "warranty",
                title: "Warranty & Returns",
                content:
                  "This product comes with a 1-year manufacturer warranty from Samsung and is eligible for return within 7 days of delivery in original condition.",
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

export default ItemPageTwo;
