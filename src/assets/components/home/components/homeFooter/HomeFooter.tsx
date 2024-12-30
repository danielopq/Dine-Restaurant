import './homeFooter.css';
import DefaultButton from '../../../shared/defaultButton/DefaultButton';
import FooterDetails from '../../../shared/footerDetails/footerDetails';

/**
 * Renders the footer for the home page, including a call-to-action 
 * button for reservations and contact information.
 * 
 * @returns {JSX.Element} - The Footer component.
 */
const HomeFooter: React.FC = () => {
    return (
        <footer>
            <div id="footerTop">
                <h2>Ready to make a reservation?</h2>
                <DefaultButton text='BOOK A TABLE' buttonType='lightBt' />
            </div>
            <FooterDetails />
        </footer>
    )
}
export default HomeFooter;