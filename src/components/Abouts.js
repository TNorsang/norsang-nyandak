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
      <div class="handsWaveContainer">
        <div id="hello">
          <h1>Hello</h1>
        </div>
        <div class="hand">
          <FontAwesomeIcon icon={regular("hand")} id="hand" />
        </div>
      </div>
      <div id="cplus">
        <h1>C++</h1>
      </div>
      <div id="html">
        <h1>HTML</h1>
      </div>
      <div id="cssText">
        <h1>CSS</h1>
      </div>
      <div id="javaText">
        <h1>JAVA</h1>
      </div>
      <div id="pythonText">
        <h1>PYTHON</h1>
      </div>
      {/* <div class="profileImg">
        <img src={require("../assets/profileimage.jpeg")} id="pImg" />
        <div class="overlay">
          <div class="text">Hello</div>
        </div>
      </div> */}
    </div>
  );
}

export default Abouts;
