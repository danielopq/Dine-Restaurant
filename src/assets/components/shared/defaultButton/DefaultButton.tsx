import './defaultButton.css';

interface DefaultButtonProps{
    text:string;
    buttonStyle: 'darkBt' | 'lightBt';
    buttonType?: 'button' | 'submit';
    handleClick?: ()=>void;
}

/**
 * Renders a reusable button component used throughout the website.
 * 
 * @param {DefaultButtonProps} props - The props for the DefaultButton component.
 * @param {string} props.text - The text displayed on the button.
 * @param {'darkBt' | 'lightBt'} props.buttonStyle - Defines the style of the button ('darkBt' or 'lightBt').
 * @returns {JSX.Element} - A styled button component.
 */
const DefaultButton:React.FC<DefaultButtonProps> = ({text,buttonStyle,buttonType = 'button',handleClick}) =>{
    return(
        <button className={`defaultButton ${buttonStyle}`} type={buttonType} onClick={handleClick}>{text.toUpperCase()}</button>
    )
}
export default DefaultButton;