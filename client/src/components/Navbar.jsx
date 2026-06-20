import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-950 text-white">
      <h1 className="text-3xl font-bold">
        AI Trip Planner
      </h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/login" className="hover:text-blue-400">
          Login
        </Link>

        <Link to="/register" className="hover:text-blue-400">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;