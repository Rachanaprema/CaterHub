import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import axios from "axios";

const Payment = () => {
  const [booking, setBooking] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/booking/latest")
      .then((response) => {
        setBooking(response.data);
        calculatePrice(response.data);
      })
      .catch((error) => console.error("Error fetching booking details:", error));
  }, []);

  const calculatePrice = (data) => {
    let price = 0;
    const eventPrices = {
      "Small Event (Less than 50 guests)": 50000, "Medium Event (50-200 guests)": 200000, "Large Event (200-500 guests)": 450000,
      "Grand Event (500+ guests)": 700000, 
    };
    const servicePrices = {
      "Wedding Services": 10000, "Corporate Catering": 8000,
      "Cocktail Reception": 7000, "Bento Catering": 5000,
      "Home Delivery": 3000, "Sit-down Catering": 6000, "Buffet Catering": 9000,
    };
    const menuPrices = {
      "Vegetarian": 5000, "Non-Vegetarian": 7000, "Both Veg & Non-Veg": 10000,
      "Vegan": 6000, "Both Vegan & Non-Veg": 11000,
    };
    
    price += eventPrices[data.eventType] || 0;
    price += servicePrices[data.service] || 0;
    price += menuPrices[data.menuPreference] || 0;
    setTotalPrice(price);
  };

  const handlePayment = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/payment", {
        bookingId: booking.id, amount: totalPrice, paymentMethod,
      });

      if (response.data.success) {
        alert("Payment successful!");
        generateInvoice();
        navigate("/success");
      } else {
        alert("Payment failed. Try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text("CaterHub Booking Invoice", 20, 20);
    doc.text(`Name: ${booking.name}`, 20, 40);
    doc.text(`Event Type: ${booking.eventType}`, 20, 50);
    doc.text(`Service: ${booking.service}`, 20, 60);
    doc.text(`Menu Preference: ${booking.menuPreference}`, 20, 70);
    doc.text(`Total Amount: ₹${totalPrice}`, 20, 90);
    doc.text("Thank you for your payment!", 20, 110);
    doc.save("invoice.pdf");
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen w-full bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Centering Container */}
      <motion.div
        className="relative bg-white shadow-lg p-10 rounded-lg border border-[#C19A5B] mt-16 w-[90%] md:w-[60%] lg:w-[50%] text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Payment Details Button - Now at the Top */}
        <motion.button
          className="absolute top-[-80px] left-1/2 transform -translate-x-1/2 px-6 py-3 bg-[#C19A5B] text-white rounded-full shadow-lg font-semibold"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: [1, 1.1, 1], transition: { duration: 1.5, repeat: Infinity } }}
        >
          Payment Details
        </motion.button>
  
        {/* Booking Summary Card */}
        {booking ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h4 className="text-xl font-bold">Booking Summary</h4>
            <hr className="my-2" />
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Contact:</strong> {booking.contactNo}</p>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>Address:</strong> {booking.address}, {booking.city}, {booking.state}, {booking.country}</p>
            <p><strong>Event Type:</strong> {booking.eventType}</p>
            <p><strong>Service:</strong> {booking.service}</p>
            <p><strong>Menu Preference:</strong> {booking.menuPreference}</p>
            <p className="font-bold text-lg text-primary">
              <strong>Total Price: ₹{totalPrice}</strong>
            </p>
  
            <h4 className="font-bold mt-4">Select Payment Method</h4>
            <motion.select
              className="form-select mt-2 mb-4 p-2 border border-gray-300 rounded-lg w-full"
              onChange={(e) => setPaymentMethod(e.target.value)}
              whileFocus={{ scale: 1.02 }}
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
              <option value="Cash on Delivery">Cash on Delivery</option>
            </motion.select>
  
            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-3">
              <motion.button
                className="px-6 py-3 bg-[#C19A5B] text-white rounded-full font-semibold shadow-md"
                whileHover={{ scale: 1.1, backgroundColor: "#b48e5a" }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePayment}
              >
                Pay Now
              </motion.button>
  
              <motion.button
                className="px-6 py-3 bg-white text-[#C19A5B] border-2 border-[#C19A5B] rounded-full font-semibold shadow-md"
                whileHover={{ scale: 1.1, backgroundColor: "#f5f5f5" }}
                whileTap={{ scale: 0.95 }}
                onClick={generateInvoice}
              >
                Print Invoice
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.p
            className="text-gray-500 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          >
            Loading booking details...
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
  
};

export default Payment;
