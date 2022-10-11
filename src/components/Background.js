import '../styles/Background.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' //

function Background(){
    return (
        <div className="Background">
            <section>
                <div class="row">
                    <div>
                        <FontAwesomeIcon icon={solid('user-secret')} class="icons" />
                        
                    </div>
                    
                </div>
            </section>
        </div>
    );
}
export default Background;