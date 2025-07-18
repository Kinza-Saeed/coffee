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

  return (
    <section className="bg-[#f9f5f1]/80 py-20">
      {/* Images */}
      <div id="promo-section"  className="flex flex-col lg:flex-row overflow-hidden">
        {images.map((url, i) => (
          <div key={i} className="w-full lg:w-1/3 h-64 overflow-hidden group" data-aos="zoom-in">
            <img
              src={url}
              alt={`Promo ${i + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Promo bar */}
      <div
        className="w-[90%] mx-auto -mt-12 bg-[#4b2e2e] text-white rounded-md shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-10"
        data-aos="fade-up"
      >
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-bold mb-1">Get 1 Croissant with Any Coffee</h3>
          <p className="text-sm text-gray-200">
            Limited-time offer only! Grab your favorite brew and get a fresh croissant on the house.
          </p>
        </div>
        <button className="bg-[#8c5c3c] hover:bg-yellow-600 text-white px-6 py-2 rounded-sm text-sm">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default PromoSection;
