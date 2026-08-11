import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { generateTripPlan } from "../services/gemini";


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

function CreateTrip() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const [tripData, setTripData] = useState({
    source: "",
    destination: "",
    budget: "",
    days: "",
    date: "",
    interests: "",
  });

const [tripPlan, setTripPlan] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setTripData({
...tripData,
[e.target.name]: e.target.value,
});
};

const handleGenerateTrip = async (e) => {
e.preventDefault();

try {
  setLoading(true);

  const prompt = `


You are a professional travel planner.

Source: ${tripData.source}
Destination: ${tripData.destination}
Budget: ₹${tripData.budget}
Days: ${tripData.days}
Travel Date: ${tripData.date}
Interests: ${tripData.interests}

Provide:

1. Day-wise itinerary
2. Tourist attractions
3. Local foods
4. Budget breakdown
5. Hotel suggestions
6. Transportation suggestions
7. Travel tips

Format the response clearly.
`;


  const response = await generateTripPlan(prompt);

  setTripPlan(response);

  const tripStorageKey = getTripStorageKey();
  const savedTrips =
    JSON.parse(localStorage.getItem(tripStorageKey)) || [];

  savedTrips.push({
    id: Date.now(),
    source: tripData.source,
    destination: tripData.destination,
    budget: tripData.budget,
    days: tripData.days,
    date: tripData.date,
    interests: tripData.interests,
    plan: response,
  });

  localStorage.setItem(
    tripStorageKey,
    JSON.stringify(savedTrips)
  );
} catch (error) {
  console.error(error);
  alert("Error generating trip");
} finally {
  setLoading(false);
}


};

return (
  <div
    className="min-h-screen py-10 px-4 text-white"
    style={{
      backgroundImage:
        "linear-gradient(rgba(2, 6, 23, 0.86), rgba(15, 23, 42, 0.94)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="max-w-5xl mx-auto">

    <div className="text-center mb-10">
      <h1 className="text-6xl font-bold text-white mb-4">
        ✈️ goJourney
      </h1>

      <p className="text-slate-300 text-lg">
        Plan your dream trip with Gemini AI
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mb-8">

  <Link to="/travel-journal">
    <div className="bg-slate-800/70 backdrop-blur-md p-5 rounded-2xl text-white border border-slate-700 hover:scale-105 transition cursor-pointer">
      📖 Travel Journal
    </div>
  </Link>

  <Link to="/split-expense">
    <div className="bg-slate-800/70 backdrop-blur-md p-5 rounded-2xl text-white border border-slate-700 hover:scale-105 transition cursor-pointer">
      💸 Split Expenses
    </div>
  </Link>

  <Link to="/my-trip">
    <div className="bg-slate-800/70 backdrop-blur-md p-5 rounded-2xl text-white border border-slate-700 hover:scale-105 transition cursor-pointer">
      📁 Saved Trips
    </div>
  </Link>

</div>

    <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-2xl">

      <form onSubmit={handleGenerateTrip}>
        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            name="source"
            placeholder="📍 Source City"
            value={tripData.source}
            onChange={handleChange}
            className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            name="destination"
            placeholder="🌍 Destination"
            value={tripData.destination}
            onChange={handleChange}
            className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="budget"
            placeholder=" Budget"
            value={tripData.budget}
            onChange={handleChange}
            className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="number"
            name="days"
            placeholder="📅 Number of Days"
            value={tripData.days}
            onChange={handleChange}
            className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="date"
            name="date"
            value={tripData.date}
            onChange={handleChange}
            className="p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
            required
          />
        </div>

        <input
          type="text"
          name="interests"
          placeholder=" Adventure, Beaches, Food, Nature..."
          value={tripData.interests}
          onChange={handleChange}
          className="w-full mt-4 p-4 rounded-xl bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
        >
          {loading
            ? "Generating Your Trip..."
            : " Generate Trip"}
        </button>
 

 
      </form>
    </div>

    {tripPlan && (
      <div className="mt-8 bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-slate-700 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          🗺️ Your AI Travel Plan
        </h2>

        <div className="whitespace-pre-wrap text-slate-300 leading-8">
          {tripPlan}
        </div>
      </div>
    )}
  </div>
</div>

);
}

export default CreateTrip;
