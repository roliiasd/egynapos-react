import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
export default function ContactUsFooter() {
    return (
        <footer>
            <div className="container text-center">
                <div className="social-icons">
                    <a href="https://www.facebook.com/Egynaposfestes/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.tiktok.com/@egynaposfestes.hu">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <Link to={"/faq"}>
                        GYIK
                    </Link>
                </div>
                <p style={{ marginTop: '10px' }}>&copy; 2024 EgyNaposFestés. Minden jog fenntartva.</p>
                <p style={{ fontSize: ' .85rem' }}>Weboldalt tervezte: <a href="/ineedmoneyguys/index.html"><span>Kovács
                    Roland</span></a></p>
                <p style={{ fontSize: '8pt' }}>Logos: <a href="https://www.freepik.com" style={{ fontSize: '8pt' }}>Designed
                    by
                    BiZkettE1 / Freepik</a></p>
            </div>
        </footer>
    )
}