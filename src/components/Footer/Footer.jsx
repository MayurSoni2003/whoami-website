import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-column">
                        <h3 className="footer-brand">WhoAmI</h3>
                        <p className="footer-tagline">Identity, crafted.</p>
                        <p className="footer-description">
                            India's home for handcrafted fandom merchandise. 3D-printed and
                            laser-cut desk accessories, collectibles, and personalized gifts
                            for fans of Harry Potter, Marvel, Star Wars, and more.
                        </p>
                        <p className="footer-india">🇮🇳 Proudly Made in India</p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Fandoms */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Fandoms</h4>
                        <ul className="footer-links">
                            <li><Link to="/products?category=Desk Accessories">Desk Accessories</Link></li>
                            <li><Link to="/products?category=Collectibles">Collectibles</Link></li>
                            <li><Link to="/products?category=Gifts">Gifts & Personalized</Link></li>
                            <li><Link to="/products?category=Puzzles">Puzzles & Games</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column">
                        <h4 className="footer-heading">Connect</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:hello@whoami.in">hello@whoami.in</a></li>
                            <li><a href="tel:+911234567890">+91 12345 67890</a></li>
                        </ul>
                        <p className="footer-location">Based in India 🇮🇳</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} WhoAmI. Crafted with ❤️ in India for fans worldwide.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
