import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPinterestP, FaTiktok, FaCoffee } from "react-icons/fa";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const inputRef = useRef(null);
    useEffect(() => {
        if (isSearchOpen) {
            inputRef.current?.focus();
        }
    }, [isSearchOpen]);
    // Optional: Close search bar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (inputRef.current &&
                !inputRef.current.parentElement?.contains(e.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "bg-[#4b2e2e] text-white text-sm py-2 px-6 flex justify-between items-center", children: [_jsx("p", { children: "Use our promocode \"coffee23\" to get 20% off" }), _jsxs("div", { className: "flex gap-4", children: [_jsx("a", { href: "#", className: "hover:text-yellow-400 transition", children: _jsx(FaFacebookF, {}) }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition", children: _jsx(FaInstagram, {}) }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition", children: _jsx(FaTwitter, {}) }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition", children: _jsx(FaYoutube, {}) }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition", children: _jsx(FaPinterestP, {}) }), _jsx("a", { href: "#", className: "hover:text-yellow-400 transition", children: _jsx(FaTiktok, {}) })] })] }), _jsxs("nav", { className: "bg-white shadow-md px-6 py-4 flex items-center justify-between", children: [_jsxs(Link, { to: "/", className: "text-2xl font-bold text-[#4b2e2e] tracking-wide flex items-center gap-2", children: [_jsx(FaCoffee, { className: "text-[#8c5c3c] text-3xl" }), _jsx("span", { children: "Coffee" })] }), _jsxs("div", { className: "space-x-6", children: [_jsx("a", { href: "/", className: "text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition", children: "Home" }), _jsx("a", { href: "/menu", className: "text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition", children: "Menu" }), _jsx("a", { href: "/pricing", className: "text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition", children: "Pricing" }), _jsx("a", { href: "/contact", className: "text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition", children: "Contact Us" }), _jsx("a", { href: "/about", className: "text-darkCoffee font-semibold text-lg hover:text-mediumCoffee transition", children: "About Us" })] }), _jsxs("div", { className: "flex items-center gap-6 relative", children: [_jsxs("div", { className: `flex items-center border ${isSearchOpen ? 'w-64 px-3' : 'w-10'} transition-all duration-300 ease-in-out rounded-full bg-grey shadow-sm overflow-hidden`, onClick: () => setIsSearchOpen(true), children: [_jsx(MagnifyingGlassIcon, { className: "h-5 w-5 text-[#8c5c3c] cursor-pointer" }), _jsx("input", { ref: inputRef, type: "text", placeholder: "Search...", className: `${isSearchOpen ? 'block' : 'hidden'} bg-transparent outline-none px-2 py-1 text-sm w-full` })] }), _jsx(Link, { to: "/login", className: "bg-[#8c5c3c] hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition", children: "Login" }), _jsx(Link, { to: "/SignUp", className: "bg-[#8c5c3c] hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition", children: "SignUp" })] })] })] }));
};
export default Navbar;
