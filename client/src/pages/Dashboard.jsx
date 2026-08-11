import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch (error) {
    return null;
  }
};

const getTripStorageKey = () => {
  const user = getCurrentUser();

  if (user?.id) {
    return `gojourney_trips_${user.id}`;
  }

  return "gojourney_trips_guest";
};

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [journalEntries, setJournalEntries] = useState([]);
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const tripStorageKey = getTripStorageKey();
    const savedTrips = JSON.parse(localStorage.getItem(tripStorageKey)) || [];
    const savedJournal = JSON.parse(localStorage.getItem("travelJournal")) || [];

    setTrips(savedTrips);
    setJournalEntries(savedJournal);

    const savedMemoryVault = JSON.parse(localStorage.getItem("memoryVault")) || [];
    setMemories(savedMemoryVault);
  }, []);

  const quickLinks = [
    {
      title: "Create Trip",
      description: "Generate your next AI itinerary",
      icon: "✈️",
      path: "/create-trip",
      accent: "from-blue-600 to-cyan-500",
    },
    {
      title: "My Trips",
      description: "Review saved destination plans",
      icon: "📍",
      path: "/my-trip",
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "Expense Splitter",
      description: "Split trip cost with travel buddies",
      icon: "💸",
      path: "/split-expense",
      accent: "from-amber-500 to-orange-500",
    },
    {
      title: "Travel Journal",
      description: "Capture travel memories and moments",
      icon: "📖",
      path: "/travel-journal",
      accent: "from-violet-500 to-purple-500",
    },
    {
      title: "Memory Vault",
      description: "Store images, notes and stories",
      icon: "🖼️",
      path: "/memory-vault",
      accent: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12, 24, 39, 0.88), rgba(15, 23, 42, 0.93)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                goJourney Dashboard
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-2">
                Dashboard
              </h1>
            </div>

            <Link
              to="/create-trip"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Plan a New Trip
            </Link>
          </div>

          <section className="grid md:grid-cols-4 gap-5 mb-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Trips</span>
                <span className="text-2xl">✈️</span>
              </div>
              <div className="text-3xl font-bold mt-4">{trips.length}</div>
              <p className="text-slate-500 text-sm mt-2">Saved itineraries</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Journal</span>
                <span className="text-2xl">📖</span>
              </div>
              <div className="text-3xl font-bold mt-4">{journalEntries.length}</div>
              <p className="text-slate-500 text-sm mt-2">Travel notes</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Memories</span>
                <span className="text-2xl">🖼️</span>
              </div>
              <div className="text-3xl font-bold mt-4">{memories.length}</div>
              <p className="text-slate-500 text-sm mt-2">Vault entries</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Budget</span>
                <span className="text-2xl">💰</span>
              </div>
              <div className="text-3xl font-bold mt-4">
                {trips.length > 0
                  ? `₹${trips.reduce((sum, trip) => sum + Number(trip.budget || 0), 0)}`
                  : "₹0"}
              </div>
              <p className="text-slate-500 text-sm mt-2">Total planned</p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {quickLinks.map((feature) => (
              <Link
                key={feature.title}
                to={feature.path}
                className="group bg-slate-900/75 border border-slate-700 rounded-3xl p-6 hover:-translate-y-1 transition-all hover:border-blue-400 shadow-xl backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{feature.icon}</span>
                  <span className="text-slate-500 group-hover:text-white transition">
                    →
                  </span>
                </div>

                <h2 className="text-2xl font-bold mt-6 text-white">
                  {feature.title}
                </h2>

                <p className="text-slate-400 mt-3 leading-6">
                  {feature.description}
                </p>

                <div className="mt-6">
                  <span className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${feature.accent} text-white text-xs font-bold uppercase tracking-wide`}>
                    Open
                  </span>
                </div>
              </Link>
            ))}
          </section>

          <section className="mt-10 grid lg:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-2xl font-bold">Trip Summary</h2>
                <Link to="/my-trip" className="text-blue-300 hover:text-white">
                  View all
                </Link>
              </div>

              {trips.length === 0 ? (
                <div className="text-slate-400 border border-dashed border-slate-700 rounded-2xl p-6">
                  No trips planned yet. Create your first itinerary.
                </div>
              ) : (
                <div className="space-y-4">
                  {trips.slice(0, 3).map((trip, index) => (
                    <div key={index} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {trip.destination}
                          </h3>
                          <p className="text-slate-400 text-sm">
                            From {trip.source} • {trip.days} days
                          </p>
                        </div>
                        <span className="text-green-300 font-semibold">
                          ₹{trip.budget}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-5">Travel Coach</h2>
              <div className="space-y-4">
                <div className="bg-slate-800/80 rounded-2xl p-4">
                  <p className="text-sm text-slate-400">Today’s Focus</p>
                  <p className="text-white font-semibold mt-2">
                    Prepare budget and daily plan for your next destination
                  </p>
                </div>
                <div className="bg-slate-800/80 rounded-2xl p-4">
                  <p className="text-sm text-slate-400">Next Action</p>
                  <p className="text-white font-semibold mt-2">
                    Review latest saved expenses and journal activity
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;