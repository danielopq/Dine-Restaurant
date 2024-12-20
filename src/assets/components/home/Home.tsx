import './home.css';
import { HomeHeader, EnjoyablePlace, LocallySourcedFood, Highlights } from './components'
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <EnjoyablePlace />
            <LocallySourcedFood />
            <Highlights />
        </main>
    )
}
export default Home;