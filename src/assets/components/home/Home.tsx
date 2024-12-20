import './home.css';
import { HomeHeader, EnjoyablePlace } from './components'
const Home: React.FC = () => {
    return (
        <main id="home">
            <HomeHeader />
            <EnjoyablePlace />
        </main>
    )
}
export default Home;