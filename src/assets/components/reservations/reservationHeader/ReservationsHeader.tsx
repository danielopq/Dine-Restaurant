import './reservationsHeader.css';
import { handleForm } from './bookingForm/services';
import BookingForm from './bookingForm/BookingForm';
import DefaultButton from '../../shared/defaultButton/DefaultButton';

/**
 * Component that renders the header of the reservations section.
 * 
 * @returns {JSX.Element} The ReservationsHeader component.
 */

const ReservationsHeader: React.FC = (): JSX.Element => {

    const handleClick = () =>{
        handleForm();
    }
    return (
        <header id="reservationsHeader">
            {/* <div id="reservations-text">
                <h1>Reservations</h1>
                <p className='mediumText'>
                    We can’t wait to host you. If you have any special requirements please feel
                    free to call on the phone number below. We’ll be happy to accommodate you.
                </p>
                <DefaultButton text='RESERVE PLACE' buttonStyle='lightBt' handleClick={handleClick}/>
            </div> */}
            <BookingForm/>
        </header>
    )
}
export default ReservationsHeader;