import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section className="bg-slate-950 text-white min-h-screen flex flex-col justify-center items-center px-6">

        <h1 className="text-6xl font-bold text-center">
          Plan Your Dream Trip With AI
        </h1>

        <p className="text-xl text-gray-300 text-center mt-6 max-w-3xl">
          Generate itineraries, packing lists, weather reports
          and budget plans instantly.
        </p>

        <button
         onClick={() => navigate("/create-trip")}
         className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl">
          Start Planning
        </button>

        <div className="grid md:grid-cols-3 gap-8 mt-20 w-full max-w-6xl">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              AI Itinerary
            </h2>
            <p className="mt-3 text-gray-300">
              Generate day-wise travel plans instantly.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Budget Planner
            </h2>
            <p className="mt-3 text-gray-300">
              Get smart spending suggestions.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold">
              Packing Assistant
            </h2>
            <p className="mt-3 text-gray-300">
              Never forget important travel items.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;