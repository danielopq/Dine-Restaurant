export const showSelect = ():void=>{
    const dayTimeBt = document.getElementById('dayTimeBt') as HTMLDivElement | null;
    const dayTimeselect = document.getElementById('dayTimeselect') as HTMLDivElement | null;
    if (dayTimeBt && dayTimeselect){
        dayTimeBt.className = dayTimeBt.className === 'arrowDown' ? 'arrowUp' : 'arrowDown';
        dayTimeselect.style.display = dayTimeselect.style.display === 'none' ? 'flex' : 'none';
    }
}
