import './slideNavBar.css';
import SlideNavBarButton from './slideNavBarButton/SlideNavBarButton';


interface SlideNavBarProps{
    displayedEvents:boolean[];
    setSlide:(slideEvent:number)=>void;
}

/**
 * SlideNavBar Component
 * 
 * Renders a navigation bar for navigating through different events offered by the restaurant.
 * Each button in the navigation bar corresponds to a specific event type.
 * 
 * @component
 * @param {SlideNavBarProps} props - The properties for the SlideNavBar component.
 * @param {boolean[]} props.displayedEvents - An array indicating which buttons are active (true for active, false for inactive).
 * @param {function} props.setSlide - A function to update and display the selected event.
 * @returns {JSX.Element} The SlideNavBar component.
 */
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