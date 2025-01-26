export const showSelect = ():void=>{
    const dayTimeBt = document.getElementById('dayTimeBt') as HTMLDivElement | null;
    const dayTimeselect = document.getElementById('dayTimeselect') as HTMLDivElement | null;
    if (dayTimeBt && dayTimeselect){
        dayTimeBt.className = dayTimeBt.className === 'arrowDown' ? 'arrowUp' : 'arrowDown';
        dayTimeselect.style.display = dayTimeselect.style.display === 'none' ? 'flex' : 'none';
    }
}

export const selectDaytime = (event: React.MouseEvent<HTMLButtonElement>):void=>{
    const dayTime = document.getElementById('dayTime') as HTMLInputElement | null;
    const amButton = document.getElementById('am-button') as HTMLButtonElement | null;
    const pmButton = document.getElementById('pm-button') as HTMLButtonElement | null;

    const clickedElement = event.target as HTMLButtonElement;
    if(dayTime && pmButton && amButton){
        dayTime.value = clickedElement.id === 'am-button' ? 'AM' : 'PM';
        clickedElement.className = 'checked';
        clickedElement.id === 'am-button' ? pmButton.className = '' : amButton.className = '';
    }

    showSelect();
}
