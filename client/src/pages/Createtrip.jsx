import { useState } from "react";
import { generateTripPlan } from "../services/gemini";

function CreateTrip() {
  const [tripData, setTripData] = useState({
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

    setLoading(true);

    const prompt = `
You are a professional travel planner.

Create a detailed travel itinerary.

Destination: ${tripData.destination}
Budget: ₹${tripData.budget}
Days: ${tripData.days}
Travel Date: ${tripData.date}
Interests: ${tripData.interests}

Provide:

1. Day-wise itinerary
2. Famous tourist attractions
3. Recommended local foods
4. Budget breakdown
5. Hotel suggestions
6. Transportation suggestions
7. Travel tips

Format the response clearly.
`;

    const response = await generateTripPlan(prompt);

    setTripPlan(response);

    const savedTrips =
  JSON.parse(localStorage.getItem("trips")) || [];

savedTrips.push({
  id: Date.now(),
  ...tripData,
  plan: response,
});

localStorage.setItem("trips", JSON.stringify(savedTrips));

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center p-6">
      <div className="bg-slate-800 p-8 rounded-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Create Your Trip
        </h1>

        <form onSubmit={handleGenerateTrip}>
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded"
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget"
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded"
          />

          <input
            type="number"
            name="days"
            placeholder="Number of Days"
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded"
          />

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded"
          />

          <input
            type="text"
            name="interests"
            placeholder="Interests (Adventure, Beaches, Food...)"
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            {loading ? "Generating Trip..." : "Generate Trip"}
          </button>
        </form>

        {tripPlan && (
          <div className="mt-6 bg-slate-700 p-4 rounded text-white">
            <h2 className="text-xl font-bold mb-3">
              Your AI Trip Plan
            </h2>

            <pre className="whitespace-pre-wrap">
              {tripPlan}
            </pre>
          </div>
        )}

        {localStorage.getItem("lastTrip") && (
          <div className="mt-4 text-green-400 font-semibold">
            ✅ Trip saved successfully
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateTrip;