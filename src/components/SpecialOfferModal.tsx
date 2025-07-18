import { useEffect, useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import PromoSection from './PromoSection';

const SpecialOfferModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { 
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShowModal(true);
        }
      },
      { threshold: 0.5 }
    );

    const PromoSection = document.getElementById('promo-section');
    if (PromoSection) observer.observe(PromoSection);

    return () => {
      if (PromoSection) observer.unobserve(PromoSection);
    };
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md text-center relative animate-fade-in">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        {/* Icon */}
        <div className="text-[#6b4226] mb-4 text-5xl animate-pulse">
          <FaCoffee />
        </div>

        <h3 className="text-2xl font-bold text-[#4b2e2e] mb-2">🎁 Special Offer!</h3>
        <p className="text-gray-700 mb-4">
          Buy 1 Coffee, Get 1 Free Croissant — this week only! <br />
          Loyalty members always get 10% off ☕✨
        </p>

        <button className="bg-[#8c5c3c] hover:bg-yellow-700 text-white px-6 py-2 rounded-full transition animate-pulse">
          Claim Now
        </button>
      </div>
    </div>
  );
};

export default SpecialOfferModal;
