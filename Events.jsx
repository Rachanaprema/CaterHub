import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import event images
import event1 from "../assets/img/event1.jpg";
import event2 from "../assets/img/event2.jpg";
import event3 from "../assets/img/event3.jpg";
import event4 from "../assets/img/event4.jpg";
import event5 from "../assets/img/event5.jpg";
import event6 from "../assets/img/event6.jpg";
import event7 from "../assets/img/event7.jpg";
import event8 from "../assets/img/event8.jpg";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All Events");

  // Event categories
  const categories = ["All Events", "Wedding", "Corporate", "Cocktail", "Buffet"];

  // Image gallery
  const eventImages = [
    { src: event1, category: "Wedding" },
    { src: event2, category: "Wedding" },
    { src: event3, category: "Corporate" },
    { src: event4, category: "Corporate" },
    { src: event5, category: "Cocktail" },
    { src: event6, category: "Cocktail" },
    { src: event7, category: "Buffet" },
    { src: event8, category: "Buffet" },
  ];

  // Filtered images based on selected category
  const filteredImages =
    activeCategory === "All Events"
      ? eventImages
      : eventImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-[#FFF8F1] text-[#4a3e36] min-h-screen flex flex-col items-center py-10 px-6">
      {/* Page Header with Breadcrumb Navigation */}
      <motion.div 
  className="text-center py-12"
  initial={{ opacity: 0, y: -50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl font-semibold text-[#C19A5B]">Events</h2>
  <nav className="text-sm text-gray-500 mt-2">
    <Link to="/" className="hover:text-[#C19A5B]">Home</Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/about" className="hover:text-[#C19A5B]">About</Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/booking" className="text-[#C19A5B] font-medium hover:underline">Booking</Link>
  </nav>
</motion.div>

      {/* Latest Events Badge */}
      <motion.div 
        className="px-4 py-1 bg-[#C19A5B] text-white text-xs uppercase tracking-wide rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        Latest Events
      </motion.div>

      {/* Expressive Paragraph */}
      <motion.p 
        className="text-center text-xl font-medium text-gray-700 italic mt-4 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        Discover the essence of extraordinary gatherings in our curated event gallery. From grand weddings to sophisticated corporate dinners, each event is a masterpiece of taste and elegance. Let’s relive the moments that made these occasions truly special.
      </motion.p>

      {/* Category Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 border rounded-full text-lg font-medium transition-all ${
              activeCategory === category
                ? "bg-[#C19A5B] text-white"
                : "border-[#C19A5B] text-[#C19A5B] hover:bg-[#C19A5B] hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Event Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredImages.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img.src}
              alt={`Event ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
