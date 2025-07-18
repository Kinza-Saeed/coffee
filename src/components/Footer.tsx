import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#4b2e2e] text-white py-8"
 data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
            <span className="text-yellow-500">☕</span> Coffee
          </h2>
          <p className="text-gray-300 text-sm">
            Brewed to perfection — serving fresh, aromatic coffee every single day.
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-500">Our Story</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-lg text-yellow-500">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-300 text-sm mb-2">Join our coffee family for updates & offers</p>
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 rounded w-full text-black text-sm"
          />
          <button className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded text-sm">
            Subscribe
          </button>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs mt-10">
        © {new Date().getFullYear()} Coffee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
