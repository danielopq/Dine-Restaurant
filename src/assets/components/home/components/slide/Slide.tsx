import { useEffect, useState } from 'react';
import './slide.css';
import NavigateTo from '../../../../services/NavigateTo';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import { SlideEvents, SlidePicture, SlideNavBar, SlideText } from './index';

/**
 * Slide Component
 * 
 * Displays a slideshow featuring different events offered by the restaurant. 
 * The component includes images, descriptive text, and navigation options for users 
 * to manually or automatically transition between slides.
 * 
 * @returns {JSX.Element} The Slide component containing the slideshow.
 */
const Slide: React.FC = (): JSX.Element => {
    const [currentEvent,setCurrentEvent] = useState<number>(0);
    const [displayedEvents, setDisplayedEvents] = useState<boolean[]>([true, false, false]);

    /**
     * Updates the current slide and sets the visibility of the corresponding event.
     * 
     * @param {number} slideEvent - The index of the event to display.
     */
    const setSlide = (slideEvent: number): void => {
        const newDisplayedEvents: boolean[] = [false, false, false];
        newDisplayedEvents[slideEvent] = true;
        setDisplayedEvents(newDisplayedEvents);
        setCurrentEvent(slideEvent);
    }

    /**
     * Automatically transitions to the next slide at a set interval.
     * If the current slide is the last one, it loops back to the first slide.
     */
    useEffect(() => {
        const runSlide = () => {
            (currentEvent === displayedEvents.length - 1) ? setSlide(0) : setSlide(currentEvent + 1);
        };
        const intervalId = setInterval(runSlide, 5000);
        return () => clearInterval(intervalId);
    }, [currentEvent]);

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
                <DefaultButton text='BOOK A TABLE' buttonStyle='darkBt' handleClick={NavigateTo('/reservation')}/>
                <SlideNavBar displayedEvents={displayedEvents} setSlide={setSlide} />
            </div>
        </section>
    )
}
export default Slide;