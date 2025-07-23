import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Ensure Link is used for navigation
import aboutImage from "../assets/img/about-image.jpg";
import chef1 from "../assets/img/chef1.jpg"; 
import chef2 from "../assets/img/chef2.jpg";
import chef3 from "../assets/img/chef3.jpg";
import chef4 from "../assets/img/chef4.jpg";
import ourStoryVideo from "../assets/img/caterhub-vedio.mp4"; // Video import

const About = () => {
  const [customers, setCustomers] = useState(0);
  const [chefs, setChefs] = useState(0);
  const [events, setEvents] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCustomers((prev) => (prev < 689 ? prev + 1 : 689));
    }, 10);
    const interval2 = setInterval(() => {
      setChefs((prev) => (prev < 107 ? prev + 1 : 107));
    }, 20);
    const interval3 = setInterval(() => {
      setEvents((prev) => (prev < 253 ? prev + 1 : 253));
    }, 15);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="bg-[#FFF8F1] text-[#4a3e36]">
      {/* Breadcrumb Section (Fixed Colors) */}
<motion.div 
  className="text-center py-12"
  initial={{ opacity: 0, y: -50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl font-semibold text-[#C19A5B]">About Us</h2>
  <nav className="text-sm text-gray-500 mt-2">
    <Link to="/" className="hover:text-[#C19A5B]">Home</Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/about" className="hover:text-[#C19A5B]">About</Link>
    <span className="mx-2 text-gray-400">/</span>
    <Link to="/booking" className="text-[#C19A5B] font-medium hover:underline">Booking</Link>
  </nav>
</motion.div>


      {/* Welcome Message Section */}
      <motion.div 
        className="container mx-auto px-6 lg:px-20 text-center mt-6"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
      >
        <p className="text-lg text-[#4a3e36] leading-relaxed px-4 md:px-20">
          Welcome to <span className="text-[#C19A5B] font-semibold">CaterHub</span>, where exquisite flavors meet exceptional service! We are a passionate team of culinary experts dedicated to crafting unforgettable dining experiences.
        </p>
      </motion.div>

      {/* Trusted By Clients */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 mt-10">
        {/* Left: Image */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
        >
          <img src={aboutImage} alt="Catering Service" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Right: Text */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
        >
          <span className="bg-[#C19A5B] text-white px-3 py-1 rounded-full text-sm">
            Since 2020
          </span>
          <h3 className="text-3xl font-semibold mt-4">
            Trusted By 200+ Satisfied Clients
          </h3>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✔️ Fine and Fresh Cuisine</li>
            <li>✔️ Easy Customization Options</li>
            <li>✔️ 24/7 Customer Support</li>
            <li>✔️ Delicious Dishes for Special Moments</li>
          </ul>
          <button className="mt-6 bg-[#C19A5B] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#A87D3B] transition">
            About Us
          </button>
        </motion.div>
      </div>

      {/* Our Story Video Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-semibold mb-6 text-[#C19A5B]">Our Story to Discovery</h2>
        <div className="container mx-auto px-6">
          <motion.div 
            className="video-container relative"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <video className="w-full h-[500px] object-cover rounded-lg shadow-lg" controls>
              <source src={ourStoryVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-[#FFF8F1] text-center">
        <h3 className="text-xl font-semibold bg-[#C19A5B] px-4 py-1 rounded-full inline-block text-white">
          OUR TEAM
        </h3>
        <h2 className="text-3xl font-semibold italic mt-4 text-[#4a3e36]">
          We have experienced chef Team
        </h2>

        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 mt-8">
          {[
            { name: "Vinay Krishna", role: "Head Chef", img: chef1 },
            { name: "Divya Reddy", role: "Executive Chef", img: chef2 },
            { name: "Kavya Shankar", role: "Kitchen Porter", img: chef3 },
            { name: "Rachana Rajendra", role: "Decoration Chef", img: chef4 },
          ].map((chef, index) => (
            <motion.div 
              key={index} 
              className="w-60 bg-[#4a3e36] text-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-64 flex justify-center items-center bg-[#FFF8F1]">
                <img src={chef.img} alt={chef.name} className="w-full h-full object-contain rounded-t-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{chef.name}</h3>
                <p className="text-sm text-gray-300">{chef.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
