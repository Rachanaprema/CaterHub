import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import paneerImg from "../assets/img/paneer.jpg";
import tikkiImg from "../assets/img/tikki.jpg";
import baconImg from "../assets/img/bacon.jpg";
import bloomingImg from "../assets/img/blooming.jpg";
import springRollsImg from "../assets/img/spring_rolls.jpg";
import bruschettaImg from "../assets/img/bruschetta.jpg";
import cheeseBallsImg from "../assets/img/cheese_balls.jpg";
import stuffedMushroomsImg from "../assets/img/stuffed_mushrooms.jpg";

import sweetPotatoImg from "../assets/img/sweet_potato.jpg";
import pizzaImg from "../assets/img/pizza.jpg";
import chickenImg from "../assets/img/chicken.jpg";
import sweetImg from "../assets/img/sweet.jpg";
import pastaImg from "../assets/img/pasta.jpg";
import steakImg from "../assets/img/steak.jpg";
import risottoImg from "../assets/img/risotto.jpg";
import grilledFishImg from "../assets/img/grilled_fish.jpg";

import mojitoImg from "../assets/img/mojito.jpg";
import coldCoffeeImg from "../assets/img/cold_coffee.jpg";
import lemonadeImg from "../assets/img/lemonade.jpg";
import strawberryShakeImg from "../assets/img/strawberry_shake.jpg";
import orangeJuiceImg from "../assets/img/orange_juice.jpg";
import greenTeaImg from "../assets/img/green_tea.jpg";
import pineapplePunchImg from "../assets/img/pineapple_punch.jpg";
import icedTeaImg from "../assets/img/iced_tea.jpg";

import burgerComboImg from "../assets/img/burger_combo.jpg";
import pizzaCokeImg from "../assets/img/pizza_coke.jpg";
import familyMealImg from "../assets/img/family_meal.jpg";
import pastaDelightImg from "../assets/img/pasta_delight.jpg";
import sushiPlatterImg from "../assets/img/sushi_platter.jpg";
import biryaniSpecialImg from "../assets/img/biryani_special.jpg";
import seafoodFiestaImg from "../assets/img/seafood_fiesta.jpg";
import dessertPackImg from "../assets/img/dessert_pack.jpg";

import lobsterThermidorImg from "../assets/img/lobster_thermidor.jpg";
import trufflePastaImg from "../assets/img/truffle_pasta.jpg";
import wagyuBeefImg from "../assets/img/wagyu_beef.jpg";
import caviarDelightImg from "../assets/img/caviar_delight.jpg";
import tandooriPlatterImg from "../assets/img/tandoori_platter.jpg";
import exoticSushiImg from "../assets/img/exotic_sushi.jpg";
import duckConfitImg from "../assets/img/duck_confit.jpg";
import chocolateSouffleImg from "../assets/img/chocolate_souffle.jpg";

