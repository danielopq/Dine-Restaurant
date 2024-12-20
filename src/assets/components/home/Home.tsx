import './home.css';
import { HomeHeader, EnjoyablePlace, LocallySourcedFood, Highlights, Slide } from './components'
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <EnjoyablePlace />
            <LocallySourcedFood />
            <Highlights />
            <Slide />
        </main>
    )
}
export default Home;