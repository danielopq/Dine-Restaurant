import { useState } from 'react';
import './slide.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';

import {SlideEvents,SlidePicture,SlideNavBar,SlideText} from './index';

const Slide:React.FC = ()=>{
    const [displayedEvents, setDisplayedEvents] = useState<boolean[]>([true,false,false]);

    const setSlide = (slideEvent:number):void =>{
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
                <SlideText title={SlideEvents[0].title} visible={displayedEvents[0]}/>
                <SlideText title={SlideEvents[1].title} visible={displayedEvents[1]}/>
                <SlideText title={SlideEvents[2].title} visible={displayedEvents[2]}/>
                <DefaultButton text='BOOK A TABLE' buttonType='darkBt'/>
                <SlideNavBar displayedEvents={displayedEvents} setSlide={setSlide}/>
            </div>
        </section>
    )
}
export default Slide;