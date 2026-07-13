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
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
           Expense Splitter
        </h1>

        <input
          type="number"
          placeholder="Total Trip Cost"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 mb-4 rounded"
        />

        <input
          type="number"
          placeholder="Number of People"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full p-3 mb-4 rounded"
        />

        <button
          onClick={calculateSplit}
          className="w-full bg-blue-600 text-white py-3 rounded"
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