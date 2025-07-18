import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/mocha.jpeg"; // same image as login
import { Player } from "@lottiefiles/react-lottie-player";
import contactCoffee from "../assets/Coffee-Barista.json"; // coffee animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ContactUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-cover bg-center", style: { backgroundImage: `url(${bgImage})` }, children: [_jsxs("div", { className: "min-h-screen bg-[#f9f1e7]/30", children: [_jsx(Navbar, {}), _jsx("div", { className: "flex justify-center items-center min-h-[calc(100vh-80px)] px-4 py-16", children: _jsxs("div", { className: "bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10 max-w-4xl w-full", "data-aos": "fade-up", children: [_jsx("div", { className: "w-full lg:w-1/2", children: _jsx(Player, { autoplay: true, loop: true, src: contactCoffee, style: { height: "300px", width: "100%" } }) }), _jsxs("div", { className: "w-full lg:w-1/2", children: [_jsx("h2", { className: "text-3xl font-bold text-[#4b2e2e] mb-6 text-center", children: "Let's Talk \u2615" }), _jsxs("form", { className: "space-y-5", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-[#4b2e2e] mb-1", children: "Name" }), _jsx("input", { type: "text", placeholder: "Your Name", className: "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-[#4b2e2e] mb-1", children: "Email" }), _jsx("input", { type: "email", placeholder: "you@example.com", className: "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-[#4b2e2e] mb-1", children: "Message" }), _jsx("textarea", { rows: 4, placeholder: "Write your message...", className: "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" })] }), _jsx("button", { type: "submit", className: "w-full bg-[#8c5c3c] text-white py-2 rounded-lg hover:bg-[#724831] transition", children: "Send Message" })] })] })] }) })] }), _jsx("div", { className: " bg-[#f9f1e7]/30", children: _jsx(Footer, {}) })] }));
};
export default ContactUs;
