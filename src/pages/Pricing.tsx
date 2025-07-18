import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImage from "../assets/mocha.jpeg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[#f3ece6]/50 backdrop-blur-sm min-h-screen">
        <Navbar />

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e2e] mb-4">Our Pricing Plans</h1>
            <p className="text-lg text-[#5a3e2b]">Choose the perfect plan for your coffee journey ☕</p>
          </div>

          {/* Pricing Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="zoom-in-up">
            {[
              {
                title: "Basic",
                price: "$9",
                desc: "For solo coffee lovers",
                features: ["1 Free Brew", "Access to Weekly Deals", "Limited Support"],
              },
              {
                title: "Pro",
                price: "$19",
                desc: "Perfect for daily drinkers",
                features: ["5 Free Brews", "Exclusive Offers", "Priority Support", "Coffee Recipes"],
              },
              {
                title: "Premium",
                price: "$29",
                desc: "Best for cafés & teams",
                features: ["Unlimited Brews", "Barista Training Access", "24/7 Support", "Free Merch"],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition"
              >
                <h2 className="text-2xl font-bold text-[#4b2e2e]">{plan.title}</h2>
                <p className="text-[#8c5c3c] mt-1">{plan.desc}</p>
                <div className="text-4xl text-[#4b2e2e] font-extrabold mt-4">{plan.price}<span className="text-lg font-normal">/mo</span></div>
                <ul className="text-left mt-6 space-y-2 text-[#5a3e2b]">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="mt-6 bg-[#8c5c3c] text-white px-6 py-2 rounded-full hover:bg-[#724831] transition">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20" data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-center text-[#4b2e2e] mb-6">Compare Features</h2>
            <div className="overflow-auto">
              <table className="w-full bg-white/90 text-left text-[#4b2e2e] rounded-xl shadow-md">
                <thead>
                  <tr className="bg-[#f5eae0] text-[#4b2e2e]">
                    <th className="py-3 px-6">Feature</th>
                    <th className="py-3 px-6">Basic</th>
                    <th className="py-3 px-6">Pro</th>
                    <th className="py-3 px-6">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Free Brews", "1", "5", "Unlimited"],
                    ["Weekly Deals", "✓", "✓", "✓"],
                    ["Coffee Recipes", "-", "✓", "✓"],
                    ["Priority Support", "-", "✓", "✓"],
                    ["Merch Discounts", "-", "-", "✓"],
                    ["Barista Access", "-", "-", "✓"],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={`${i % 2 === 0 ? "bg-[#fcf9f6]" : "bg-[#f9f5f1]"}`}
                    >
                      {row.map((col, j) => (
                        <td key={j} className="py-3 px-6">
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
