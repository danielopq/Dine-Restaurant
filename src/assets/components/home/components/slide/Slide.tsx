import './slide.css';
import SlidePicture from './slidePicture/SlidePicture';

const Slide:React.FC = ()=>{
    return(
        <section id="slide">
            <div id="slideImages">
                <SlidePicture/>
            </div>
            <div id="slide-content"></div>
        </section>
    )
}
export default Slide;