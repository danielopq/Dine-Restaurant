interface BookingDate {
    day: HTMLInputElement | null;
    month: HTMLInputElement | null;
    year: HTMLInputElement | null;
}

interface BookingTime {
    hour: HTMLInputElement | null;
    minutes: HTMLInputElement | null;
    dayTime: HTMLInputElement | null;
}

/**
 * Validates the different parts of the reservation form.
 * 
 * @param {React.FormEvent<HTMLFormElement> | undefined} event - The form submission event.
 */

export const handleForm = (event?: React.FormEvent<HTMLFormElement>): void => {
    let validated = true;
    event != undefined && event.preventDefault();
    !validateName() && (validated = false);
    !validateEmail() && (validated = false);
    !validateDate() && (validated = false);
    !validateTime() && (validated = false);
    !validatePeople() && (validated = false);
}

/* ################### FORM VALIDATING FUNCTIONS ################### */


/**
 * Checks the name field and displays an error message if it is empty.
 * 
 * @returns {boolean} - Returns false if the field is empty.
 */
const validateName = (): boolean => {
    let validated = false;
    const name = document.getElementById('name') as HTMLInputElement | null;
    const nameError = document.getElementById('nameError') as HTMLInputElement | null;

    if (name && nameError) {
        nameError.innerHTML = '';
        name.className = 'valid';
        if (validateFilled(name.value)) {
            validated = true;
        } else {
            nameError.innerHTML = 'This field is required';
            name.className = 'invalid';
        }
    }

    return validated;
}

/**
 * Checks the email field and displays an error message if it is empty or contains an invalid format.
 * 
 * @returns {boolean} - Returns false if the field is empty or the format is invalid.
 */
const validateEmail = (): boolean => {
    let validated = false;
    let messageError: string = '';

    const email = document.getElementById('email') as HTMLInputElement | null;
    const emailError = document.getElementById('emailError') as HTMLInputElement | null;

    if (email && emailError) {
        if (validateFilled(email.value) && validateEmailFormat(email.value)) {
            validated = true;
            email.className = 'valid';
        } else {
            validateFilled(email.value) ? messageError = 'Invalid email format' : messageError = 'This field is required';
            email.className = 'invalid';
        }
        emailError.innerHTML = messageError;
    }

    return validated;
}

/**
 * Checks the date fields and displays an error message if they are empty or contain an invalid date format.
 * 
 * @returns {boolean} - Returns false if any field is empty or the date is invalid.
 */
const validateDate = (): boolean => {
    let validated = true;
    let messageError: string = '';

    const pickDate = document.getElementById('pickDate') as HTMLInputElement | null;
    const dateError = document.getElementById('dateError') as HTMLInputElement | null;
    const bookingDate: BookingDate = {
        day: document.getElementById('day') as HTMLInputElement | null,
        month: document.getElementById('month') as HTMLInputElement | null,
        year: document.getElementById('year') as HTMLInputElement | null,
    }

    const { day, month, year } = bookingDate;

    if (day && month && year && pickDate && dateError) {
        Object.values(bookingDate).forEach((element) => {
            if (!validateFilled(element.value)) {
                validated = false;
                messageError = 'This field is incomplete';
            }
        })
        if (validated) {
            Object.values(bookingDate).forEach((element) => {
                if (!isNumber(element.value)) {
                    validated = false;
                    messageError = 'Fields must contain numbers';
                }
            })
        }
        if (validated) {
            validated = isValidDate(parseInt(day.value), parseInt(month.value), parseInt(year.value));
            !validated && (messageError = 'Invalid date');
        }
        if (validated) {
            validated = isFutureDate(parseInt(day.value), parseInt(month.value), parseInt(year.value));
            !validated && (messageError = 'Must be a future date');
        }

        Object.values(bookingDate).forEach((element) => {
            if (validated) {
                element.className = element === year ? 'longInput valid' : 'shortInput valid';
            } else {
                element.className = element === year ? 'longInput invalid' : 'shortInput invalid';
            }
        });

        pickDate.style.color = validated ? 'var(--CodGrey)' : 'var(--Red)';
        dateError.innerHTML = messageError;
    }

    return validated;
}

/**
 * Checks the time fields and displays an error message if they are empty, contain an invalid format, 
 * or if the selected time is outside the restaurant's booking hours.
 * 
 * @returns {boolean} - Returns false if any field is empty, the time is invalid, or out of range.
 */

