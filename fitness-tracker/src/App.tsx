import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/forms/Login";
import Regester from "./components/forms/Regester";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/user/:username" element={<Dashboard />} />
        <Route path="/*" element={<h1>not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
