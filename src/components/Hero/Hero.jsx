import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Identity. <br />
                        <span className="hero-title-accent">Chosen. Worn. Lived.</span>
                    </h1>

                    <p className="hero-description">
                        You don't choose what you love, you discover who you've always been.
                        We craft artifacts for those who refuse to blend in. Symbols of your world,
                        worn on your terms. Not merchandise. Your identity, made tangible.
                    </p>

                    <p className="hero-location">
                        Designed in Jaipur for the quietly expressive.
                    </p>

                    <div className="hero-cta">
                        <Link to="/products" className="btn-primary">
                            Explore Products
                        </Link>
                        <Link to="/about" className="btn-secondary">
                            Our Story
                        </Link>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Artifacts Crafted</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">🇮🇳</span>
                        <span className="stat-label">Made in Jaipur</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">100 %</span>
                        <span className="stat-label">Fan-Crafted</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
