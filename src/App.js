import "./App.css";
import Norsang from "./components/Norsang";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="w-full bg-backgroundBlue h-[100svh]">
        {/* Main content area grows to fill the available space */}
        <Routes>
          <Route path="/" element={<Norsang />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
