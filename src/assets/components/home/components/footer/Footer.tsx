import './footer.css';

const Footer:React.FC = () =>{
    return(
        <footer>
            <div id="footerTop">
                <h2>Ready to make a reservation?</h2>
            </div>
            <div id="footerBottom">
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
        </footer>
    )
}
export default Footer;