import ReactDOM from 'react-dom';
import '../styles/Abouts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component } from 'react';

function Abouts() {
    return (
        <div className="Abouts">
            <h1>
  <span>always be</span>
  <div class="message">
    <div class="word1">close</div>
    <div class="word2">code</div>
    <div class="word3">creating</div>
  </div>
</h1>
            <div><FontAwesomeIcon icon={regular('hand')} id="hand" /></div>     
            <div id="bio"><p>My name is Norsang Nyandak.</p></div>
        </div>
    );
}


export default Abouts;