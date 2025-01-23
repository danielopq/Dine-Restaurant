import './bookingForm.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import { useRef } from 'react';

const BookingForm: React.FC = () => {
    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refNameError = useRef<HTMLParagraphElement>(null);
    const refEmailError = useRef<HTMLParagraphElement>(null);
    return (
        <div id="bookingForm">
            <div id="nameLine" className='formLine'>
                <input ref={refName} id="name" type='text' placeholder='Name'></input>
                <p ref={refNameError}>This field is required</p>
            </div>
            <div id="emailLine" className='formLine'>
                <input ref={refEmail} id="email" type='text' placeholder='Email'></input>
                <p ref={refEmailError}>This field is required</p>
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