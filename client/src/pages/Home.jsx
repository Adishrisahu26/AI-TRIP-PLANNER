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
        className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2, 6, 23, 0.62), rgba(14, 165, 233, 0.08)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.25),transparent_45%),radial-gradient(circle_at_left,rgba(45,212,191,0.15),transparent_38%)]" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="bg-blue-600/30 text-blue-100 px-5 py-2 rounded-full text-sm font-semibold border border-blue-300/40 backdrop-blur-sm">
            ✈️ AI Powered Travel Planning
          </span>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-6 leading-none">
            Discover Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200 mt-4">
              Next Adventure
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-8">
            Generate personalized itineraries, hotel recommendations,
            budget breakdowns and travel tips in seconds.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <button
              onClick={() => navigate("/create-trip")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-xl shadow-blue-900/60"
            >
              Start Planning ✨
            </button>

            <button
              onClick={() => navigate("/create-trip")}
              className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition backdrop-blur-sm"
            >
              Explore Features
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="bg-white/6 rounded-2xl py-4 border border-white/10 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white">50K+</h2>
              <p className="text-slate-400">Trips Generated</p>
            </div>

            <div className="bg-white/6 rounded-2xl py-4 border border-white/10 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white">120+</h2>
              <p className="text-slate-400">Destinations</p>
            </div>

            <div className="bg-white/6 rounded-2xl py-4 border border-white/10 backdrop-blur-sm">
              <h2 className="text-4xl font-bold text-white">4.9★</h2>
              <p className="text-slate-400">User Rating</p>
            </div>

            <div className="bg-white/6 rounded-2xl py-4 border border-white/10 backdrop-blur-sm">
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

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 hover:border-blue-400 transition">
              <h3 className="text-2xl font-bold text-white mb-4">
                ✈️ AI Itinerary Generator
              </h3>
              <p className="text-slate-400">
                Generate day-wise travel plans instantly.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 hover:border-emerald-400 transition">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏨 Hotel Recommendations
              </h3>
              <p className="text-slate-400">
                Find stays that fit your budget.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 hover:border-amber-400 transition">
              <h3 className="text-2xl font-bold text-white mb-4">
                💰 Budget Planner
              </h3>
              <p className="text-slate-400">
                Smart spending suggestions for every trip.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 hover:border-pink-400 transition">
              <h3 className="text-2xl font-bold text-white mb-4">
                📸 Memory Vault
              </h3>
              <p className="text-slate-400">
                Save memories, photos and moods from the journey.
              </p>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Smart Planning
              </p>
              <h3 className="text-2xl font-bold mt-2 text-white">
                Build your perfect route
              </h3>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">
                Budget Control
              </p>
              <h3 className="text-2xl font-bold mt-2 text-white">
                Split every expense
              </h3>
            </div>

            <div className="bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-400/30 rounded-3xl p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-200">
                Travel Story
              </p>
              <h3 className="text-2xl font-bold mt-2 text-white">
                Journal every memory
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Flow */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
            <div>
              <span className="text-cyan-300 uppercase tracking-[0.24em] text-sm font-semibold">
                Travel OS
              </span>
              <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
                From first idea to last photo
              </h2>
              <p className="text-slate-300 mt-6 leading-8 text-lg">
                Build a trip, keep it organized, manage your budget and revisit every memory from one beautiful dashboard.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/create-trip")}
                  className="px-7 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-cyan-100 transition"
                >
                  Plan a trip
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-7 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
                >
                  Open dashboard
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-cyan-300/25 bg-cyan-400/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                      Step 01
                    </p>
                    <h3 className="text-2xl font-bold mt-2 text-white">
                      Discover
                    </h3>
                  </div>
                  <span className="text-4xl">🌍</span>
                </div>
                <p className="text-slate-400 mt-4">
                  Choose your style, budget, travel tempo and destination preferences.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-300/25 bg-emerald-400/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">
                      Step 02
                    </p>
                    <h3 className="text-2xl font-bold mt-2 text-white">
                      Plan
                    </h3>
                  </div>
                  <span className="text-4xl">🧭</span>
                </div>
                <p className="text-slate-400 mt-4">
                  Generate a route with recommendations, hotels, activities and flow.
                </p>
              </div>

              <div className="rounded-3xl border border-violet-300/25 bg-violet-400/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-violet-200">
                      Step 03
                    </p>
                    <h3 className="text-2xl font-bold mt-2 text-white">
                      Experience
                    </h3>
                  </div>
                  <span className="text-4xl">📸</span>
                </div>
                <p className="text-slate-400 mt-4">
                  Track expenses, write your journal and store your favorite travel moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Turn ideas into your next story
          </h2>
          <p className="text-cyan-100 mt-6 text-lg max-w-3xl mx-auto">
            Start with a destination and let your planning assistant organize the whole trip for you.
          </p>
          <button
            onClick={() => navigate("/create-trip")}
            className="mt-8 px-10 py-4 rounded-2xl bg-white text-blue-900 font-bold hover:scale-105 transition shadow-2xl"
          >
            Build My Travel Plan
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;