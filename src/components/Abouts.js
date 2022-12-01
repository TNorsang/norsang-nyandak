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

      <div id="html" class="btnStyle">
        <h1>HTML</h1>
        <span id="htmlInfo"></span>
      </div>
      <div id="php" class="btnStyle">
        <h1>PHP</h1>
      </div>
      <div id="cssText" class="btnStyle">
        <h1>CSS</h1>
      </div>
      <div id="javaText" class="btnStyle">
        <h1>JAVA</h1>
      </div>
      <div id="pythonText" class="btnStyle">
        <h1>PYTHON</h1>
      </div>
      <div id="cplus" class="btnStyle">
        <h1>C++</h1>
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
// let html = document.getElementById("html");
// html.addEventListener("mouseover", showText);
// function showText() {
//   let info = document.getElementById("htmlInfo");
//   info.innerHTML = "HTML IS AWESOME!";
// }

export default Abouts;
