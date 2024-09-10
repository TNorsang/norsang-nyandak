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
      <div className="App">
        <Routes>
          <Route path="/" element={<Norsang />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <NavBar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 9 }}
          className="text-white flex flex-row space-x-4 fixed bottom-4 sm:bottom-16 justify-center w-full"
        />
      </div>
    </Router>
  );
}

export default App;
