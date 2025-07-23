import { motion } from "framer-motion"; 
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF9F1] px-10 py-4 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#C19A5B]">
        <Link to="/">Cater<span className="text-black">Hub</span></Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-lg font-medium text-black">
        <li><Link to="/" className="hover:text-[#C19A5B] cursor-pointer">Home</Link></li>
        <li><Link to="/about" className="hover:text-[#C19A5B] cursor-pointer">About</Link></li>
        <li><Link to="/services" className="hover:text-[#C19A5B] cursor-pointer">Services</Link></li>
        <li><Link to="/events" className="hover:text-[#C19A5B] cursor-pointer">Events</Link></li>
        <li><Link to="/menu" className="hover:text-[#C19A5B] cursor-pointer">Menu</Link></li>
        <li><Link to="/contact" className="hover:text-[#C19A5B] cursor-pointer">Contact</Link></li>
        <li><Link to="/booking" className="hover:text-[#C19A5B] cursor-pointer">Booking</Link></li>
      </ul>

      {/* Animated Login, Signup, and Logout Buttons */}
      <div className="hidden md:flex gap-4">
        <motion.button
          className="px-5 py-2 text-[#C19A5B] border border-[#C19A5B] rounded-full transition-all duration-300 hover:bg-[#C19A5B] hover:text-white shadow-md"
          whileHover={{ scale: 1.08 }}
        >
          <Link to="/login">Log in</Link>
        </motion.button>

        <motion.button
          className="px-5 py-2 text-[#C19A5B] border border-[#C19A5B] rounded-full transition-all duration-300 hover:bg-[#C19A5B] hover:text-white shadow-md"
          whileHover={{ scale: 1.08 }}
        >
          <Link to="/signup">Sign up</Link>
        </motion.button>

        <motion.button
          className="px-5 py-2 bg-[#C19A5B] text-white rounded-full transition-all duration-300 hover:bg-[#a87f4a] shadow-md"
          whileHover={{ scale: 1.08 }}
        >
          <Link to="/Logout">Log out</Link>
        </motion.button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="text-3xl">☰</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#FFF9F1] flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <li><Link to="/" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/events" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>Events</Link></li>
          <li><Link to="/menu" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link to="/contact" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/booking" className="hover:text-[#C19A5B]" onClick={() => setIsOpen(false)}>Booking</Link></li>

          {/* Animated Mobile Buttons */}
          <motion.button
            className="px-5 py-2 text-[#C19A5B] border border-[#C19A5B] rounded-full transition-all duration-300 hover:bg-[#C19A5B] hover:text-white shadow-md"
            whileHover={{ scale: 1.08 }}
          >
            <Link to="/login" onClick={() => setIsOpen(false)}>Log in</Link>
          </motion.button>

          <motion.button
            className="px-5 py-2 text-[#C19A5B] border border-[#C19A5B] rounded-full transition-all duration-300 hover:bg-[#C19A5B] hover:text-white shadow-md"
            whileHover={{ scale: 1.08 }}
          >
            <Link to="/signup" onClick={() => setIsOpen(false)}>Sign up</Link>
          </motion.button>

          <motion.button
            className="px-5 py-2 bg-[#C19A5B] text-white rounded-full transition-all duration-300 hover:bg-[#a87f4a] shadow-md"
            whileHover={{ scale: 1.08 }}
          >
            <Link to="/Logout" onClick={() => setIsOpen(false)}>Log out</Link>
          </motion.button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
