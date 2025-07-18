import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const testimonials = [
    {
        name: 'Emma Carter',
        text: 'Absolutely love this place! The coffee is always fresh and the croissants are amazing.',
        img: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        name: 'Daniel Smith',
        text: 'Best coffee shop in town. Great ambiance and friendly staff. Highly recommended!',
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Sophia Green',
        text: 'I come here every morning. Their lattes are perfect and the service is top-notch.',
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
];
const Testimonials = () => {
    return (_jsx("section", { className: "bg-[#f9f5f1]/80 py-20", children: _jsxs("div", { className: "max-w-6xl mx-auto px-6 text-center", children: [_jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-[#4b2e2e] mb-4", "data-aos": "fade-up", children: "What Our Customers Say" }), _jsx("p", { className: "text-gray-600 mb-12", "data-aos": "fade-up", "data-aos-delay": "100", children: "Real experiences from coffee lovers just like you." }), _jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t, index) => (_jsxs("div", { className: "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition", "data-aos": "zoom-in", "data-aos-delay": index * 100, children: [_jsx("img", { src: t.img, alt: t.name, className: "w-16 h-16 rounded-full mx-auto mb-4 object-cover" }), _jsxs("p", { className: "text-gray-700 italic mb-4", children: ["\u201C", t.text, "\u201D"] }), _jsx("h4", { className: "font-semibold text-gray-900", children: t.name })] }, index))) })] }) }));
};
export default Testimonials;
