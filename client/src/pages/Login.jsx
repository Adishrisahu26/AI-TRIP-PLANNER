import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(loginData.email, loginData.password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 flex justify-center items-center py-20">
        <div className="bg-slate-800 p-8 rounded-xl w-96 border border-slate-700">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Login
          </h1>

          {error && (
            <div className="bg-red-900/20 border border-red-600 text-red-400 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white border border-slate-600"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white border border-slate-600"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold disabled:opacity-50 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-slate-300 text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:text-blue-300">
              Register
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;