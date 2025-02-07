import React from 'react';
import './slideText.css';

interface SlideTextProps{
    title:string;
    text:string;
    visible:boolean;
}

/**
 * SlideText Component
 * 
 * Displays a title and text for an event type offered by the restaurant. 
 * The component adjusts its visibility based on the `visible` property.
 * 
 * @param {Object} props - Component properties
 * @param {string} props.title - The title of the event
 * @param {string} props.text - The description text of the event
 * @param {boolean} props.visible - Whether the component is visible or not
 * @returns {JSX.Element} SlideText component
 */
const SlideText: React.FC<SlideTextProps> = ({title,visible,text}: { title: string; text: string; visible: boolean; }): JSX.Element => {
    return (
        <div className='slideText' style={{opacity:visible ? '1' : '0'}}>
            <h2>{title}</h2>
            <p className='mediumText'>{text}</p>
        </div>
    )
}
export default SlideText;