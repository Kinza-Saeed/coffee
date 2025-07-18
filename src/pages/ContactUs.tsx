import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import bgImage from "../assets/mocha.jpeg"; // same image as login
import { Player } from "@lottiefiles/react-lottie-player";
import contactCoffee from "../assets/Coffee-Barista.json"; // coffee animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="min-h-screen bg-[#f9f1e7]/30">
        <Navbar />

        <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4 py-16">
          <div
            className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-10 flex flex-col lg:flex-row items-center gap-10 max-w-4xl w-full"
            data-aos="fade-up"
          >
            {/* Animation inside card */}
            <div className="w-full lg:w-1/2">
              <Player
                autoplay
                loop
                src={contactCoffee}
                style={{ height: "300px", width: "100%" }}
              />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6 text-center">
                Let's Talk ☕
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-[#4b2e2e] mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-[#4b2e2e] mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-[#4b2e2e] mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <button
                  type="submit"
 className="w-full bg-[#8c5c3c] text-white py-2 rounded-lg hover:bg-[#724831] transition"                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" bg-[#f9f1e7]/30">
        <Footer />
        </div>
    </div>
    
  );
};

export default ContactUs;
