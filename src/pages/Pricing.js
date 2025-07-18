import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/mocha.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Pricing = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (_jsx("div", { className: "min-h-screen bg-cover bg-center", style: { backgroundImage: `url(${backgroundImage})` }, children: _jsxs("div", { className: "bg-[#f3ece6]/50 backdrop-blur-sm min-h-screen", children: [_jsx(Navbar, {}), _jsxs("div", { className: "max-w-6xl mx-auto px-6 py-16", children: [_jsxs("div", { className: "text-center mb-12", "data-aos": "fade-down", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-[#4b2e2e] mb-4", children: "Our Pricing Plans" }), _jsx("p", { className: "text-lg text-[#5a3e2b]", children: "Choose the perfect plan for your coffee journey \u2615" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", "data-aos": "zoom-in-up", children: [
                                {
                                    title: "Basic",
                                    price: "$9",
                                    desc: "For solo coffee lovers",
                                    features: ["1 Free Brew", "Access to Weekly Deals", "Limited Support"],
                                },
                                {
                                    title: "Pro",
                                    price: "$19",
                                    desc: "Perfect for daily drinkers",
                                    features: ["5 Free Brews", "Exclusive Offers", "Priority Support", "Coffee Recipes"],
                                },
                                {
                                    title: "Premium",
                                    price: "$29",
                                    desc: "Best for cafés & teams",
                                    features: ["Unlimited Brews", "Barista Training Access", "24/7 Support", "Free Merch"],
                                },
                            ].map((plan, index) => (_jsxs("div", { className: "bg-white/90 rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition", children: [_jsx("h2", { className: "text-2xl font-bold text-[#4b2e2e]", children: plan.title }), _jsx("p", { className: "text-[#8c5c3c] mt-1", children: plan.desc }), _jsxs("div", { className: "text-4xl text-[#4b2e2e] font-extrabold mt-4", children: [plan.price, _jsx("span", { className: "text-lg font-normal", children: "/mo" })] }), _jsx("ul", { className: "text-left mt-6 space-y-2 text-[#5a3e2b]", children: plan.features.map((feature, i) => (_jsxs("li", { children: ["\u2713 ", feature] }, i))) }), _jsx("button", { className: "mt-6 bg-[#8c5c3c] text-white px-6 py-2 rounded-full hover:bg-[#724831] transition", children: "Choose Plan" })] }, index))) }), _jsxs("div", { className: "mt-20", "data-aos": "fade-up", children: [_jsx("h2", { className: "text-3xl font-semibold text-center text-[#4b2e2e] mb-6", children: "Compare Features" }), _jsx("div", { className: "overflow-auto", children: _jsxs("table", { className: "w-full bg-white/90 text-left text-[#4b2e2e] rounded-xl shadow-md", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-[#f5eae0] text-[#4b2e2e]", children: [_jsx("th", { className: "py-3 px-6", children: "Feature" }), _jsx("th", { className: "py-3 px-6", children: "Basic" }), _jsx("th", { className: "py-3 px-6", children: "Pro" }), _jsx("th", { className: "py-3 px-6", children: "Premium" })] }) }), _jsx("tbody", { children: [
                                                    ["Free Brews", "1", "5", "Unlimited"],
                                                    ["Weekly Deals", "✓", "✓", "✓"],
                                                    ["Coffee Recipes", "-", "✓", "✓"],
                                                    ["Priority Support", "-", "✓", "✓"],
                                                    ["Merch Discounts", "-", "-", "✓"],
                                                    ["Barista Access", "-", "-", "✓"],
                                                ].map((row, i) => (_jsx("tr", { className: `${i % 2 === 0 ? "bg-[#fcf9f6]" : "bg-[#f9f5f1]"}`, children: row.map((col, j) => (_jsx("td", { className: "py-3 px-6", children: col }, j))) }, i))) })] }) })] })] }), _jsx(Footer, {})] }) }));
};
export default Pricing;
