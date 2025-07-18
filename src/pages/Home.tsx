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
  return (
    <>
<div className="bg-gradient-to-b from-[#f5f3ed] via-[#faeee0] to-[#efe2d3] text-[#4b2e2e] min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedDrinks/>      
      <section id="extras-section">
     <PromoSection />
    </section>
 <SpecialOfferModal />
      <ExtrasSection />
      <About />
      <Testimonials />
      <Footer />
      </div>
    </>
  );
};

export default Home;
