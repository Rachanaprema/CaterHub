import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Success/Error message
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate(); // Redirect function

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to handle login
  const handleLogin = async () => {
    setMessage("");

    // Trim spaces from inputs
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Validation
    if (!trimmedEmail || !trimmedPassword) {
      setMessage("Email and Password are required!");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setMessage("Enter a valid email address!");
      return;
    }

    if (trimmedPassword.length < 6) {
      setMessage("Password must be at least 6 characters long!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Login successful! Redirecting...");
        localStorage.setItem("token", data.token); // Store token in localStorage
        setTimeout(() => navigate("/"), 2000); // Redirect to Home Page
      } else {
        setMessage(data.message || "Invalid email or password!");
      }
    } catch (error) {
      setMessage("Server error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md w-96"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {message && (
          <p className={`text-center mb-4 ${message.includes("successful") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#C19A5B]"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#C19A5B]"
        />

        <motion.button
          onClick={handleLogin}
          className={`bg-[#C19A5B] text-white w-full py-3 rounded-md shadow-md hover:bg-[#A17A4B] transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#C19A5B] font-bold">
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
