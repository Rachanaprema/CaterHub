import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { motion } from "framer-motion";

const Booking = () => {
  const navigate = useNavigate(); // ✅ Navigation Hook

  const [formData, setFormData] = useState({
    country: "",
    state: "",
    city: "",
    eventType: "",
    service: "",
    menuPreference: "",
    date: "",
    name: "",
    contactNo: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Validate Contact Number (only digits allowed)
    if (name === "contactNo" && !/^\d*$/.test(value)) return;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // ✅ Email Validation (Regex Check)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // ✅ Name Validation (Only letters and spaces allowed)
    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      setError("Name should contain only letters.");
      setLoading(false);
      return;
    }

    // ✅ Format date to YYYY-MM-DD
    const formattedData = {
      ...formData,
      date: formData.date ? new Date(formData.date).toISOString().split("T")[0] : "",
    };

    try {
      const response = await axios.post("http://localhost:5000/api/booking", formattedData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        setSuccess("Your booking has been successfully submitted!");
        setFormData({
          country: "",
          state: "",
          city: "",
          eventType: "",
          service: "",
          menuPreference: "",
          date: "",
          name: "",
          contactNo: "",
          email: "",
          address: "",
        }); // ✅ Reset form after successful submission
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("There was an error submitting your booking. Please try again.");
    }

    setLoading(false);
  };

  // ✅ Dynamic Dropdown Values
  const stateOptions =
    formData.country === "India"
      ? ["Karnataka", "Hyderabad", "Tamilnadu"]
      : formData.country === "USA"
      ? ["New York", "California"]
      : [];

  const cityOptions =
    formData.state === "Karnataka"
      ? ["Bengaluru", "Mysore", "Mandya"]
      : formData.state === "Hyderabad"
      ? ["Hyderabad City"]
      : formData.state === "Tamilnadu"
      ? ["Chennai", "Coimbatore"]
      : formData.state === "New York"
      ? ["New York City"]
      : formData.state === "California"
      ? ["Los Angeles"]
      : [];

  // ✅ Navigate to Payment Page
  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#fffaf1] flex flex-col items-center">
      
      {/* 🔥 Header Section */}
      <motion.div 
        className="bg-[#FFF8F1] text-[#4a3e36] w-full flex flex-col items-center py-10 px-6 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 80 }}
      >
        <h2 className="text-4xl font-semibold text-[#C19A5B]">Booking</h2>
        <nav className="text-sm text-gray-500 mt-2">
          <Link to="/" className="hover:text-[#C19A5B]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/about" className="hover:text-[#C19A5B]">About</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/services" className="text-[#C19A5B] font-medium hover:underline">Services</Link>
        </nav>
  
        {/* ✅ Properly Centered Book Us Button */}
        <motion.button
          className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#C19A5B] text-white rounded-full shadow-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity } }}
        >
          Book Us
        </motion.button>
      </motion.div>
  
      {/* 🔥 Booking Form (Properly Centered) */}
      <motion.div 
        className="bg-white shadow-lg p-10 rounded-lg border border-[#C19A5B] mt-16 w-[90%] md:w-[60%] lg:w-[50%] text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl italic font-semibold text-black mb-6">Where you want Our Services</h2>
  
        {/* ✅ Success Message with Centering Fix */}
        {success && (
          <motion.div 
            className="text-green-500 mt-4 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {success}
          </motion.div>
        )}
  
        {/* ✅ Form with Improved Layout */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, ease: "easeOut" } }
          }}
        >
          {/* 🔥 Dropdown Fields with Proper Spacing */}
          {[ 
            { label: "Country", name: "country", options: ["India", "USA"] },
            { label: "State", name: "state", options: stateOptions },
            { label: "City", name: "city", options: cityOptions },
            { label: "Event Type", name: "eventType", options: ["Small Event (Less than 50 guests)", "Medium Event (50-200 guests)", "Large Event (200-500 guests)", "Grand Event (500+ guests)"] },
            { label: "Service Preferred", name: "service", options: ["Wedding Services", "Corporate Catering", "Cocktail Reception", "Bento Catering", "Home Delivery", "Sit-down Catering", "Buffet Catering"] },
            { label: "Menu Preference", name: "menuPreference", options: ["Vegetarian", "Non-Vegetarian", "Both Veg & Non-Veg", "Vegan", "Both Vegan & Non-Veg"] }
          ].map(({ label, name, options }, index) => (
            <motion.select 
              key={index} 
              name={name} 
              value={formData[name]} 
              onChange={handleChange}
              className="border p-3 rounded-md outline-none w-full text-gray-700 bg-white shadow-sm"
              required
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <option value="" disabled>{`Select ${label}`}</option>
              {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
            </motion.select>
          ))}
  
          {/* 🔥 Input Fields (Improved Layout) */}
          {[ 
            { type: "date", name: "date", required: true },
            { type: "text", name: "name", placeholder: "Your Name", required: true },
            { type: "text", name: "contactNo", placeholder: "Your Contact No.", required: true, maxLength: 10 },
            { type: "email", name: "email", placeholder: "Enter Your Email", required: true },
            { type: "text", name: "address", placeholder: "Enter Address", required: true }
          ].map(({ type, name, placeholder, required, maxLength }, index) => (
            <motion.input 
              key={index} 
              type={type} 
              name={name} 
              placeholder={placeholder} 
              value={formData[name]} 
              onChange={handleChange}
              className="border p-3 rounded-md outline-none w-full text-gray-700 bg-white shadow-sm"
              required={required} 
              maxLength={maxLength}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            />
          ))}
  
          {/* ✅ Centered Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full mt-6 space-y-4 md:space-y-0 md:space-x-4">
            <motion.button 
              type="submit" 
              className="px-6 py-2 bg-[#C19A5B] text-white rounded-lg font-semibold shadow-md w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
  
            <motion.button 
              type="button" 
              className="px-6 py-2 bg-[#C19A5B] text-white rounded-lg font-semibold shadow-md w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
  
};

export default Booking;
