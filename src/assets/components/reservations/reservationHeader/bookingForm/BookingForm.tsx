import './bookingForm.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';

const BookingForm: React.FC = () => {
    return (
        <div id="bookingForm">
            <div className='formLine'>
                <input id="" type='text' placeholder='Name'></input>
                <p></p>
            </div>
            <div className='formLine'>
                <input id="" type='text' placeholder='Email'></input>
                <p></p>
            </div>
            <div className='formLine'>
                <p>Pick a date</p>
                <div></div>
            </div>
            <div className='formLine'>
                <p>Pick a time</p>
            </div>
            <div className='formLine'>
                <p>-</p>
                <p>4 people</p>
                <p>+</p>
            </div>
            <DefaultButton text='MAKE RESERVATION' buttonType='darkBt'/>
        </div>
    )
}
export default BookingForm;