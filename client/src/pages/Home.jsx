import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
  className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://c4.wallpaperflare.com/wallpaper/168/169/200/nature-landscape-sky-water-wallpaper-thumb.jpg')",
  }}
>
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm">
            ✈️ AI Powered Travel Planning
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Next Adventure
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Generate personalized itineraries, hotel recommendations,
            budget breakdowns and travel tips in seconds.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <button
              onClick={() => navigate("/create-trip")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition"
            >
              Start Planning ✨
            </button>

            <button className="px-8 py-4 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition">
              Explore Features
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div>
              <h2 className="text-4xl font-bold text-white">50K+</h2>
              <p className="text-slate-400">Trips Generated</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">120+</h2>
              <p className="text-slate-400">Destinations</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">4.9★</h2>
              <p className="text-slate-400">User Rating</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">24/7</h2>
              <p className="text-slate-400">AI Assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Everything You Need For Travel
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                ✈️ AI Itinerary Generator
              </h3>
              <p className="text-slate-400">
                Generate day-wise travel plans instantly.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏨 Hotel Recommendations
              </h3>
              <p className="text-slate-400">
                Find stays that fit your budget.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                💰 Budget Planner
              </h3>
              <p className="text-slate-400">
                Smart spending suggestions for every trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;