import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP, FaTiktok, FaCoffee } from "react-icons/fa";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isSearchOpen]);

  // Optional: Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.parentElement?.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-[#4b2e2e] text-white text-sm py-2 px-6 flex justify-between items-center">
        <p>Use our promocode "coffee23" to get 20% off</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-400 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-yellow-400 transition"><FaYoutube /></a>
          <a href="#" className="hover:text-yellow-400 transition"><FaPinterestP /></a>
          <a href="#" className="hover:text-yellow-400 transition"><FaTiktok /></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#4b2e2e] tracking-wide flex items-center gap-2">
        <FaCoffee className="text-[#8c5c3c] text-3xl" />
          <span>Coffee</span>
        </Link>

       <div className="space-x-6">
    <a href="/" className="text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition">Home</a>
    <a href="/menu" className="text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition">Menu</a>
    <a href="/pricing" className="text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition">Pricing</a>
    <a href="/contact" className="text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition">Contact Us</a>
    <a href="/about" className="text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition">About Us</a>
  </div>
        {/* Right side */}
        <div className="flex items-center gap-6 relative">
          {/* Search Bar */}
          <div
            className={`flex items-center border ${
              isSearchOpen ? 'w-64 px-3' : 'w-10'
            } transition-all duration-300 ease-in-out rounded-full bg-grey shadow-sm overflow-hidden`}
            onClick={() => setIsSearchOpen(true)}
          >
            <MagnifyingGlassIcon className="h-5 w-5 text-[#8c5c3c] cursor-pointer" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              className={`${
                isSearchOpen ? 'block' : 'hidden'
              } bg-transparent outline-none px-2 py-1 text-sm w-full`}
            />
          </div>

          {/* Auth Buttons */}
          <Link
            to="/login"
            className="bg-[#8c5c3c] hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition"
          >
            Login
          </Link>
          <Link
            to="/SignUp"
            className="bg-[#8c5c3c] hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition"
          >
            SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
