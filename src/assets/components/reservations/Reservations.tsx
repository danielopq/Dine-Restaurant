import './reservations.css';
import FooterDetails from '../shared/footerDetails/footerDetails';
import ReservationsHeader from './reservationHeader/ReservationsHeader';

const Reservations: React.FC = () => {
    return (
        <main id="reservations">
            <ReservationsHeader />
            <FooterDetails />
        </main>
    )
}
export default Reservations;