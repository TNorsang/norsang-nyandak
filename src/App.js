import "./App.css";
import Norsang from "./components/Norsang";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";

import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Norsang component will always be displayed */}
        <Routes>
          <Route path="/" element={<Norsang />} />

          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
