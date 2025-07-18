import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const drinks = [
  {
    title: 'Espresso Delight',
    description: 'Strong, bold, and energizing. Perfect for the coffee lover.',
    image: "src/assets/coffee1.jpeg",
  },
  {
    title: 'Latte Love',
    description: 'Smooth and creamy with a hint of vanilla.',
    image: "src/assets/coffee2.jpeg",
  },
  {
    title: 'Mocha Magic',
    description: 'Coffee and chocolate blended to perfection.',
    image: "src/assets/coffee3.jpeg",
  },
  {
    title: 'Caramel Dream',
    description: 'Rich caramel flavor with a hint of cinnamon.',
    image: "src/assets/coffee4.jpeg",
  },
];

const FeaturedDrinks = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="relative mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4b2e2e]" data-aos="fade-up">
            Featured Drinks
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
            Taste the best from our handcrafted selection of premium beverages.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={drink.image} alt={drink.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="font-semibold text-lg text-[#4b2e2e]">{drink.title}</h4>
              <p className="text-sm text-gray-600 mt-2 mb-4">{drink.description}</p>
              <button className="bg-[#8c5c3c] hover:bg-yellow-600 w-full text-white py-2 rounded-sm text-sm">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
