import './reservations.css';
import FooterDetails from '../shared/footerDetails/FooterDetails';
import ReservationsHeader from './reservationHeader/ReservationsHeader';

/**
 * Component that renders the reservations section of the website.
 *
 * @returns {JSX.Element} The Reservations component.
 */
const Reservations: React.FC = (): JSX.Element => {
    return (
        <main id="reservations">
            <ReservationsHeader />
            {/* <FooterDetails /> */}
        </main>
    )
}
export default Reservations;