import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
const SpecialOfferModal = () => {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setShowModal(true);
            }
        }, { threshold: 0.5 });
        const PromoSection = document.getElementById('promo-section');
        if (PromoSection)
            observer.observe(PromoSection);
        return () => {
            if (PromoSection)
                observer.unobserve(PromoSection);
        };
    }, []);
    if (!showModal)
        return null;
    return (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity duration-300 ease-out", children: _jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center relative animate-fade-in", children: [_jsx("button", { onClick: () => setShowModal(false), className: "absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl", children: "\u00D7" }), _jsx("div", { className: "text-[#6b4226] mb-4 text-5xl animate-pulse", children: _jsx(FaCoffee, {}) }), _jsx("h3", { className: "text-2xl font-bold text-[#4b2e2e] mb-2", children: "\uD83C\uDF81 Special Offer!" }), _jsxs("p", { className: "text-gray-700 mb-4", children: ["Buy 1 Coffee, Get 1 Free Croissant \u2014 this week only! ", _jsx("br", {}), "Loyalty members always get 10% off \u2615\u2728"] }), _jsx("button", { className: "bg-[#8c5c3c] hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition animate-pulse", children: "Claim Now" })] }) }));
};
export default SpecialOfferModal;
