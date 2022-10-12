// Index.js 
// This is the structure of the whole website
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Background from './components/Background';
import Navbar from './components/Navbar';
import '../src/styles/Index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div id="main">
        {/* <Navbar /> */}
        <Background />
        {/* <App /> */}
    </div>
   
);


