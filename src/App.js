// App.js 
import './App.css';
import React, { useState } from 'react'
import DayNightToggle from 'react-day-and-night-toggle'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div className="App">
      <DayNightToggle 
      id="dn" 
      onChange={() => setIsDarkMode(!isDarkMode)}
      checked={isDarkMode} /> 
      <h1>Norsang Nyandak Portfolio</h1>
      <h2>Coming Soon!</h2>
    </div>
  );
}

export default App;


