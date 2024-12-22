import './slide.css';
import SlidePicture from './slidePicture/SlidePicture';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import SlideNavBar from './slideNavBar/SlideNavBar';

const Slide:React.FC = ()=>{
    return(
        <section id="slide">
            <div id="slideImages">
                <SlidePicture/>
            </div>
            <div id="slide-navigator">
                <DefaultButton text='BOOK A TABLE' buttonType='darkBt'/>
                <SlideNavBar/>
            </div>
        </section>
    )
}
export default Slide;