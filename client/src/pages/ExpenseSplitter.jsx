import { useState } from "react";

function ExpenseSplitter() {
  const [amount, setAmount] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState("");

  const calculateSplit = () => {
    if (!amount || !people) return;

    const perPerson =
      Number(amount) / Number(people);

    setResult(perPerson.toFixed(2));
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 py-10 text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2, 6, 23, 0.88), rgba(15, 23, 42, 0.92)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-xl w-full max-w-md border border-slate-700 shadow-2xl">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
           Expense Splitter
        </h1>

        <input
          type="number"
          placeholder="Total Trip Cost"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-800 border border-slate-600 text-white placeholder-slate-400"
        />

        <input
          type="number"
          placeholder="Number of People"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-slate-800 border border-slate-600 text-white placeholder-slate-400"
        />

        <button
          onClick={calculateSplit}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded font-semibold hover:scale-105 transition"
        >
          Calculate
        </button>

        {result && (
          <div className="mt-6 text-center text-white">
            <h2 className="text-xl font-bold">
              Each Person Pays
            </h2>

            <p className="text-3xl text-green-400 mt-2">
              ₹{result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseSplitter;