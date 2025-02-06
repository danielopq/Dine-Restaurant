import './bookingForm.css';
import {handleForm,showSelect,selectDaytime,handleGuests} from './services';

import DefaultButton from '../../../shared/defaultButton/DefaultButton';


/**
 * Component that renders the reservations form.
 * 
 * @returns {JSX.Element} The BookingForm component.
 */
const BookingForm: React.FC = () => {

    return (
        <form id="bkForm" onSubmit={handleForm}>
            <div id="bookingForm">
                <div id="nameLine" className='formLine'>
                    <input id="name" type='text' placeholder='Name'  className='valid'></input>
                    <p id="nameError" className='error'></p>
                </div>
                <div id="emailLine" className='formLine'>
                    <input id="email" type='text' placeholder='Email' className='valid'></input>
                    <p id="emailError" className='error'></p>
                </div>
                <div id="dateLine" className='formLine'>
                    <div>
                        <p id="pickDate">Pick a date</p>
                        <p id="dateError" className='error'></p>
                    </div>
                    <div>
                        <input id="day" className="shortInput valid" type='text' placeholder='DD' maxLength={2}></input>
                        <input id="month" className="shortInput valid" type='text' placeholder='MM' maxLength={2}></input>
                        <input id="year" className="longInput valid" type='text' placeholder='YYYY' maxLength={4}></input>
                    </div>
                </div>
                <div id="timeLine" className='formLine'>
                    <div>
                        <p id="pickTime">Pick a time</p>
                        <p id="timeError" className='error'></p>
                    </div>
                    <div>
                        <input id="hour" className="shortInput valid" type='text' placeholder='HH' maxLength={2}></input>
                        <input id="minutes" className="shortInput valid" type='text' placeholder='MM' maxLength={2}></input>
                        <input id="dayTime" className="longInput valid" type='text' placeholder='-' readOnly disabled></input>
                        <button id="dayTimeBt" type="button" className="arrowDown" onClick={showSelect}></button>
                        <div id="dayTimeselect" style={{display:'none'}}>
                            <button id="am-button" type="button" className='selectButton' onClick={selectDaytime}>AM</button>
                            <button id="pm-button" type="button" className='selectButton' onClick={selectDaytime}>PM</button>
                        </div>
                    </div>
                </div>

                <div id="guestsLine" className='formLine'>
                    <button id="restPeopleBt" type="button" className='setPeopleBt' onClick={handleGuests}></button>
                    <p id="people"><span id="guestsNumber">0</span> people</p>
                    <button id="addPeopleBt" type="button" className='setPeopleBt' onClick={handleGuests}></button>
                </div>
                <DefaultButton text='MAKE RESERVATION' buttonStyle='darkBt' buttonType='submit' />
            </div>
        </form>
    )
}
export default BookingForm;