import './slideNavBar.css';

import SlideNavBarButton from './slideNavBarButton/slideNavBarButton';

interface SlideNavBarProps{
    displayedEvents:boolean[];
    setSlide:(slideEvent:number)=>void;
}

const SlideNavBar:React.FC<SlideNavBarProps> = ({displayedEvents,setSlide}) => {
    return (
        <nav id="slideNavBar">
            <SlideNavBarButton text={'FAMILY GATHERING'} disabled={displayedEvents[0]} setSlide={setSlide} slideEvent={0}/>
            <SlideNavBarButton text={'SPECIAL EVENTS'} disabled={displayedEvents[1]} setSlide={setSlide} slideEvent={1}/>
            <SlideNavBarButton text={'SOCIAL EVENTS'} disabled={displayedEvents[2]} setSlide={setSlide} slideEvent={2}/>
        </nav>
    )
}
export default SlideNavBar;