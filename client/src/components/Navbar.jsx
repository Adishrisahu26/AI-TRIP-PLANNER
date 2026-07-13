import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-3xl font-bold text-white tracking-wide"
        >
          ✈️ goJourney
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-slate-300 hover:text-white transition"
          >
            Home
          </Link>
          <Link
  to="/memory-vault"
  className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-lg text-white font-semibold"
>
   Memory 
</Link>

          {user && (
            <>
              <Link
                to="/dashboard"
                className="text-slate-300 hover:text-white transition"
              >
                Dashboard
              </Link>
              <Link
                to="/create-trip"
                className="text-slate-300 hover:text-white transition"
              >
                Create Trip
              </Link>
              <Link
                to="/my-trip"
                className="text-slate-300 hover:text-white transition"
              >
                My Trips
              </Link>
            </>
          )}
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden md:inline text-slate-300">{user.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="hidden md:flex gap-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-all text-sm"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-slate-300 hover:text-blue-400">
              Home
            </Link>
            {user && (
              <>
                <Link to="/dashboard" className="text-slate-300 hover:text-blue-400">
                  Dashboard
                </Link>
                <Link to="/create-trip" className="text-slate-300 hover:text-blue-400">
                  Create Trip
                </Link>
                <Link to="/my-trip" className="text-slate-300 hover:text-blue-400">
                  My Trips
                </Link>
                <span className="text-slate-300">{user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            )}
            {!user && (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 transition-all"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;