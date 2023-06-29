import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
<<<<<<< HEAD
// import Map from "./components/Map";


=======
import Test from "./pages/Test";
import Profile from "./pages/Profile"
>>>>>>> 152c247d0b0d6a7e35c8badad46f8b47378fdec6

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
<<<<<<< HEAD
        {/* <Route path="/map" element={<Map />} /> */}
=======
        <Route path="/test" element={<Test />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<Profile />} />

>>>>>>> 152c247d0b0d6a7e35c8badad46f8b47378fdec6
      </Routes>
    </>
  );
}

export default App;
