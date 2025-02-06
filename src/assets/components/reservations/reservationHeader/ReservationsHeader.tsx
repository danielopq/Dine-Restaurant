import './reservationsHeader.css';
import BookingForm from './bookingForm/BookingForm';

/**
 * Component that renders the header of the reservations section.
 * 
 * @returns {JSX.Element} The ReservationsHeader component.
 */

const ReservationsHeader: React.FC = () => {
    return (
        <header id="reservationsHeader">
            <div id="reservations-text">
                <h1>Reservations</h1>
                <p className='mediumText'>
                    We can’t wait to host you. If you have any special requirements please feel
                    free to call on the phone number below. We’ll be happy to accommodate you.
                </p>
            </div>
            <BookingForm/>
        </header>
    )
}
export default ReservationsHeader;