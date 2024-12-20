import './locallySourcedFood.css';

/**
 * Renders the section "locallySourcedFood";
 * 
 * @returns {JSX.Element} - A React component displaying locally sourced food information.
 */
const LocallySourcedFood: React.FC = () => {
    return (
        <section id="locallySourcedFood">
            <div id="lsf-content">
                <h2>The most locally sourced food</h2>
                <p className='mediumText'>
                    All our ingredients come directly from our farm or local fishery.
                    So you can be sure that you’re eating the freshest, most sustainable food.
                </p>
            </div>
            <div id="lsf-Pic">
                <div></div>
            </div>
        </section>
    )
}
export default LocallySourcedFood;