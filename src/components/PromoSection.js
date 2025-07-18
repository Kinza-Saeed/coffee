import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const images = [
    "src/assets/coffee5.jpeg",
    "src/assets/coffee6.jpeg",
    "src/assets/coffee7.jpeg",
];
const PromoSection = () => {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);
    return (_jsxs("section", { className: "bg-[#f9f5f1]/80 py-20", children: [_jsx("div", { id: "promo-section", className: "flex flex-col lg:flex-row overflow-hidden", children: images.map((url, i) => (_jsx("div", { className: "w-full lg:w-1/3 h-64 overflow-hidden group", "data-aos": "zoom-in", children: _jsx("img", { src: url, alt: `Promo ${i + 1}`, className: "w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out" }) }, i))) }), _jsxs("div", { className: "w-[90%] mx-auto -mt-12 bg-[#4b2e2e] text-white rounded-md shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-10", "data-aos": "fade-up", children: [_jsxs("div", { className: "flex-1 text-center sm:text-left", children: [_jsx("h3", { className: "text-lg sm:text-xl font-bold mb-1", children: "Get 1 Croissant with Any Coffee" }), _jsx("p", { className: "text-sm text-gray-200", children: "Limited-time offer only! Grab your favorite brew and get a fresh croissant on the house." })] }), _jsx("button", { className: "bg-[#8c5c3c] hover:bg-yellow-600 text-white px-6 py-2 rounded-sm text-sm", children: "Order Now" })] })] }));
};
export default PromoSection;
