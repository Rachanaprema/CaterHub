import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import hero1 from "../assets/img/hero1.jpg";
import hero2 from "../assets/img/hero2.jpg";
import hero3 from "../assets/img/hero3.jpg";
import hero4 from "../assets/img/hero4.jpg";

const HeroSection = () => {
  // Floating Animation for Images with different delays
  const floatAnimation = (delay) => ({
    opacity: 1,
    scale: 1,
    y: [0, -10, 0], // Moves up & down
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay }
  });

  // Letter-by-Letter Animation for Heading
  const textVariants = {
    hidden: { opacity: 0, y: 20 }, // Starts faded & lower
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 }
    })
  };

  // State for Typewriter Effect
  const fullText = "Book CaterHub to Turn Your Dream Event into a Feast!";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-[#FFF9F1] flex flex-col md:flex-row items-center justify-between px-10 py-16">
      {/* Left Side */}
      <div className="max-w-lg text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 px-4 py-2 bg-[#FCE8C2] inline-block rounded-full text-sm font-semibold"
        >
          WELCOME TO CATERHUB
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="text-5xl font-bold leading-tight"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {displayText.split("").map((char, index) => (
            <motion.span key={index} custom={index} variants={textVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Buttons with Navigation */}
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <motion.button
            className="px-5 py-2 text-[#C19A5B] border border-[#C19A5B] rounded-full transition-all duration-300 hover:bg-[#C19A5B] hover:text-white shadow-md"
            whileHover={{ scale: 1.08 }}
          >
            <Link to="/booking">Book Now</Link>
          </motion.button>

          <motion.button
            className="px-5 py-2 bg-[#C19A5B] text-white rounded-full transition-all duration-300 hover:bg-[#a87f4a] shadow-md"
            whileHover={{ scale: 1.08 }}
          >
            <Link to="/about">Know More</Link>
          </motion.button>
        </div>
      </div>

      {/* Right Side: Animated Image Grid */}
      <div className="grid grid-cols-2 gap-6 mt-10 md:mt-0">
        {[hero1, hero2, hero3, hero4].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Food ${index}`}
            className="w-40 h-40 object-cover rounded-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={floatAnimation(index * 0.5)} // Different delay for each image
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }} // Zoom on Hover
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
