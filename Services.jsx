import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    title: "Wedding Services",
    description:
      "Wedding services go beyond arrangements - they create unforgettable experiences.",
    icon: "🎂",
  },
  {
    title: "Corporate Catering",
    description:
      "Corporate catering is more than just serving food - it's about creating a seamless dining experience.",
    icon: "🍕",
  },
  {
    title: "Cocktail Reception",
    description:
      "A cocktail reception is more than just drinks - it's about crafting a stylish and memorable experience.",
    icon: "🌭",
  },
  {
    title: "Bento Catering",
    description:
      "Bento catering is more than just a meal - it's a perfect blend of convenience, flavor, and presentation.",
    icon: "🍔",
  },
  {
    title: "Pub Party",
    description:
      "A pub party is more than just drinks - it's about great vibes, good company, and unforgettable moments.",
    icon: "🍷",
  },
  {
    title: "Home Delivery",
    description:
      "Home delivery is more than just convenience - it's about enjoying delicious meals right at your doorstep.",
    icon: "🚶",
  },
  {
    title: "Sit-down Catering",
    description:
      "Sit-down catering is more than just a meal - it's a curated dining experience with elegance and hospitality.",
    icon: "♿",
  },
  {
    title: "Buffet Catering",
    description:
      "Buffet catering is more than just variety - it's about offering a feast that brings people together.",
    icon: "🍽️",
  },
];

const Services = () => {
  return (
    <motion.div
      className="bg-[#FFF8F1] text-[#4a3e36] min-h-screen py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Breadcrumb */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-[#C19A5B]">Services</h2>
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-[#C19A5B]">Home</Link> /
          <Link to="/about" className="hover:text-[#C19A5B]">About</Link> /
          <Link to="/booking" className="text-[#C19A5B] font-medium hover:underline">Booking</Link>
        </nav>
      </motion.div>
      
      {/* Section Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-[#C19A5B] text-white px-4 py-1 rounded-full text-sm">
          OUR SERVICES
        </span>
        <h3 className="text-3xl italic font-bold mt-3 text-[#3C2A1E]">
          What We Offer
        </h3>
      </motion.div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="text-4xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {service.icon}
            </motion.div>
            <h4 className="text-lg font-semibold mt-3 text-[#3C2A1E]">
              {service.title}
            </h4>
            <p className="text-sm text-gray-600 mt-2">{service.description}</p>
            <Link to="/about">
              <motion.button
                className="mt-4 px-4 py-2 rounded-full border border-[#C19A5B] text-[#C19A5B] hover:bg-[#C19A5B] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.08 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
