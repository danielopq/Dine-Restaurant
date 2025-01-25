const handleForm = (event: React.FormEvent<HTMLFormElement>): void => {
    let validated = true;
    event.preventDefault();
    !validateName() && (validated = false);
    console.log(validated);
}

const validateName = (): boolean => {
    let validated = false;
    const name = document.getElementById('name') as HTMLInputElement | null;
    const nameError = document.getElementById('nameError') as HTMLInputElement | null;

    if (name && nameError) {
        nameError.innerHTML = '';
        name.className = 'valid';
        if(validateFilled(name.value)){
            validated = true;
        }else{
            nameError.innerHTML = 'This field is required';
            name.className = 'invalid';
        }
    }

    return validated;
}
// const validateEmail = ():boolean=>{

// }
// const validateDate = ():boolean=>{

// }
// const validateTime = ():boolean=>{

// }
// const validatePeople = ():boolean=>{

// }

const validateFilled = (value: string): boolean => {
    return !(value.toString().trim() === '');
}

export default handleForm;