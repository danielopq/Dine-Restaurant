import './bookingForm.css';
import handleForm from './services/handleForm';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';

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
                        <p>Pick a date</p>
                        <p id="dateError" className='error'></p>
                    </div>
                    <div>
                        <input id="day" className="shortInput valid" type='text' placeholder='DD'></input>
                        <input id="month" className="shortInput valid" type='text' placeholder='MM'></input>
                        <input id="year" className="longInput valid" type='text' placeholder='YYYY'></input>
                    </div>
                </div>
                <div id="timeLine" className='formLine'>
                    <div>
                        <p>Pick a time</p>
                        <p id="timeError" className='error'></p>
                    </div>
                    <div>
                        <input id="day" className="shortInput valid" type='text' placeholder='HH'></input>
                        <input id="month" className="shortInput valid" type='text' placeholder='MM'></input>
                        <input id="year" className="longInput valid" type='text' placeholder='AM'></input>
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
        </form>
    )
}
export default BookingForm;