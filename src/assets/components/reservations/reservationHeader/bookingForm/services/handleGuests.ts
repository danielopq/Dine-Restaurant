/**
 * Increases or decreases the number of guests based on the clicked button.
 * 
 * @param {React.MouseEvent<HTMLButtonElement>} event - The click event from the button.
 */

export const handleGuests = (event:React.MouseEvent<HTMLButtonElement>) =>{
    let newPeopleNumber:number;
    const people = document.getElementById('people') as HTMLParagraphElement;
    const guestsNumber = document.getElementById('guestsNumber') as HTMLSpanElement;

    const clickedElement = event.target as HTMLButtonElement;
    
    if(people && guestsNumber){
        newPeopleNumber = parseInt(guestsNumber.innerHTML);
        if(clickedElement.id === 'addPeopleBt'){
            guestsNumber.innerHTML = (newPeopleNumber + 1).toString();
        }else if(newPeopleNumber > 0){
            guestsNumber.innerHTML = (newPeopleNumber - 1).toString();
        }
    }

}