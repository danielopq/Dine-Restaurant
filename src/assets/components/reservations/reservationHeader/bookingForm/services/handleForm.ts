interface BookingDate {
    day: HTMLInputElement | null;
    month: HTMLInputElement | null;
    year: HTMLInputElement | null;
}

const handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
    let validated = true;
    event.preventDefault();
    !validateName() && (validated = false);
    !validateEmail() && (validated = false);
    !validateDate() && (validated = false);
    console.log(validated);
}

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

const validateEmail = (): boolean => {
    let validated = false;
    let messageError: string = 'xz';

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

const validateDate = (): boolean => {
    let validated = true;
    let messageError: string = '';

    const booking: BookingDate = {
        day: document.getElementById('day') as HTMLInputElement | null,
        month: document.getElementById('month') as HTMLInputElement | null,
        year: document.getElementById('year') as HTMLInputElement | null,
    }
    const { day, month, year } = booking;
    const pickDate = document.getElementById('pickDate') as HTMLInputElement | null;
    const dateError = document.getElementById('dateError') as HTMLInputElement | null;

    if (day && month && year && pickDate && dateError) {
        Object.values(booking).forEach((element) => {
            if (!validateFilled(element.value)) {
                validated = false;
                messageError = 'This field is incomplete';
            }
        })
        if (validated) {
            Object.values(booking).forEach((element) => {
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

        if (validated) {
            Object.values(booking).forEach((element) => {
                element.className = element === year ? 'longInput valid' : 'shortInput valid';
            });
            pickDate.style.color = 'var(--CodGrey)';
        } else {
            Object.values(booking).forEach((element) => {
                element.className = element === year ? 'longInput invalid' : 'shortInput invalid';
            });
            pickDate.style.color = 'var(--Red)';
        }

        dateError.innerHTML = messageError;
    }

    return validated;
}

const validateFilled = (value: string): boolean => {
    return !(value.toString().trim() === '');
}

const validateEmailFormat = (value: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
};

const isNumber = (value: string): boolean => {
    return !isNaN(Number(value)) && isFinite(Number(value));
}

const isValidDate = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
}

const isFutureDate = (day: number, month: number, year: number): boolean => {
    const inputDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return inputDate >= today;
}

export default handleForm;