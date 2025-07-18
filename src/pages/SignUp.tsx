import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import coffeeAnimation from "../assets/Coffee-Barista.json";
import backgroundImage from "../assets/mocha.jpeg";

const Signup = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#f3ece6]/30 backdrop-blur-sm z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center bg-white/90 rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full backdrop-blur-md">
        {/* Left Lottie Animation */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center p-8 bg-[#f9f5f1]">
          <Player
            autoplay
            loop
            src={coffeeAnimation}
            style={{ height: "320px", width: "320px" }}
          />
        </div>

        {/* Right Signup Form */}
        <div className="w-full md:w-1/2 p-10">
          <div className="flex flex-col items-center mb-6">
            <FaCoffee className="text-5xl text-[#6b4226] mb-2" />
            <h2 className="text-3xl font-bold text-[#4b2e2e]">Create Account</h2>
            <p className="text-[#7c5b45] text-sm mt-1">Join the coffee lovers community ☕</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-[#5a3e2b] font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-[#c8b5a0] rounded-lg bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#b08b68]"
              />
            </div>
            <div>
              <label className="block text-[#5a3e2b] font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="coffee@love.com"
                className="w-full px-4 py-2 border border-[#c8b5a0] rounded-lg bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#b08b68]"
              />
            </div>
            <div>
              <label className="block text-[#5a3e2b] font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-[#c8b5a0] rounded-lg bg-[#fcf9f6] focus:outline-none focus:ring-2 focus:ring-[#b08b68]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#8c5c3c] text-white py-2 rounded-lg hover:bg-[#724831] transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-sm text-center mt-4 text-[#5a3e2b]">
            Already have an account?
            <Link to="/login" className="text-[#a76c45] hover:underline ml-1">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
