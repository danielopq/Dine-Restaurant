import './bookingForm.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import { useRef } from 'react';

const BookingForm: React.FC = () => {
    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const refDay = useRef<HTMLInputElement>(null);
    const refMonth = useRef<HTMLInputElement>(null);
    const refYear = useRef<HTMLInputElement>(null);
    const refHour = useRef<HTMLInputElement>(null);
    const refMinutes = useRef<HTMLInputElement>(null);
    const refDayTime = useRef<HTMLInputElement>(null);
    const refNameError = useRef<HTMLParagraphElement>(null);
    const refEmailError = useRef<HTMLParagraphElement>(null);
    const refDateError = useRef<HTMLParagraphElement>(null);
    const refTimeError = useRef<HTMLParagraphElement>(null);
    return (
        <div id="bookingForm">
            <div id="nameLine" className='formLine'>
                <input ref={refName} id="name" type='text' placeholder='Name'></input>
                <p ref={refNameError} className='error'></p>
            </div>
            <div id="emailLine" className='formLine'>
                <input ref={refEmail} id="email" type='text' placeholder='Email'></input>
                <p ref={refEmailError} className='error'></p>
            </div>
            <div id="dateLine" className='formLine'>
                <div>
                    <p>Pick a date</p>
                    <p ref={refDateError} className='error'></p>
                </div>
                <div>
                    <input ref={refDay} id="day" type='text' placeholder='DD'></input>
                    <input ref={refMonth} id="month" type='text' placeholder='MM'></input>
                    <input ref={refYear} id="year" type='text' placeholder='YYYY'></input>
                </div>
            </div>
            <div id="timeLine" className='formLine'>
                <div>
                    <p>Pick a time</p>
                    <p ref={refTimeError} className='error'></p>
                </div>
                <div>
                    <input ref={refHour} id="day" type='text' placeholder='HH'></input>
                    <input ref={refMinutes} id="month" type='text' placeholder='MM'></input>
                    <input ref={refDayTime} id="year" type='text' placeholder='AM'></input>
                </div>
            </div>

            <div id="guestsLine" className='formLine'>
                <p>-</p>
                <p>4 people</p>
                <p>+</p>
            </div>
            <DefaultButton text='MAKE RESERVATION' buttonType='darkBt' />
        </div>
    )
}
export default BookingForm;