const menuItems = [
  // 🔸 STARTER
  { id: 1, name: "Paneer", category: "Starter", price: 90, image: paneerImg },
  { id: 2, name: "Sabudana Tikki", category: "Starter", price: 85, image: tikkiImg },
  { id: 3, name: "Bacon", category: "Starter", price: 100, image: baconImg },
  { id: 4, name: "Blooming", category: "Starter", price: 95, image: bloomingImg },
  { id: 5, name: "Spring Rolls", category: "Starter", price: 80, image: springRollsImg },
  { id: 6, name: "Bruschetta", category: "Starter", price: 75, image: bruschettaImg },
  { id: 7, name: "Cheese Balls", category: "Starter", price: 85, image: cheeseBallsImg },
  { id: 8, name: "Stuffed Mushrooms", category: "Starter", price: 90, image: stuffedMushroomsImg },

  // 🔸 MAIN COURSE
  { id: 9, name: "Sweet Potato", category: "Main Course", price: 90, image: sweetPotatoImg },
  { id: 10, name: "Pizza", category: "Main Course", price: 110, image: pizzaImg },
  { id: 11, name: "Chicken", category: "Main Course", price: 120, image: chickenImg },
  { id: 12, name: "Sweet", category: "Main Course", price: 100, image: sweetImg },
  { id: 13, name: "Pasta", category: "Main Course", price: 95, image: pastaImg },
  { id: 14, name: "Steak", category: "Main Course", price: 150, image: steakImg },
  { id: 15, name: "Risotto", category: "Main Course", price: 130, image: risottoImg },
  { id: 16, name: "Grilled Fish", category: "Main Course", price: 140, image: grilledFishImg },

  // 🔸 DRINKS
  { id: 17, name: "Mojito", category: "Drinks", price: 50, image: mojitoImg },
  { id: 18, name: "Cold Coffee", category: "Drinks", price: 60, image: coldCoffeeImg },
  { id: 19, name: "Lemonade", category: "Drinks", price: 40, image: lemonadeImg },
  { id: 20, name: "Strawberry Shake", category: "Drinks", price: 70, image: strawberryShakeImg },
  { id: 21, name: "Orange Juice", category: "Drinks", price: 45, image: orangeJuiceImg },
  { id: 22, name: "Green Tea", category: "Drinks", price: 35, image: greenTeaImg },
  { id: 23, name: "Pineapple Punch", category: "Drinks", price: 55, image: pineapplePunchImg },
  { id: 24, name: "Iced Tea", category: "Drinks", price: 50, image: icedTeaImg },

  // 🔸 OFFERS
  { id: 25, name: "Burger Combo", category: "Offers", price: 150, image: burgerComboImg },
  { id: 26, name: "Pizza & Coke", category: "Offers", price: 200, image: pizzaCokeImg },
  { id: 27, name: "Family Meal", category: "Offers", price: 500, image: familyMealImg },
  { id: 28, name: "Pasta Delight", category: "Offers", price: 180, image: pastaDelightImg },
  { id: 29, name: "Sushi Platter", category: "Offers", price: 220, image: sushiPlatterImg },
  { id: 30, name: "Biryani Special", category: "Offers", price: 250, image: biryaniSpecialImg },
  { id: 31, name: "Seafood Fiesta", category: "Offers", price: 350, image: seafoodFiestaImg },
  { id: 32, name: "Dessert Pack", category: "Offers", price: 100, image: dessertPackImg },

  // 🔸 OUR SPECIALS
  { id: 33, name: "Lobster Thermidor", category: "Our Special", price: 400, image: lobsterThermidorImg },
  { id: 34, name: "Truffle Pasta", category: "Our Special", price: 300, image: trufflePastaImg },
  { id: 35, name: "Wagyu Beef", category: "Our Special", price: 500, image: wagyuBeefImg },
  { id: 36, name: "Caviar Delight", category: "Our Special", price: 600, image: caviarDelightImg },
  { id: 37, name: "Tandoori Platter", category: "Our Special", price: 350, image: tandooriPlatterImg },
  { id: 38, name: "Exotic Sushi", category: "Our Special", price: 450, image: exoticSushiImg },
  { id: 39, name: "Duck Confit", category: "Our Special", price: 320, image: duckConfitImg },
  { id: 40, name: "Chocolate Soufflé", category: "Our Special", price: 280, image: chocolateSouffleImg },
];

const categories = ["All", "Starter", "Main Course", "Drinks", "Offers", "Our Special"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter menu items based on category
  const filteredItems =
    selectedCategory === "All" ? menuItems : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <motion.div 
      className="bg-[#fdfaf6] min-h-screen text-[#4a3e36] flex flex-col items-center py-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Page Header with Breadcrumb Navigation */}
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-semibold text-[#C19A5B]">Menu</h2>
        <nav className="text-sm text-gray-500 mt-2">
          <Link to="/" className="hover:text-[#C19A5B]">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/about" className="hover:text-[#C19A5B]">About</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/booking" className="text-[#C19A5B] font-medium hover:underline">Booking</Link>
        </nav>
      </motion.div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <motion.button
          className="bg-[#e4b665] text-white px-5 py-2 rounded-full text-sm"
          whileHover={{ scale: 1.1 }}
        >
          OUR MENU
        </motion.button>
        <motion.h3
          className="text-3xl italic font-semibold mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Most Popular Food in the World
        </motion.h3>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full border border-[#e4b665] text-[#e4b665] transition-all ${
              selectedCategory === category ? "bg-[#e4b665] text-white" : "hover:bg-[#e4b665] hover:text-white"
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <motion.div 
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {filteredItems.map((item) => (
          <motion.div 
            key={item.id} 
            className="flex items-center border-b border-gray-300 pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image with Hover Effect */}
            <motion.img 
              src={item.image} 
              alt={item.name} 
              className="w-16 h-16 rounded-full object-cover mr-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-500 text-sm">Delicious flavors made with care, perfect for every taste.</p>
            </div>
            
            {/* Price with Fade-in Effect */}
            <motion.span 
              className="text-[#e4b665] font-bold text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Rs.{item.price}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Menu;
