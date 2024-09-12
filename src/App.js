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
      <div className="min-h-screen h-auto w-full bg-backgroundBlue">
        <Routes>
          <Route path="/" element={<Norsang />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <NavBar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 9 }}
          className="text-white flex flex-row space-x-4 fixed text-[12px] bottom-4 sm:text-[16px] sm:bottom-16 justify-center w-full"
        />
      </div>
    </Router>
  );
}

export default App;
