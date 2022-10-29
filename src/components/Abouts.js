import ReactDOM from "react-dom";
import "../styles/Abouts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { Component } from "react";

function Abouts() {
  return (
    <div className="Abouts">
      <div class="containA">
        <div id="hello">
          <h1>Hello</h1>
        </div>
        <div class="hand">
          <FontAwesomeIcon icon={regular("hand")} id="hand" />
        </div>
      </div>
      <div class="bio">
        <p >
          My name is Norsang Nyandak and I am a devoted Software Developer. 
          I enjoy expressing my creative side through programming.
        </p>
      </div>
      {/* <h1 id="hello">Hello</h1>
        <FontAwesomeIcon icon={regular("hand")} id="hand" />
      <div id="bio">
        <p>My name is Norsang Nyandak.</p>
      </div> */}
    </div>
  );
}

export default Abouts;
