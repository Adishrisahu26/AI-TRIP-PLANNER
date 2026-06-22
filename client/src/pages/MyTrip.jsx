function MyTrip() {
  const trips = JSON.parse(localStorage.getItem("trips")) || [];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        My Saved Trips
      </h1>

      {trips.length === 0 ? (
        <p>No trips saved yet.</p>
      ) : (
        <div className="grid gap-4">
          {trips.map((trip) => (
            <div
              key={trip.id}
              className="bg-slate-800 p-5 rounded-xl"
            >
              <h2 className="text-2xl font-bold">
                📍 {trip.destination}
              </h2>

              <p>💰 Budget: ₹{trip.budget}</p>

              <p>📅 Days: {trip.days}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyTrip;