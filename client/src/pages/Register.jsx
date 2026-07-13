import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await register(
        user.name,
        user.email,
        user.password
      );

      if (result.success) {
        navigate("/dashboard");
      } else {
        setError(result.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 flex items-center justify-center py-20">
        <div className="w-96 bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-center text-white mb-6">
            Register
          </h1>

          {error && (
            <div className="bg-red-900/20 border border-red-500 text-red-400 rounded-lg p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg bg-slate-700 border border-slate-600 text-white outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg bg-slate-700 border border-slate-600 text-white outline-none"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              className="w-full p-3 mb-6 rounded-lg bg-slate-700 border border-slate-600 text-white outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-slate-300 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Register;