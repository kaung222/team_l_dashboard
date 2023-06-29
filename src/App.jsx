import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile"
import Guard from "./components/Grard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Guard> <Dashboard /> </Guard> } />
        {/* <Route path="/map" element={<Map />} /> */}
        <Route path="/test" element={<Test />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>
    </>
  );
}

export default App;
