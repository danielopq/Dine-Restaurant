import './home.css';
import { HomeHeader, EnjoyablePlace, LocallySourcedFood } from './components'
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <EnjoyablePlace />
            <LocallySourcedFood />
        </main>
    )
}
export default Home;