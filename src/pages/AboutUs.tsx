// src/pages/AboutUs.tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Player } from '@lottiefiles/react-lottie-player';

import aboutCoffee from '../assets/Coffee-Barista.json';
import bgImage from '../assets/mocha.jpeg';
import processImg from '../assets/process.jpeg';
import moreThanCoffeeImg from '../assets/about.jpeg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Full-page background wrapper */}
      <div
        className="min-h-screen bg-cover bg-center py-10 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="space-y-20 max-w-6xl mx-auto">

          {/* Hero Section */}
          <div
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            data-aos="fade-up"
          >
            <div className="lg:w-1/2 flex items-center justify-center p-6">
              <Player
                autoplay
                loop
                src={aboutCoffee}
                style={{ height: '320px', width: '100%' }}
              />
            </div>
            <div className="lg:w-1/2 p-8 text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#4b2e2e] mb-4">About Our Coffee Shop</h2>
              <p className="text-gray-700 text-sm mb-4">
                Welcome to our coffee sanctuary, where passion meets perfection in every cup.
                We pride ourselves on sourcing the finest beans, blending tradition with
                innovation, and crafting an experience that warms your soul.
              </p>
              <p className="text-gray-700 text-sm">
                Whether you’re here for a morning boost or an afternoon treat, our shop is more
                than just coffee — it’s a community brewed with care.
              </p>
            </div>
          </div>

          {/* How It’s Made Section */}
          <div
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            data-aos="fade-up"
          >
            <div className="md:w-1/2 p-8 text-[#4b2e2e]">
              <h2 className="text-3xl font-bold mb-4">How It’s Made</h2>
              <p className="text-gray-700 mb-4">
                From bean to cup, our process ensures quality in every step:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 text-sm">
                <li>Selecting premium beans</li>
                <li>Expert roasting techniques</li>
                <li>Hand-crafted brewing</li>
                <li>Served fresh with care</li>
              </ol>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-6">
              <img
                src={processImg}
                alt="Coffee process"
                className="rounded-xl shadow-md w-full max-h-[300px] object-cover"
              />
            </div>
          </div>

          {/* More Than Just Coffee Section */}
          <div
            className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
            data-aos="fade-up"
          >
            <div className="lg:w-1/2 flex items-center justify-center p-6">
              <img
                src={moreThanCoffeeImg}
                alt="More Than Coffee"
                className="rounded-xl shadow-md w-full max-h-[300px] object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 text-[#4b2e2e] text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">More than just coffee</h2>
              <p className="text-gray-700 text-sm mb-4">
                Our story began with a love for rich aromas, comforting cups, and community.
                At Coffee Shop, every sip connects people, every bean tells a story,
                and every brew is a crafted moment of warmth and joy.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mb-6">
                <li>Locally sourced & roasted beans</li>
                <li>Artisanal brewing techniques</li>
                <li>Spaces built for community and comfort</li>
                <li>Eco-friendly and sustainable practices</li>
              </ul>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full text-sm transition">
                Meet Our Team
              </button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
