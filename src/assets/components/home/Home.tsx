import './home.css';
import { HomeHeader, EnjoyablePlace, LocallySourcedFood, Highlights, Slide, HomeFooter } from './components'
const Home: React.FC = () => {
    return (
        <>
            <main id="home">
                <HomeHeader />
                <EnjoyablePlace />
                <LocallySourcedFood />
                <Highlights />
                <Slide />
            </main>
            <HomeFooter />
        </>

    )
}
export default Home;