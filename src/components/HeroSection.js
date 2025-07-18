import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Player } from '@lottiefiles/react-lottie-player';
import coffeeBarista from '../assets/Coffee-Barista.json';
const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (_jsx("section", { className: "bg-[#f9f5f1]/80 py-20", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12", children: [_jsxs("div", { className: "flex-1 text-left", "data-aos": "fade-right", children: [_jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4b2e2e] mb-6", children: ["Brewed to ", _jsx("span", { className: "text-yellow-500", children: "perfection" }), " \u2615"] }), _jsx("p", { className: "text-lg text-gray-700 mb-6", children: "Welcome to Coffee Shop \u2014 where every cup tells a story of rich flavors, aromatic beans, and passion." }), _jsx("button", { className: "bg-[#8c5c3c] hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition", children: "Explore Menu" })] }), _jsx("div", { className: "flex-1 flex justify-center", "data-aos": "fade-left", children: _jsx(Player, { autoplay: true, loop: true, src: coffeeBarista, style: { height: '370px', width: '480px' } }) })] }) }));
};
export default HeroSection;