const validateTime = (): boolean => {
    let validated = true;
    let messageError: string = '';

    const pickTime = document.getElementById('pickTime') as HTMLInputElement | null;
    const timeError = document.getElementById('timeError') as HTMLInputElement | null;
    const bookingTime: BookingTime = {
        hour: document.getElementById('hour') as HTMLInputElement,
        minutes: document.getElementById('minutes') as HTMLInputElement,
        dayTime: document.getElementById('dayTime') as HTMLInputElement,
    }

    const { hour, minutes, dayTime } = bookingTime;

    if (hour && minutes && dayTime && pickTime && timeError) {

        Object.values(bookingTime).forEach((element) => {
            element.className = element === dayTime ? 'longInput valid' : 'shortInput valid';
        });

        Object.values(bookingTime).forEach(element => {
            if (!validateFilled(element.value)) {
                validated = false;
                messageError = 'This field is incomplete';
                element.className = element === dayTime ? 'longInput invalid' : 'shortInput invalid';
            }
        })

        if (validated) {
            Object.values(bookingTime).forEach((element) => {
                if (!isNumber(element.value) && element != dayTime) {
                    validated = false;
                    messageError = 'Fields must contain numbers';
                    element.className = element === dayTime ? 'longInput invalid' : 'shortInput invalid';
                }
            })
        }

        if (validated) {
            if (parseInt(hour.value) <= 0 || parseInt(hour.value) > 12) {
                validated = false;
                messageError = 'Invalid time range';
                hour.className = 'shortInput invalid';
            }
            if (parseInt(minutes.value) < 0 || parseInt(minutes.value) > 59) {
                validated = false;
                messageError = 'Invalid time range';
                minutes.className = 'shortInput invalid';
            }
        }

        if (validated) {
            if (!isBookingTime(parseInt(hour.value), parseInt(minutes.value), dayTime.value)) {
                Object.values(bookingTime).forEach((element) => {
                    element.className = element === dayTime ? 'longInput invalid' : 'shortInput invalid';
                });
                validated = false;
                messageError = 'Bookings 9:00 am - 9:30 pm';
            }
        }

        pickTime.style.color = validated ? 'var(--CodGrey)' : 'var(--Red)';
        timeError.innerHTML = messageError;
    }

    return validated;
}

/**
 * Checks the number of guests and displays an error message if it is 0.
 * 
 * @returns {boolean} - Returns false if the number of guests is 0.
 */

const validatePeople = (): boolean => {
    const people = document.getElementById('people') as HTMLParagraphElement;
    const guestsLine = document.getElementById('guestsLine') as HTMLDivElement;
    const guestsNumber = document.getElementById('guestsNumber') as HTMLSpanElement;

    if (guestsNumber.innerHTML === '0') {
        people.style.color = 'var(--Red)';
        guestsLine.style.borderBottom = 'border-bottom: solid 1px var(--Red);';
        return false;
    } else {
        people.style.color = 'var(--CodGrey)';
        guestsLine.style.borderBottom = 'border-bottom: solid 1px var(--CodGrey);';
        return true;
    }
}

/** ################### COMMON FUNCTIONS ###################*/


/**
 * Checks if a string (field value) is empty.
 * 
 * @param {string} value - The field value to check.
 * @returns {boolean} - Returns false if the string is empty.
 */
const validateFilled = (value: string): boolean => {
    return !(value.toString().trim() === '');
}

/**
 * Validates if a string is in a correct email format.
 * 
 * @param {string} value - The email string to check.
 * @returns {boolean} - Returns false if the format is invalid.
 */
const validateEmailFormat = (value: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
};

/**
 * Checks if a string contains a valid number.
 * 
 * @param {string} value - The string to check.
 * @returns {boolean} - Returns false if the string does not contain a valid number.
 */
const isNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && isFinite(Number(value));
}

/**
 * Validates if a given date is a real and valid date.
 * 
 * @param {number} day - The day of the date.
 * @param {number} month - The month of the date.
 * @param {number} year - The year of the date.
 * @returns {boolean} - Returns false if the date is invalid.
 */
const isValidDate = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

/**
 * Validates if a given date is in the future.
 * 
 * @param {number} day - The day of the date.
 * @param {number} month - The month of the date.
 * @param {number} year - The year of the date.
 * @returns {boolean} - Returns false if the date is in the past.
 */
const isFutureDate = (day: number, month: number, year: number): boolean => {
    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate >= today;
}


/**
 * Validates if a given time is within the allowed booking hours (9:00 AM - 9:30 PM).
 * 
 * @param {number} hour - The hour of the time.
 * @param {number} minutes - The minutes of the time.
 * @param {string} dayTime - "AM" or "PM" indicator.
 * @returns {boolean} - Returns false if the time is outside the booking hours.
 */
const isBookingTime = (hour: number, minutes: number, dayTime: string): boolean => {
    let convertedHour: number;

    if (dayTime === "AM") {
        convertedHour = (hour === 12) ? 0 : hour;
    } else {
        convertedHour = (hour === 12) ? 12 : hour + 12;
    }

    const isBeforeOpeningTime = convertedHour < 9 || (convertedHour === 9 && minutes < 0);
    const isAfterClosingTime = convertedHour > 21 || (convertedHour === 21 && minutes > 30);

    return !isBeforeOpeningTime && !isAfterClosingTime;
};