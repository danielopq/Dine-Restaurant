import './home.css';
import { HomeHeader, EnjoyablePlace, LocallySourcedFood, Highlights, Slide, HomeFooter } from './components'

/**
 * Component that renders the home page of the website.
 * 
 * @returns {JSX.Element} - Home page of the website.
 */
const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <main id="home">
                <HomeHeader />
                {/* <EnjoyablePlace />
                <LocallySourcedFood />
                <Highlights />
                <Slide /> */}
            </main>
            {/* <HomeFooter /> */}
        </>

    )
}
export default Home;