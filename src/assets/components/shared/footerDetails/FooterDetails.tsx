import './footerDetails.css';

/**
 * FooterDetails Component
 * 
 * Displays the restaurant's contact information (address, phone number and opening hours).
 * This information is typically included in the footer section of the page.
 * 
 * @returns {JSX.Element} - FooterDetails component displaying contact and opening times
 */
const FooterDetails: React.FC = () => {
    return (
        <div id="footerDetails">
            <div>
                <p>Marthwaite, Sedbergh</p>
                <p>Cumbria</p>
                <p>+00 44 123 4567</p>
            </div>
            <div>
                <p>OPEN TIMES</p>
                <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
            </div>
        </div>
    )
}
export default FooterDetails;