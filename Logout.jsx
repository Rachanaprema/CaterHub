import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        try {
          await fetch("http://localhost:5000/api/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
        } catch (error) {
          console.error("Logout failed:", error);
        }
      }

      // Remove token from storage
      localStorage.removeItem("authToken");
      sessionStorage.removeItem("user");

      // Redirect after 500ms
      setTimeout(() => {
        navigate("/login");
      }, 500);
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-[#C19A5B]">Logging Out...</h2>
        <p className="mt-2 text-gray-600">Redirecting to login page...</p>
      </div>
    </div>
  );
};

export default Logout;
