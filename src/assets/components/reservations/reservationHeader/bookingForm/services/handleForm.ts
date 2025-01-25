const handleForm = (event:React.FormEvent<HTMLFormElement>):void=>{
    event.preventDefault();
    
}

const validateName = ():boolean=>{
    const name = document.getElementById('name') as HTMLInputElement | null;
    const nameError = document.getElementById('name') as HTMLInputElement | null;
    if(name){
        return validateFilled(name.value);
    }else{
        return false
    }
}
// const validateEmail = ():boolean=>{

// }
// const validateDate = ():boolean=>{

// }
// const validateTime = ():boolean=>{

// }
// const validatePeople = ():boolean=>{

// }

const validateFilled = (value: string):boolean=>{
    return value.toString().trim() === '';
}

export default handleForm;