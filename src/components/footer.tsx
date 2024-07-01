
import './footer.css'
export default function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <h2>Follow Us</h2>
                <div className="social-icons">
                    <a href="#"><img src="" alt="facebook" /><i className="fab fa-facebook"></i></a>
                    <a href="#"><img src="" alt="twitter" /><i className="fab fa-twitter"></i></a>
                    <a href="#"><img src="" alt="instagram" /><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div>
                <h3>Terms & Policies</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            <div >
                <h3>Quick Link</h3>
                <ul>
                    <li>About Us</li>
                    <li>Contact us</li>
                    
                </ul>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Bambrush. All rights reserved.</p>
            </div>
        </footer>
    )
}