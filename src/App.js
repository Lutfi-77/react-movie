import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/home/Landing";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-primary w-full h-full">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
