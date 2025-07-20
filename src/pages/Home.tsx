import { useNavigate } from "react-router-dom";
import { Carousel } from "../components/Carousel";
import { SocialMediaLinks } from "../components/SocialMediaLinks";

const images = [
  {
    src: "https://ivenus.in/wp-content/uploads/2024/07/0-1024x1024.jpeg",
    alt: "Discount 1",
    href: "/discounts/1",
  },
  {
    src: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/10/samsung-1.jpg?ssl=1&quality=80&w=f",
    alt: "Discount 2",
    href: "/discounts/2",
  },
  {
    src: "https://www.hindustantimes.com/ht-img/img/2025/06/10/1600x900/now_and_N_1749557608475_1749557613270.png",
    alt: "Discount 3",
    href: "/discounts/3",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto mt-5 space-y-5">
      <Carousel autoSlide autoSlideInterval={4000}>
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => navigate(img.href)}
            className="w-full h-full focus:outline-none"
            style={{ background: "none", padding: 0, border: "none" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover h-148 rounded-xl"
            />
          </button>
        ))}
      </Carousel>

      <footer className="pt-5">
        <h2 className="text-center text-lg mb-4">Follow Us</h2>
        <div className="flex justify-center">
          <SocialMediaLinks orientation="horizontal" />
        </div>
      </footer>
    </div>
  );
};

export default Home;
