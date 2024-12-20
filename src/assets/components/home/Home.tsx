import './home.css';
import { HomeHeader, EnjoyablePlace, LocallySourcedFood, Highlights, Slide, Footer } from './components'
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <EnjoyablePlace />
            <LocallySourcedFood />
            <Highlights />
            <Slide />
            <Footer />
        </main>
    )
}
export default Home;