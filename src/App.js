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
      <div>
        {/* Main content area grows to fill the available space */}
        <Routes>
          <Route path="/" element={<Norsang />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Navbar positioned at the bottom of the content */}
        <div className="relative bottom-20">
          <NavBar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 9 }}
            className="text-textBlue flex flex-row space-x-4 justify-center"
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
