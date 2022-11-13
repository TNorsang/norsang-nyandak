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
      {/* <div class="bio">
        <p></p>
      </div> */}
    </div>
  );
}

export default Abouts;
