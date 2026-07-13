import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ✈️ goJourney
            </h2>
            <p className="text-slate-400">
              Plan smarter, travel better. Generate personalized
              itineraries, budget plans, hotel suggestions and
              travel tips powered by AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create-trip" className="text-slate-400 hover:text-white transition">
                  Create Trip
                </Link>
              </li>
              <li>
                <Link to="/my-trip" className="text-slate-400 hover:text-white transition">
                  My Trips
                </Link>
              </li>
              <li>
                <Link to="/split-expense" className="text-slate-400 hover:text-white transition">
                  Split Expense
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Built With
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Gemini AI</li>
              <li>Node.js & Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-slate-500">
            © {currentYear} goJourney • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;