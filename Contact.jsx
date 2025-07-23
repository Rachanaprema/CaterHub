import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!formData.name.trim()) {
      setStatus("Name is required!");
      return;
    }
  
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("Enter a valid email address!");
      return;
    }
  
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus("Message must be at least 10 characters long!");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setStatus(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error submitting form. Try again later.");
    }
  };
  

  return (
    <div className="bg-[#FFF8F1] text-[#4a3e36] min-h-screen flex flex-col items-center py-10">

      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-[#C19A5B]">Contact</h2>
        <nav className="text-sm text-gray-500 mt-2">
    <Link to="/" className="hover:text-[#C19A5B]">Home</Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/about" className="hover:text-[#C19A5B]">About</Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/booking" className="text-[#C19A5B] font-medium hover:underline">Booking</Link>
  </nav>
</motion.div>

      <motion.div
        className="bg-white shadow-lg rounded-xl p-10 mt-8 w-[85%] max-w-5xl flex flex-col lg:flex-row border border-[#C19A5B]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex-1 pr-6">
          <button className="px-4 py-1 border border-[#C19A5B] text-[#C19A5B] rounded-full text-sm font-semibold">
            GET IN TOUCH
          </button>
          <h2 className="text-3xl font-semibold mt-4 italic text-[#3C2A1E]">
            Contact Us For Any Queries!
          </h2>
          <p className="text-[#555] text-sm mt-2">
            Enter your details below and we'll get back to you soon.
          </p>

          {status && <p className="text-green-600 mt-2">{status}</p>}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#C19A5B] bg-transparent rounded-md focus:outline-none focus:border-[#3C2A1E]"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#C19A5B] bg-transparent rounded-md focus:outline-none focus:border-[#3C2A1E]"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#C19A5B] bg-transparent rounded-md focus:outline-none focus:border-[#3C2A1E]"
              rows="4"
              required
              whileFocus={{ scale: 1.05 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="w-full bg-[#C19A5B] text-white py-3 rounded-md hover:bg-[#3C2A1E] transition"
              whileHover={{ scale: 1.05 }}
            >
              Submit Now
            </motion.button>
          </form>
        </div>

        <div className="flex-1 mt-6 lg:mt-0 space-y-4">
          <div className="p-4 border border-[#C19A5B] bg-[#FFF8F1] rounded-md flex items-center space-x-4">
            <span className="text-[#C19A5B] text-xl">📍</span>
            <div>
              <h3 className="text-lg font-semibold text-[#3C2A1E]">Address</h3>
              <p className="text-[#555]">Bengaluru, Karnataka, India</p>
            </div>
          </div>
          <div className="p-4 border border-[#C19A5B] bg-[#FFF8F1] rounded-md flex items-center space-x-4">
            <span className="text-[#C19A5B] text-xl">📧</span>
            <div>
              <h3 className="text-lg font-semibold text-[#3C2A1E]">Mail Us</h3>
              <p className="text-[#555]">info@example.com</p>
            </div>
          </div>
          <div className="p-4 border border-[#C19A5B] bg-[#FFF8F1] rounded-md flex items-center space-x-4">
            <span className="text-[#C19A5B] text-xl">📞</span>
            <div>
              <h3 className="text-lg font-semibold text-[#3C2A1E]">Telephone</h3>
              <p className="text-[#555]">+91-9876543210</p>
            </div>
          </div>
          <div className="p-4 border border-[#C19A5B] bg-[#FFF8F1] rounded-md">
            <h3 className="text-lg font-semibold text-[#3C2A1E]">Location</h3>
            <iframe
              className="w-full h-64 rounded-md mt-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31103.08635784011!2d77.56751589999999!3d12.9715986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167b0a60a9cd%3A0xe62f1925c5ff4d37!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1708252921449!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
