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
// import Media from 'react-media';

function Abouts() {
  return (
    <div className="Abouts">
      <div className="handsWaveContainer">
        <div className="gitLinkTwit">
          <a href="https://github.com/TNorsang" target="_blank" className="glt">
            <FontAwesomeIcon icon={brands("github")} id="gitH" className="pageIcon" />
          </a>
          <a href="https://www.linkedin.com/in/norsang-nyandak-077577173/" target="_blank" className="glt">
            <FontAwesomeIcon icon={brands("linkedin")} id="linked" className="pageIcon" />
          </a>
        </div>
        <div id="hello">
          <h1>Hello</h1>
        </div>
        <div className="hand">
          <FontAwesomeIcon icon={regular("hand")} id="hand" />
        </div>
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
