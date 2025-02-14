/**
 * Closes the confirmation window of the registration form.
 */
export const closeConfirmationWidow = ():void=>{
    const confirmationWindow = document.getElementById('confirmationWindow') as HTMLDivElement | null;
    confirmationWindow && (confirmationWindow.style.display = 'none'); 
}