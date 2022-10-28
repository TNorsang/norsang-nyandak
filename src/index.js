// Index.js is the structure of the whole website

import '../src/styles/Index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './components/Background';
import Abouts from './components/Abouts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div id="main">
        <Background />
        <Abouts />
    </div>
   
);


