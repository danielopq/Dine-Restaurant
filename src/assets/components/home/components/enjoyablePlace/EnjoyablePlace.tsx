import './enjoyablePlace.css';

/**
 * Represents the 'EnjoyablePlace' section of the website.
 * 
 * @returns {JSX.Element} - The 'EnjoyablePlace' component displaying the section content.
 */
const EnjoyablePlace:React.FC = () =>{
    return(
        <section id="enjoyablePlace">
            <div id="enjoyablePlace-pic"></div>
            <div id="enjoyablePlace-content">
                <h2>Enjoyable place for all the family</h2>
                <p className='mediumText'>
                    Our relaxed surroundings make dining with us a great 
                    experience for everyone. We can even arrange a tour 
                    of the farm before your meal.
                </p>
            </div>
        </section>
    )
}
export default EnjoyablePlace;