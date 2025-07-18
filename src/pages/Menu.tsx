import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import espressoImg from "../assets/espresso.jpeg";
import latteImg from "../assets/latte.jpeg";
import cappuccinoImg from "../assets/cappuccino.jpeg";
import mochaImg from "../assets/mocha.jpeg";
import flatWhiteImg from "../assets/flatwhite.jpeg";
import macchiatoImg from "../assets/macchiato.jpeg";
import coldBrewImg from "../assets/coldbrew.jpeg";
import backgroundImage from "../assets/mocha.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const menuItems = [
  {
    img: espressoImg,
    title: "Espresso",
    desc: "Bold and strong, a true coffee lover’s shot.",
    price: "$3.25",
    bestseller: false,
    categories: ["Hot"],
  },
  {
    img: latteImg,
    title: "Latte",
    desc: "Smooth espresso with steamed milk and foam.",
    price: "$5.75",
    bestseller: true,
    categories: ["Hot", "Flavored"],
  },
  {
    img: cappuccinoImg,
    title: "Cappuccino",
    desc: "Rich espresso topped with fluffy milk foam.",
    price: "$4.99",
    bestseller: false,
    categories: ["Hot", "Classic"],
  },
  {
    img: mochaImg,
    title: "Mocha",
    desc: "A delicious blend of chocolate and espresso.",
    price: "$5.75",
    bestseller: true,
    categories: ["Hot", "Flavored"],
  },
  {
    img: flatWhiteImg,
    title: "Flat White",
    desc: "Smooth, velvety texture with strong espresso.",
    price: "$5.75",
    bestseller: true,
    categories: ["Hot", "Signature"],
  },
  {
    img: macchiatoImg,
    title: "Macchiato",
    desc: "Espresso with a dash of milk foam.",
    price: "$5.75",
    bestseller: false,
    categories: ["Hot", "Flavored"],
  },
  {
    img: latteImg,
    title: "Americano",
    desc: "Chilled brew perfect for sunny days.",
    price: "$5.75",
    bestseller: true,
    categories: ["Hot", "Flavored"],
  },
  {
    img: coldBrewImg,
    title: "Cold Brew",
    desc: "Sweet and creamy with caramel notes.",
    price: "$5.75",
    bestseller: false,
    categories: ["Hot", "Signature"],
  },
   {
    img: espressoImg,
    title: "Espresso",
    desc: "Bold and strong, a true coffee lover’s shot.",
    price: "$3.25",
    bestseller: false,
    categories: ["Hot"],
  },
  {
    img: latteImg,
    title: "Latte",
    desc: "Smooth espresso with steamed milk and foam.",
    price: "$5.75",
    bestseller: true,
    categories: ["Hot", "Flavored"],
  },
  {
    img: cappuccinoImg,
    title: "Cappuccino",
    desc: "Rich espresso topped with fluffy milk foam.",
    price: "$4.99",
    bestseller: false,
    categories: ["Hot", "Classic"],
  },
   {
    img: coldBrewImg,
    title: "Cold Brew",
    desc: "Sweet and creamy with caramel notes.",
    price: "$5.75",
    bestseller: false,
    categories: ["Hot", "Signature"],
  },
];

const Menu = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
    <div className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[#f3ece6]/50 backdrop-blur-sm min-h-screen">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 py-16">
          <h1
            className="text-4xl font-bold text-center text-[#4b2e2e] mb-12"
            data-aos="fade-down"
          >
            Explore Our Coffee Menu
          </h1>

          
{/* Menu Grid */}
<div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="group relative bg-white/90 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl border border-transparent hover:border-yellow-500 flex flex-col"
      data-aos="zoom-in"
      data-aos-delay={`${index * 100}`}
    >
      {/* Favorite Heart Icon */}
      <button
        className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition z-10"
        onClick={() => toggleFavorite(index)}
      >
        {favorites.includes(index) ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart />
        )}
      </button>

      {/* Bestseller Badge */}
      {item.bestseller && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-[#4b2e2e] text-xs font-semibold px-2 py-1 rounded shadow">
          Bestseller
        </span>
      )}

      {/* Image */}
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        {/* Title */}
        <h2 className="text-xl font-semibold text-[#4b2e2e] group-hover:text-yellow-600 transition mb-1">
          {item.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-[#6d4c41] mb-3">{item.desc}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 text-xs text-white font-semibold mb-4">
          {item.categories.map((cat, i) => (
            <span
              key={i}
              className="bg-[#8c5c3c] px-2 py-1 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto space-y-2">
          <button className="w-full bg-[#8c5c3c] hover:bg-yellow-600 text-white py-2 rounded-full transition-all duration-300 hover:scale-105">
            Add to Bag
          </button>
          <button className="w-full bg-[#8c5c3c] hover:bg-yellow-600 text-white py-2 rounded-full transition-all duration-300 hover:scale-105">
            Order Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>



          {/* Explore More Button */}
          <div className="mt-12 text-center" data-aos="fade-up">
            <button className="bg-[#8c5c3c] text-white px-6 py-2 rounded-full hover:bg-[#6f422b] transition">
              Explore More
            </button>
          </div>
        </div>

        <Footer />
      </div>
      </div>
    </>
  );
};

export default Menu;
