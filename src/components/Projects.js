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
                <span id="text">About Me</span>
                <div class="circles">
                    <a href="https://github.com/TNorsang" target="_blank" >
                        <FontAwesomeIcon icon={brands('github')} id="git" class="git" />
                    </a>


                    <a href="https://github.com/TNorsang" target="_blank" >
                        <FontAwesomeIcon icon={brands('github')} id="git1" class="git" />
                    </a>

                    <a href="https://github.com/TNorsang" target="_blank" >
                        <FontAwesomeIcon icon={brands('github')} id="git2" class="git" />
                    </a>

                    <a href="https://github.com/TNorsang" target="_blank" >
                        <FontAwesomeIcon icon={brands('github')} id="git3" class="git" />
                    </a>

                    <a href="https://github.com/TNorsang" target="_blank" >
                        <FontAwesomeIcon icon={brands('github')} id="git4" class="git" />
                    </a>
                </div>

            </div>
        </div>
    );
}


export default Projects;