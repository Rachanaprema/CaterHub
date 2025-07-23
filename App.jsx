import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import HeroSection from "./components/HeroSection";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import About from "./pages/About"; // Import About Page
import Booking from "./pages/Booking"; // Import About Page
import Payment from "./pages/Payment"; // Import About Page
import Success from "./pages/Success";
import Services from "./pages/Services"; // Import Services Page
import Events from "./pages/Events"; 
import Menu from "./pages/Menu"; 
import Contact from "./pages/Contact"; // Import Contact Page
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />  {/* ✅ About Page Route */}
        <Route path="/services" element={<Services />} />  {/* ✅ Service Page Route */}
        <Route path="/events" element={<Events />} />  {/* ✅ Event Page Route */}
        <Route path="/menu" element={<Menu />} />  {/* ✅ Event Page Route */}
        <Route path="/contact" element={<Contact />} />  {/* ✅ Contact Page Route */}
        <Route path="/booking" element={<Booking />} />  {/* ✅ About Page Route */}
        <Route path="/payment" element={<Payment />} /> 
        <Route path="/success" element={<Success />} /> 

        {/* Protected Route for HeroSection */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HeroSection />
              <About/>
              <Services/>
              <Events/>
              <Menu/>
              <Contact/>
              <Booking/>
              <Payment/>
              <Success/>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer /> {/* Footer will be displayed on every page */}
    </Router>
  );
}

export default App;