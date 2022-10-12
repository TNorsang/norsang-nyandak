// Index.js is the structure of the whole website


import '../src/styles/Index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import Background from './components/Background';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div id="main">
        <Background />
    </div>
   
);


