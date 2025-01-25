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
                    <input ref={refDay} id="day" className="shortInput" type='text' placeholder='DD'></input>
                    <input ref={refMonth} id="month" className="shortInput" type='text' placeholder='MM'></input>
                    <input ref={refYear} id="year" className="longInput" type='text' placeholder='YYYY'></input>
                </div>
            </div>
            <div id="timeLine" className='formLine'>
                <div>
                    <p>Pick a time</p>
                    <p ref={refTimeError} className='error'></p>
                </div>
                <div>
                    <input ref={refHour} id="day" className="shortInput" type='text' placeholder='HH'></input>
                    <input ref={refMinutes} id="month" className="shortInput" type='text' placeholder='MM'></input>
                    <input ref={refDayTime} id="year" className="longInput" type='text' placeholder='AM'></input>
                    <button id="dayTimeBt"></button>
                    <div id="dayTimeselect">
                        <button id="am-button" className='selectButton'>AM</button>
                        <button id="pm-button" className='selectButton'>PM</button>
                    </div>
                </div>
            </div>

            <div id="guestsLine" className='formLine'>
                <button id="restPeopleBt" className='setPeopleBt'></button>
                <p>4 people</p>
                <button id="addPeopleBt" className='setPeopleBt'></button>
            </div>
            <DefaultButton text='MAKE RESERVATION' buttonType='darkBt' />
        </div>
    )
}
export default BookingForm;