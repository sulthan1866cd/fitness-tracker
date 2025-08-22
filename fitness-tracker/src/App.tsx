import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/forms/Login";
import Regester from "./components/forms/Regester";
import Dashboard from "./components/dashboard/Dashboard";
import HomePage from "./components/dashboard/home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/user/:username" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route
            path="graph"
            element={
              <h1 className="dashboard-container">Graph build in progress</h1>
            }
          />
          <Route
            path="steps"
            element={
              <h1 className="dashboard-container">Steps build in progress</h1>
            }
          />
          <Route
            path="messages"
            element={
              <h1 className="dashboard-container">
                Messages build in progress
              </h1>
            }
          />
          <Route
            path="directions"
            element={
              <h1 className="dashboard-container">
                Directions build in progress
              </h1>
            }
          />

          <Route
            path="settings"
            element={
              <h1 className="dashboard-container">
                Settings build in progress
              </h1>
            }
          />
          <Route
            path="wallet"
            element={
              <h1 className="dashboard-container">Wallet build in progress</h1>
            }
          />
        </Route>
        <Route
          path="/*"
          element={
            <h1 className="dashboard-container">
              not found login:<Link to={"/"}></Link>
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
