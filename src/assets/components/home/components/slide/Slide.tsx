import './slide.css';
import SlidePicture from './slidePicture/SlidePicture';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import SlideNavBar from './slideNavBar/SlideNavBar';
import SlideText from './slideText/SlideText';
import { useState } from 'react';

const Slide:React.FC = ()=>{
    const [displayedEvents, setDisplayedEvents] = useState<boolean[]>([true,false,false]);

    const setSlide = (slideEvent:number):void =>{
        console.log(slideEvent);
        const newDisplayedEvents:boolean[] = [false,false,false];
        newDisplayedEvents[slideEvent] = true;
        setDisplayedEvents(newDisplayedEvents);
    }

    return(
        <section id="slide">
            <div id="slideImages">
                <SlidePicture/>
            </div>
            <div id="slide-navigator">
                <SlideText title='Family Gathering' visible={displayedEvents[0]}/>
                <SlideText title='Special Events' visible={displayedEvents[1]}/>
                <SlideText title='Social Events' visible={displayedEvents[2]}/>
                <DefaultButton text='BOOK A TABLE' buttonType='darkBt'/>
                <SlideNavBar displayedEvents={displayedEvents} setSlide={setSlide}/>
            </div>
        </section>
    )
}
export default Slide;