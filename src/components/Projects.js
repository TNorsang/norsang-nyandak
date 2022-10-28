import ReactDOM from 'react-dom';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component } from 'react';

function Projects() {
    return (
        <div className='Container'>
            <div className="Projects">
                <span id="text">Hello</span>                
                <FontAwesomeIcon icon={regular('hand')} id="hand" />
            </div>
        </div>
    );
}


export default Projects;