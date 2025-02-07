import './homeFooter.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import FooterDetails from '../../../shared/footerDetails/FooterDetails';
import NavigateTo from '../../../../services/NavigateTo';

/**
 * Renders the footer for the home page, including a call-to-action 
 * button for reservations and contact information.
 * 
 * @returns {JSX.Element} - The Footer component.
 */
const HomeFooter: React.FC = (): JSX.Element => {

    return (
        <footer>
            <div id="footerTop">
                <h2>Ready to make a reservation?</h2>
                <DefaultButton text='BOOK A TABLE' buttonStyle='lightBt' handleClick={NavigateTo('/reservation')} />
            </div>
            <FooterDetails />
        </footer>
    )
}
export default HomeFooter;