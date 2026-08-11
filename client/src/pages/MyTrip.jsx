import { useState } from "react";

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

function MyTrip() {
const [trips, setTrips] = useState(
JSON.parse(localStorage.getItem(getTripStorageKey())) || []
);

const deleteTrip = (indexToDelete) => {
const updatedTrips = trips.filter(
(_, index) => index !== indexToDelete
);


setTrips(updatedTrips);

localStorage.setItem(
  getTripStorageKey(),
  JSON.stringify(updatedTrips)
);

alert("Trip deleted successfully!");


};

return (
  <div
    className="min-h-screen text-white p-8"
    style={{
      backgroundImage:
        "linear-gradient(rgba(2, 6, 23, 0.88), rgba(15, 23, 42, 0.92)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        My Saved Trips
      </h1>


  {trips.length === 0 ? (
    <p>No trips saved yet.</p>
  ) : (
    <div className="grid gap-4">
      {trips.map((trip, index) => (
        <div
          key={index}
          className="bg-slate-900/80 border border-slate-700 p-5 rounded-xl backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold">
            📍 {trip.destination}
          </h2>
          
          

          <p>💰 Budget: ₹{trip.budget}</p>

          <p>📅 Days: {trip.days}</p>

          <p>🗓 Date: {trip.date}</p>

          <p>🎯 Interests: {trip.interests}</p>
          <a
  href={`https://www.google.com/maps/search/${trip.destination}`}
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-3 mr-3 bg-blue-600 px-4 py-2 rounded"
>
  🗺 Open Maps
</a>

          <details className="mt-3">
            <summary className="cursor-pointer text-blue-400">
              View Full Plan
            </summary>

            <pre className="whitespace-pre-wrap mt-3">
              {trip.plan}
            </pre>
          </details>

          <button
            onClick={() => deleteTrip(index)}
            className="mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Delete Trip
          </button>
        </div>
      ))}
    </div>
  )}
</div>
</div>

);
}

export default MyTrip;
