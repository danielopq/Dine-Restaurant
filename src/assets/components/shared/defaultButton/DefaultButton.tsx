import './defaultButton.css';

interface DefaultButtonProps{
    text:string;
    buttonType: 'darkBt' | 'lightBt';
}

/**
 * Renders a reusable button component used throughout the website.
 * 
 * @param {DefaultButtonProps} props - The props for the DefaultButton component.
 * @param {string} props.text - The text displayed on the button.
 * @param {'darkBt' | 'lightBt'} props.buttonType - Defines the style of the button ('darkBt' or 'lightBt').
 * @returns {JSX.Element} - A styled button component.
 */
const DefaultButton:React.FC<DefaultButtonProps> = ({text,buttonType}) =>{
    return(
        <button className={`defaultButton ${buttonType}`}>{text}</button>
    )
}
export default DefaultButton;