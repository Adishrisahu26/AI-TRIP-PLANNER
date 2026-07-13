import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext";
import { TripProvider } from "./context/TripContext";
import { ExpenseProvider } from "./context/ExpenseContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <TripProvider>
        <ExpenseProvider>
          <App />
        </ExpenseProvider>
      </TripProvider>
    </AuthProvider>
  </StrictMode>
);