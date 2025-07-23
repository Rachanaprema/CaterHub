import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import thankYouImage from "../assets/img/thankyou.jpg"; // Ensure this image exists

const Success = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Image with Floating Effect */}
      <motion.img
        src={thankYouImage}
        alt="Thank You"
        className="w-[300px] md:w-[400px] lg:w-[500px] mb-6 drop-shadow-lg"
        initial={{ scale: 0.5, opacity: 0, y: -50, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        whileTap={{ scale: 0.95 }}
        whileInView={{ y: [0, -5, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
      />

      {/* Animated Heading with Bounce Effect */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-[#C19A5B] text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        🎉 Thank You for Your Trust!
      </motion.h1>

      {/* Animated Subtext with Fade-in Effect */}
      <motion.p
        className="text-gray-700 mt-2 text-center max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        ✅ Your payment was successful! We truly appreciate your trust in us and can't wait to serve you again.  
      </motion.p>

      {/* Animated Button with Pulse Effect */}
      <Link to="/">
        <motion.button
          className="mt-6 px-6 py-3 bg-[#C19A5B] text-white font-semibold rounded-full shadow-md"
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(193,154,91,0.6)" }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.05, 1], transition: { duration: 1.5, repeat: Infinity } }}
        >
          Back to Home
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Success;
