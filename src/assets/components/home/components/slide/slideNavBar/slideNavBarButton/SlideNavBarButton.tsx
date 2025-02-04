import './slideNavBarButton.css';

interface SlideNavBarButtonProps{
    text:string;
    disabled:boolean;
    setSlide: (slideEvent:number) => void;
    slideEvent:number;
}

/**
 * Renders a button in the slide navigation bar, allowing navigation through  
 * the different special events offered by the restaurant.
 * 
 * @param param0 - Component props.
 * @param {string} param0.text - The text displayed on the button.
 * @param {boolean} param0.disabled - Indicates whether the button is disabled.
 * @param {function} param0.setSlide - Function to update the displayed special event.
 * @param {number} param0.slideEvent - The special event to be displayed.
 * @returns A React component representing a navigation button.
 */
const SlideNavBarButton: React.FC<SlideNavBarButtonProps> = ({text,disabled,setSlide,slideEvent}) => {
    return (
        <div className='slideNavBarButton'>
            <div className="snb-line" style={{backgroundColor: disabled ? 'var(--Beaver)' : 'white'}}></div>
            <div className={disabled ? 'snb-disabled' : 'snb-enabled'} onClick={()=>setSlide(slideEvent)}>{text.toUpperCase()}</div>
        </div>
    )
}
export default SlideNavBarButton;