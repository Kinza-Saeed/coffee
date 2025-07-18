// src/components/ExtrasSection.tsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

import espressoImg from "../assets/espresso.jpeg";
import latteImg from "../assets/latte.jpeg";
import cappuccinoImg from "../assets/cappuccino.jpeg";
import mochaImg from "../assets/mocha.jpeg";
import coffeeTeam1 from "../assets/team1.jpeg";
import coffeeTeam2 from "../assets/team2.jpeg";
import coffeeTeam3 from "../assets/team3.jpeg";
import coffeeGallery1 from "../assets/gallery1.jpeg";
import coffeeGallery2 from "../assets/gallery2.jpeg";
import coffeeGallery3 from "../assets/gallery3.jpeg";
import coffeeGallery4 from "../assets/gallery4.jpeg";

const menuItems = [
  { img: espressoImg, title: "Espresso", desc: "Bold and strong, a true coffee lover’s shot." },
  { img: latteImg, title: "Latte", desc: "Smooth espresso with steamed milk and foam." },
  { img: cappuccinoImg, title: "Cappuccino", desc: "Rich espresso topped with fluffy milk foam." },
  { img: mochaImg, title: "Mocha", desc: "A delicious blend of chocolate and espresso." },
];

const ExtrasSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#f9f4ef] text-[#4b2e2e] space-y-24 px-6 py-20">
      {/* Featured Coffee Section */}
      <section data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Best Coffee in Pakistan</h2>
          <p className="text-gray-600 mb-10">Crafted for every coffee lover with love and the finest ingredients.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-2 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img src={item.img} alt={item.title} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <button className="w-full bg-[#8c5c3c] hover:bg-yellow-600 text-white py-2 rounded-full transition">
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="py-20 px-6 bg-[#fef7f2]" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-[#4b2e2e] mb-10">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Freshly Roasted Beans",
            icon: "🌱",
            desc: "We source the finest beans and roast them fresh to deliver perfect taste and aroma.",
          },
          {
            title: "Expert Baristas",
            icon: "👨‍🍳",
            desc: "Our baristas are trained professionals passionate about making the best coffee possible.",
          },
          {
            title: "Cozy Ambience",
            icon: "🏡",
            desc: "Enjoy your drink in a warm and inviting space that feels just like home.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 text-center"
            data-aos="zoom-in"
            data-aos-delay={`${idx * 150}`}
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#4b2e2e] mb-2">
              {feature.title}
            </h3>
            <p className="text-[#6d4c41] text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>


      {/* Join Our Club */}
      <section
        className="bg-gradient-to-br from-[#fcefe3] to-[#f8dcc9] py-20 rounded-2xl shadow-lg"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ☕ Join Our Coffee Club & Get <span className="text-yellow-600">20% Off</span>
          </h2>
          <p className="text-[#6d4c41] mb-8 text-lg">
            Sign up for exclusive offers, rewards, and secret brews. 📬
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-yellow-600 text-[#4b2e2e] placeholder:text-[#a77e65] focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-[#8c5c3c] hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full transition shadow-lg"
            >
              Join Now 🚀
            </button>
          </form>
          <p className="text-sm text-[#8c5c3c] mt-4 italic">
            🍩 Bonus: Free donut with your first order!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-10">Meet Our Team 👨‍👩‍🍳</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[coffeeTeam1, coffeeTeam2, coffeeTeam3].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              data-aos="flip-left"
              data-aos-delay={i * 150}
            >
              <img src={img} alt={`Team ${i + 1}`} className="w-full h-72 object-cover" />
              <div className="bg-[#f8f3ef] p-4 text-center">
                <h3 className="text-xl font-bold">Barista {i + 1}</h3>
                <p className="text-sm text-[#6d4c41]">Coffee Specialist</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-10">Coffee Gallery 📸</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[coffeeGallery1, coffeeGallery2, coffeeGallery3, coffeeGallery4].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>
      {/* Fun Coffee Stats */}
<div className="mt-20 bg-[#fef7f0] py-16 px-6 rounded-2xl shadow-md" data-aos="fade-up">
  <h2 className="text-4xl font-bold text-center mb-10 text-[#4b2e2e]">Our Coffee Stats</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {[
      { label: "Cups Served Daily", end: 500 },
      { label: "Happy Customers", end: 1200 },
      { label: "Espresso Shots Pulled", end: 850 },
      { label: "Loyalty Members", end: 300 },
    ].map((stat, index) => (
      <div
        key={index}
        className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
        data-aos="zoom-in"
        data-aos-delay={index * 100}
      >
        <h3 className="text-5xl font-bold text-[#8c5c3c] mb-2">
          <CountUp end={stat.end} duration={2} enableScrollSpy />
          <span className="text-2xl">+</span>
        </h3>
        <p className="text-[#6d4c41] text-sm font-semibold">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default ExtrasSection;
