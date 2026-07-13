import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import MyTrip from "./pages/MyTrip";
import TravelJournal from "./pages/TravelJournal";
import MemoryVault from "./pages/MemoryVault";

import ExpenseSplitter from "./pages/ExpenseSplitter";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/memory-vault" element={<MemoryVault />} />

        <Route path="/my-trip" element={<MyTrip />} />
        <Route path="/split-expense" element={<ExpenseSplitter />} />

<Route
  path="/travel-journal"
  element={<TravelJournal />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;