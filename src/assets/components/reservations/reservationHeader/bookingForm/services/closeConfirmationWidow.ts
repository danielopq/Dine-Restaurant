export const closeConfirmationWidow = ():void=>{
    const confirmationWindow = document.getElementById('confirmationWindow') as HTMLDivElement | null;
    confirmationWindow && (confirmationWindow.style.display = 'none'); 
}