import React from 'react';
import './slideText.css';

interface SlideTextProps{
    title:string;
    // text:string;
    // zIndex:number;
    visible:boolean;
}

const SlideText: React.FC<SlideTextProps> = ({title,visible}) => {
    return (
        <div className='slideText' style={{opacity:visible ? '1' : '0'}}>
            <h2>{title}</h2>
            <p className='mediumText'>
                We love catering for entire families. So please bring everyone
                along for a special meal with your loved ones. We’ll provide a
                memorable experience for all.
            </p>
        </div>
    )
}
export default SlideText;