import './highlights.css';

const Highlights: React.FC = () => {
    return (
        <section id="highlights">
            <div>
                <div id="highlights-content">
                    <h2>A few highlights from our menu</h2>
                    <p className='mediumText'>
                        We cater for all dietary requirements, but here’s a glimpse
                        at some of our diner’s favourites. Our menu is revamped every season.
                    </p>
                </div>
                <div id="highlights-dishes">
                    <div className='dish'>
                        <div className='dish-pic'>
                            <div></div>
                        </div>
                        <div className='dish-content'>
                            <h3>Seared Salmon Fillet</h3>
                            <p className='smallText'>
                                Our locally sourced salmon served with a refreshing buckwheat summer salad.
                            </p>
                        </div>
                    </div>
                    <div className="dish-separator"></div>
                    <div className='dish'>
                        <div className='dish-pic'>
                            <div></div>
                        </div>
                        <div className='dish-content'>
                            <h3>Rosemary Filet Mignon</h3>
                            <p className='smallText'>
                                Our prime beef served to your taste with a delicious choice of seasonal sides.
                            </p>
                        </div>
                    </div>
                    <div className="dish-separator"></div>
                    <div className='dish'>
                        <div className='dish-pic'>
                            <div></div>
                        </div>
                        <div className='dish-content'>
                            <h3>Summer Fruit Chocolate Mousse</h3>
                            <p className='smallText'>
                                Creamy mousse combined with summer fruits and dark chocolate shavings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights;