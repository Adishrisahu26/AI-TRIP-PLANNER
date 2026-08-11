import { useState, useEffect } from "react";

function TravelJournal() {
  const [journal, setJournal] = useState([]);
  const [formData, setFormData] = useState({
    destination: "",
    date: "",
    notes: "",
    rating: "",
  });

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("travelJournal")) || [];
    setJournal(saved);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveJournal = (e) => {
    e.preventDefault();

    const updatedJournal = [
      ...journal,
      {
        id: Date.now(),
        ...formData,
      },
    ];

    setJournal(updatedJournal);

    localStorage.setItem(
      "travelJournal",
      JSON.stringify(updatedJournal)
    );

    setFormData({
      destination: "",
      date: "",
      notes: "",
      rating: "",
    });
  };

  const deleteEntry = (id) => {
    const updated = journal.filter(
      (entry) => entry.id !== id
    );

    setJournal(updated);

    localStorage.setItem(
      "travelJournal",
      JSON.stringify(updated)
    );
  };

  return (
    <div
      className="min-h-screen p-8 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 6, 23, 0.88), rgba(15, 23, 42, 0.94)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          📖 Travel Journal
        </h1>

        <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-700 shadow-2xl">
          <form onSubmit={saveJournal}>
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded bg-slate-800 border border-slate-600 text-white placeholder-slate-400"
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded bg-slate-800 border border-slate-600 text-white placeholder-slate-400"
              required
            />

            <textarea
              name="notes"
              placeholder="Write your travel experience..."
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded bg-slate-800 border border-slate-600 text-white placeholder-slate-400"
              rows="4"
              required
            />

            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-3 mb-4 rounded bg-slate-800 border border-slate-600 text-white placeholder-slate-400"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold"
            >
              Save Journal
            </button>
          </form>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {journal.map((entry) => (
            <div
              key={entry.id}
              className="bg-slate-900/80 text-white p-5 rounded-xl border border-slate-700 backdrop-blur-md"
            >
              <h2 className="text-2xl font-bold">
                {entry.destination}
              </h2>

              <p className="text-gray-400">
                {entry.date}
              </p>

              <p className="mt-3">
                {entry.notes}
              </p>

              <p className="mt-3 text-yellow-400">
                ⭐ {entry.rating}/5
              </p>

              <button
                onClick={() => deleteEntry(entry.id)}
                className="mt-4 bg-red-600 px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TravelJournal;