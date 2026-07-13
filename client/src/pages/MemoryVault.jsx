import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MemoryVault() {
  const [memories, setMemories] = useState([]);

  const [form, setForm] = useState({
    title: "",
    location: "",
    mood: "😊 Happy",
    note: "",
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const [search, setSearch] = useState("");
  const [filterMood, setFilterMood] = useState("All");

  useEffect(() => {
    fetchMemories();
  }, []);

  // ---------------- FETCH MEMORIES ----------------

  const fetchMemories = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/memory"
      );

      setMemories(res.data.memories || []);
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------- HANDLE FORM ----------------

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ---------------- HANDLE MULTIPLE IMAGES ----------------

  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    setImages(files);

    const imagePreviews = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(imagePreviews);
  };

  // ---------------- ADD MEMORY ----------------

  const addMemory = async (e) => {
    e.preventDefault();

    if (!form.title || !form.location || !form.note) {
      alert("Please fill all fields");
      return;
    }

    const newMemory = {
      title: form.title,
      location: form.location,
      mood: form.mood,
      note: form.note,
      images:
        previews.length > 0
          ? previews
          : [
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
            ],
    };

    try {
      await axios.post(
        "http://localhost:5000/api/memory",
        newMemory
      );

      fetchMemories();

      setForm({
        title: "",
        location: "",
        mood: "😊 Happy",
        note: "",
      });

      setImages([]);
      setPreviews([]);
    } catch (error) {
      console.log(error);
      alert("Failed to save memory");
    }
  };

  // ---------------- DELETE MEMORY ----------------

  const deleteMemory = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/memory/${id}`
      );

      fetchMemories();
    } catch (error) {
      console.log(error);
    }
  };

  // ---------------- SEARCH + FILTER ----------------

  const filteredMemories = memories.filter((memory) => {
    const searchMatch =
      memory.title
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      memory.location
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const moodMatch =
      filterMood === "All" ||
      memory.mood === filterMood;

    return searchMatch && moodMatch;
  });

  // ---------------- RETURN STARTS BELOW ----------------//
    return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white py-10">
        <div className="max-w-6xl mx-auto px-5">

          <h1 className="text-4xl font-bold text-center mb-10">
            📸 Memory Vault
          </h1>

          {/* ---------------- ADD MEMORY FORM ---------------- */}

          <form
            onSubmit={addMemory}
            className="bg-slate-900 p-8 rounded-xl border border-slate-700"
          >
            <div className="grid md:grid-cols-2 gap-5">

              <input
                type="text"
                name="title"
                placeholder="Memory Title"
                value={form.title}
                onChange={handleChange}
                className="p-3 rounded bg-slate-800 border border-slate-700"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={form.location}
                onChange={handleChange}
                className="p-3 rounded bg-slate-800 border border-slate-700"
              />

              <select
                name="mood"
                value={form.mood}
                onChange={handleChange}
                className="p-3 rounded bg-slate-800 border border-slate-700"
              >
                <option>😊 Happy</option>
                <option>😍 Amazing</option>
                <option>😎 Adventure</option>
                <option>🌄 Peaceful</option>
                <option>🥳 Fun</option>
              </select>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImage}
                className="p-3 rounded bg-slate-800 border border-slate-700"
              />

            </div>

            <textarea
              rows="4"
              name="note"
              placeholder="Write your memory..."
              value={form.note}
              onChange={handleChange}
              className="mt-5 w-full p-3 rounded bg-slate-800 border border-slate-700"
            />

            {previews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                {previews.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="h-32 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            <button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold"
            >
              Save Memory
            </button>

          </form>

          {/* ---------------- SEARCH ---------------- */}

          <div className="flex flex-col md:flex-row gap-4 my-8">

            <input
              type="text"
              placeholder="Search memories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-3 rounded bg-slate-800 border border-slate-700"
            />

            <select
              value={filterMood}
              onChange={(e) => setFilterMood(e.target.value)}
              className="p-3 rounded bg-slate-800 border border-slate-700"
            >
              <option>All</option>
              <option>😊 Happy</option>
              <option>😍 Amazing</option>
              <option>😎 Adventure</option>
              <option>🌄 Peaceful</option>
              <option>🥳 Fun</option>
            </select>

          </div>

          {/* ---------------- MEMORY LIST ---------------- */}

          <div className="grid md:grid-cols-3 gap-6">

            {filteredMemories.length === 0 ? (

              <div className="col-span-full text-center py-10">
                <h2 className="text-2xl font-bold">
                  No Memories Yet 📷
                </h2>

                <p className="text-slate-400 mt-2">
                  Add your first travel memory.
                </p>
              </div>

            ) : (

              filteredMemories.map((memory) => (

                <div
                  key={memory._id || memory.id}
                  className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-lg"
                >

                  <div className="grid grid-cols-2 gap-2 p-2">

                    {memory.images?.map((img, index) => (

                      <img
                        key={index}
                        src={img}
                        alt=""
                        className="h-32 w-full object-cover rounded-lg"
                      />

                    ))}

                  </div>

                  <div className="p-5">

                    <h2 className="text-2xl font-bold">
                      {memory.title}
                    </h2>

                    <p className="mt-2 text-slate-400">
                      📍 {memory.location}
                    </p>

                    <p className="mt-2">
                      {memory.mood}
                    </p>

                    <p className="mt-4 text-slate-300">
                      {memory.note}
                    </p>

                    <p className="mt-4 text-sm text-slate-500">
                      {memory.date
                        ? memory.date
                        : new Date(memory.createdAt).toLocaleDateString()}
                    </p>

                    <button
                      onClick={() =>
                        deleteMemory(memory._id || memory.id)
                      }
                      className="mt-5 w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg"
                    >
                      Delete Memory
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default MemoryVault;