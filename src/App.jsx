import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
// import Map from "./components/Map";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </>
  );
}

export default App;
