import { useState } from 'react';
import './slide.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';

import { SlideEvents, SlidePicture, SlideNavBar, SlideText } from './index';

const Slide: React.FC = () => {
    const [displayedEvents, setDisplayedEvents] = useState<boolean[]>([true, false, false]);

    const setSlide = (slideEvent: number): void => {
        const newDisplayedEvents: boolean[] = [false, false, false];
        newDisplayedEvents[slideEvent] = true;
        setDisplayedEvents(newDisplayedEvents);
    }

    return (
        <section id="slide">
            <div id="slideImages">
                <SlidePicture
                    visible={displayedEvents[0]}
                    desktopPic={SlideEvents[0].desktopPic}
                    tabletPic={SlideEvents[0].tabletPic}
                    mobilePic={SlideEvents[0].mobilePic}
                />
                <SlidePicture
                    visible={displayedEvents[1]}
                    desktopPic={SlideEvents[1].desktopPic}
                    tabletPic={SlideEvents[1].tabletPic}
                    mobilePic={SlideEvents[1].mobilePic}
                />
                <SlidePicture
                    visible={displayedEvents[2]}
                    desktopPic={SlideEvents[2].desktopPic}
                    tabletPic={SlideEvents[2].tabletPic}
                    mobilePic={SlideEvents[2].mobilePic}
                />
            </div>
            <div id="slide-navigator">
                <SlideText title={SlideEvents[0].title} text={SlideEvents[0].text} visible={displayedEvents[0]} />
                <SlideText title={SlideEvents[1].title} text={SlideEvents[1].text} visible={displayedEvents[1]} />
                <SlideText title={SlideEvents[2].title} text={SlideEvents[2].text} visible={displayedEvents[2]} />
                <DefaultButton text='BOOK A TABLE' buttonType='darkBt' />
                <SlideNavBar displayedEvents={displayedEvents} setSlide={setSlide} />
            </div>
        </section>
    )
}
export default Slide;