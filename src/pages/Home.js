import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedDrinks from '../components/FeaturedDrinks';
import PromoSection from '../components/PromoSection';
import ExtrasSection from '../components/ExtrasSection';
import About from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import SpecialOfferModal from '../components/SpecialOfferModal';
const Home = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "bg-gradient-to-b from-[#f5f3ed] via-[#faeee0] to-[#efe2d3] text-[#4b2e2e] min-h-screen", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(FeaturedDrinks, {}), _jsx("section", { id: "extras-section", children: _jsx(PromoSection, {}) }), _jsx(SpecialOfferModal, {}), _jsx(ExtrasSection, {}), _jsx(About, {}), _jsx(Testimonials, {}), _jsx(Footer, {})] }) }));
};
export default Home;
