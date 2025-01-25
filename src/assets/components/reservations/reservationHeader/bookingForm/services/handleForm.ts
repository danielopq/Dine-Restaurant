const handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
    let validated = true;
    event.preventDefault();
    !validateName() && (validated = false);
    !validateEmail() && (validated = false);
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
    const email = document.getElementById('email') as HTMLInputElement | null;
    const emailError = document.getElementById('emailError') as HTMLInputElement | null;

    if (email && emailError) {
        let messageError: string = '';
        
        if (validateFilled(email.value) && validateEmailFormat(email.value)) {
            validated = true;
            email.className = 'valid';
        } else {
            validateFilled(email.value) ?  messageError = 'Invalid email format' : messageError = 'This field is required'; 
            email.className = 'invalid';
        }
        emailError.innerHTML = messageError;
    }

    return validated;
}

// const validateDate = ():boolean=>{

// }
// const validateTime = ():boolean=>{

// }
// const validatePeople = ():boolean=>{

// }

const validateFilled = (value: string): boolean => {
    return !(value.toString().trim() === '');
}

const validateEmailFormat = (value: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(value);
};

export default handleForm;