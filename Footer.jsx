import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion"; // For animations
import food1 from "../assets/img/food1.jpg";
import food2 from "../assets/img/food2.jpg";
import food3 from "../assets/img/food3.jpg";
import food4 from "../assets/img/food4.jpg";
import food5 from "../assets/img/food5.jpg";
import food6 from "../assets/img/food6.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#FEF9F4] py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#C99F63] italic">Cater<span className="text-black">Hub</span></h2>
            <p className="mt-4 text-gray-600">Bringing Exquisite Flavors and Seamless Catering to Your Special Moments.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </motion.div>

          {/* Special Facilities */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Special Facilities</h3>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Cheese Burger</li>
              <li>✔ Sandwich</li>
              <li>✔ Paneer Burger</li>
              <li>✔ Special Sweets</li>
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-600 space-y-2">
              <li><FaMapMarkerAlt className="inline-block text-[#C99F63]" /> Bengaluru, Karnataka, India</li>
              <li><FaPhoneAlt className="inline-block text-[#C99F63]" /> +91-9876543210</li>
              <li><FaEnvelope className="inline-block text-[#C99F63]" /> info@example.com</li>
              <li><FaClock className="inline-block text-[#C99F63]" /> 24/7 Hours Service</li>
            </ul>
          </motion.div>

          {/* Social Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold mb-4">Social Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[food1, food2, food3, food4, food5, food6].map((img, index) => (
                <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-20 h-20 rounded-full border-2 border-[#C99F63] hover:scale-105 transition-all" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-5 right-5 bg-[#C99F63] text-white p-3 rounded-full shadow-lg"
      >
        ⬆
      </motion.button>
    </footer>
  );
};

export default Footer;
