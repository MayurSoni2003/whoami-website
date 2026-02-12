import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'HOME' },
        { path: '/products', label: 'PRODUCTS' },
        { path: '/about', label: 'ABOUT' },
        { path: '/faq', label: 'FAQ' },
        // { path: '/blog', label: 'JOURNAL' },
        { path: '/contact', label: 'CONTACT' },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo">
                    <span className="logo-text">WhoAmI</span>
                    <span className="logo-subtitle">Identity, crafted.</span>
                </Link>

                <ul className="navbar-menu">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
