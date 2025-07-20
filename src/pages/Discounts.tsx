import React, { useState } from "react";
import { Pagination } from "../components/Pagination";
import { Card } from "../components/Card";

const DISCOUNT_IMAGES = [
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1747750517/Croma%20Assets/Communication/Mobiles/Images/300779_0_polix6.png",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1715785378/Croma%20Assets/Communication/Mobiles/Images/268993_0_ujhcoa.png",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1739459415/Croma%20Assets/Computers%20Peripherals/Laptop/Images/307123_0_qdgrja.png",
  "https://media.croma.com/image/upload/v1715929263/Croma%20Assets/Computers%20Peripherals/Laptop/Images/272327_0_ygpb1v.png",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1741280909/Croma%20Assets/Communication/Mobiles/Images/314524_0_jjix9p.png",
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713770769/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/306453_d0ywup.png",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mba13-skyblue-select-202503?wid=892&hei=820&fmt=jpeg&qlt=90&.v=M2RyY09CWXlTQUp1KzEveHR6VXNxcTQ1bzN1SitYTU83Mm9wbk1xa1lWN2h4SGtCQ2R3aStVaDRhL2VUV1NjdkJkRlpCNVhYU3AwTldRQldlSnpRa0lIV0Fmdk9rUlVsZ3hnNXZ3K3lEVlk",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
  "https://inventstore.in/wp-content/uploads/2023/04/iPhone_13_Midnight_.webp",
  "https://iplanet.one/cdn/shop/files/iPhone_14_Blue_PDP_Image_Position-1A__WWEN.jpg?v=1691142210",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZnk5Dwgrj-hwVIGZPxubqLU_G_aNI90TBQ&s",
  "https://hpstorerajkot.com/wp-content/uploads/71PUAG25h2L._SL1500_.jpg",
  "https://rukminim2.flixcart.com/image/300/300/xif0q/mobile/q/b/g/-original-imah3zznscgh3fgk.jpeg",
  "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-cell-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=2000&hei=2000&fmt=png-alpha",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHuBkbhUfzjcvty6vTlE7dA9_rj8-eAEuTFA&s",
  "https://www.designinfo.in/wp-content/uploads/2024/08/Samsung-Galaxy-Watch-7-40mm-Green-BT-5-1.webp",
  "https://media.croma.com/image/upload/v1708665892/Croma%20Assets/Communication/Mobiles/Images/275648_0_lfhqzy.png",
  "https://m.media-amazon.com/images/I/51PLKwik5fL.jpg",
];

const DISCOUNT_DESCRIPTIONS = [
  "iPhone 15 now ₹59,000 from MRP ₹70,000",
  "Samsung S23 now ₹44,999 from MRP ₹60,000",
  "HP Omen now ₹92,000 from MRP ₹1,18,000",
  "Lenovo Legion now ₹1,56,000 from MRP ₹1,90,000",
  "Nothing 3a now ₹18,999 from MRP ₹27,000",
  "Nothing Ear now ₹8,999 from MRP ₹15,999",
  "MacBook Air M4 now ₹89,999 from MRP ₹1,19,000",
  "AirPods 2 now ₹12,999 from MRP ₹22,999",
  "iPhone 13 now ₹42,999 from MRP ₹54,999",
  "iPhone 14 now ₹55,999 from MRP ₹62,999",
  "Dell XPS 16 now ₹1,59,000 from MRP ₹1,89,999",
  "HP Pavilion now ₹54,999 from MRP ₹72,999",
  "Google Pixel 9 now ₹78,999 from MRP ₹1,03,999",
  "Apple Watch Series 10 now ₹61,999",
  "Moto Edge 60 now ₹19,999",
  "Galaxy Watch 7 now ₹14,999",
  "Redmi 12 5G now ₹9,999",
  "Alienware X16 now ₹2,25,000 for a limited time",
];

const allDiscounts = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: `Discount Item ${i + 1}`,
  image: DISCOUNT_IMAGES[i],
  description: DISCOUNT_DESCRIPTIONS[i],
}));

const ITEMS_PER_PAGE = 6;

const Discounts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allDiscounts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = allDiscounts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-2xl font-semibold text-center">Latest Discounts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Discounts;
