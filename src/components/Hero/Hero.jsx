import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Identity, <br />
                        <span className="hero-title-accent">crafted.</span>
                    </h1>

                    <p className="hero-description">
                        India's home for handcrafted fandom merchandise. From Harry Potter to Marvel,
                        Star Wars to anime—we create 3D-printed and laser-cut desk accessories,
                        collectibles, and personalized gifts for true fans who wear their
                        fandoms with pride.
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
                        <span className="stat-label">Products Crafted</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">🇮🇳</span>
                        <span className="stat-label">Made in India</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Fan-Crafted</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
