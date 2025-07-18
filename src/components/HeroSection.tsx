import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Player } from '@lottiefiles/react-lottie-player';
import coffeeBarista from '../assets/Coffee-Barista.json';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    
    <section className="bg-[#f9f5f1]/80 py-20">

      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 text-left" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4b2e2e] mb-6">
            Brewed to <span className="text-yellow-500">perfection</span> ☕
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome to Coffee Shop — where every cup tells a story of rich flavors, aromatic beans, and passion.
          </p>
          <button 
 className="bg-[#8c5c3c] hover:bg-yellow-700 text-white px-4 py-2 rounded-full transition" >
               Explore Menu
          </button>
        </div>

        {/* Right Lottie Animation */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <Player
  autoplay
  loop
  src={coffeeBarista}
  style={{ height: '370px', width: '480px' }} 
   
/>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
