import ReactDOM from 'react-dom';
import '../styles/Background.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'; 

function Background(){
    return (
        <div className="Background">
            <section>
                <div class="row1">
                    <div>
                        <FontAwesomeIcon icon={brands('css3')} class="icons" id="css"/>
                        <FontAwesomeIcon icon={brands('github')} class="icons" id="github"/>
                        <FontAwesomeIcon icon={solid('code')} class="icons" id="code"/>
                        <FontAwesomeIcon icon={solid('music')} class="icons" id="music"/>
                        <FontAwesomeIcon icon={solid('person')} class="icons" id="person"/>
                        <FontAwesomeIcon icon={solid('fish')} class="icons" id="fish"/>
                    </div>
                </div>
                <div class="row2">
                    <div>
                        <FontAwesomeIcon icon={brands('python')} class="icons" id="python"/>
                        <FontAwesomeIcon icon={solid('rocket')} class="icons" id="rocket"/>
                        <FontAwesomeIcon icon={solid('brain')} class="icons" id="brain"/>
                        <FontAwesomeIcon icon={solid('motorcycle')} class="icons" id="motorcycle"/>
                        <FontAwesomeIcon icon={solid('robot')} class="icons" id="robot"/>
                        <FontAwesomeIcon icon={brands('square-js')} class="icons" id="square-js"/>
                    </div>
                </div>
                <div class="row3">
                    <div>
                        
                        <FontAwesomeIcon icon={brands('java')} class="icons" id="java"/>
                        <FontAwesomeIcon icon={solid('laptop-code')} class="icons" id="laptop-code"/>
                        <FontAwesomeIcon icon={brands('stack-overflow')} class="icons" id="stack-overflow"/>
                        <FontAwesomeIcon icon={brands('html5')} class="icons" id="html5"/>
                        <FontAwesomeIcon icon={solid('dumbbell')} class="icons" id="dumbbell"/>
                        <FontAwesomeIcon icon={brands('react')} class="icons" id="react"/>
                    </div>
                </div>
                <div class = "row4">
                    <div>
                        <FontAwesomeIcon icon={solid('yin-yang')} class="icons" id="yin-yang"/>
                        <FontAwesomeIcon icon={solid('dog')} class="icons" id="dog"/>
                        <FontAwesomeIcon icon={solid('cat')} class="icons" id="cat"/>
                        <FontAwesomeIcon icon={solid('earth-americas')} class="icons" id="earth-americas"/>
                        <FontAwesomeIcon icon={solid('fish')} class="icons" id="fish"/>
                        <FontAwesomeIcon icon={brands('google')} class="icons" id="google"/>
                    </div>  
                </div>
            </section>
        </div>
    );
}
export default Background;