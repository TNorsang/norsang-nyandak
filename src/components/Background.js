import ReactDOM from 'react-dom';
import '../styles/Background.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'; 

// If I want each icon to behave a certain way I can't put them in a row  
function Background(){
    return (
        <div className="Background">
            <div class="x">
                <FontAwesomeIcon icon={brands('css3')} class="icons" id="css"/>
            </div>      
            <div class="x2">        
                <FontAwesomeIcon icon={brands('github')} class="icons" id="github"/>
            </div>
            <div class="x3">
                <FontAwesomeIcon icon={solid('code')} class="icons" id="code"/>
            </div>
            <div class="x4">
                <FontAwesomeIcon icon={solid('music')} class="icons" id="music"/>
            </div>
            <div class="x5">
                <FontAwesomeIcon icon={solid('person')} class="icons" id="person"/>
            </div>
            <div class="x6">
                <FontAwesomeIcon icon={solid('fish')} class="icons" id="fish"/>
            </div>
            <div class="x7">
               <FontAwesomeIcon icon={brands('python')} class="icons" id="python"/>
            </div>
                        
                        
                        
                        
                        
                        <FontAwesomeIcon icon={solid('rocket')} class="icons" id="rocket"/>
                        <FontAwesomeIcon icon={solid('brain')} class="icons" id="brain"/>
                        <FontAwesomeIcon icon={solid('motorcycle')} class="icons" id="motorcycle"/>
                        <FontAwesomeIcon icon={solid('robot')} class="icons" id="robot"/>
                        <FontAwesomeIcon icon={brands('square-js')} class="icons" id="square-js"/>
                        <FontAwesomeIcon icon={brands('java')} class="icons" id="java"/>
                        <FontAwesomeIcon icon={solid('laptop-code')} class="icons" id="laptop-code"/>
                        <FontAwesomeIcon icon={brands('stack-overflow')} class="icons" id="stack-overflow"/>
                        <FontAwesomeIcon icon={brands('html5')} class="icons" id="html5"/>
                        <FontAwesomeIcon icon={solid('dumbbell')} class="icons" id="dumbbell"/>
                        <FontAwesomeIcon icon={brands('react')} class="icons" id="react"/>
                        <FontAwesomeIcon icon={solid('yin-yang')} class="icons" id="yin-yang"/>
                        <FontAwesomeIcon icon={solid('dog')} class="icons" id="dog"/>
                        <FontAwesomeIcon icon={solid('cat')} class="icons" id="cat"/>
                        <FontAwesomeIcon icon={solid('earth-americas')} class="icons" id="earth-americas"/>
                        <FontAwesomeIcon icon={solid('fish')} class="icons" id="fish"/>
                        <FontAwesomeIcon icon={brands('google')} class="icons" id="google" />
            
        </div>
    );
}
export default Background;