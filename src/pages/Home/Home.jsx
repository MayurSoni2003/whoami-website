import { useState, useEffect } from 'react';
import axios from 'axios';
import { getApiUrl } from '../../config';
import Hero from '../../components/Hero/Hero';
import CollectionGrid from '../../components/CollectionGrid/CollectionGrid';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(getApiUrl('/api/products'));
                if (response.data.success) {
                    // Limit to 6 products for home page preview
                    setProducts(response.data.data.slice(0, 6));
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="home-page">
            <Hero />

            {/* Worlds Section */}
            <section className="section fandoms-showcase">
                <div className="container">
                    <h2 className="text-center">Translate Your World</h2>
                    <p className="section-description text-center">
                        Artifacts for the quietly expressive. From wizards to superheroes, symbols of your universe, crafted with precision in Jaipur.
                    </p>
                    <div className="fandom-badges">
                        <span className="fandom-tag">The Wizarding World</span>
                        <span className="fandom-tag">Superhero Universes</span>
                        <span className="fandom-tag">Galactic Sagas</span>
                        <span className="fandom-tag">Comic Mythologies</span>
                        <span className="fandom-tag">Gaming Realms</span>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="section featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Artifacts</h2>
                        <p className="section-description">
                            Handcrafted desk accessories and identity pieces. 3D-printed precision and laser-cut artistry
                            for those who refuse to blend in.
                        </p>
                    </div>

                    {loading ? (
                        <div className="loading-state">
                            <div className="loading"></div>
                            <p>Loading products...</p>
                        </div>
                    ) : (
                        <CollectionGrid products={products} showFilters={false} />
                    )}
                </div>
            </section>

            {/* Values Section */}
            <section className="section values-section">
                <div className="container">
                    <h2 className="text-center">Why Choose WhoAmI</h2>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">✦</div>
                            <h3>Identity</h3>
                            <p>
                                Not what you wear. Who you are. Artifacts that resonate with those
                                who understand the difference between a symbol and a logo.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">⚡</div>
                            <h3>Rebellion</h3>
                            <p>
                                Quiet. Confident. Refusing to conform to beige aesthetics and
                                generic workspaces. Premium craft for the quietly extraordinary.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🇮🇳</div>
                            <h3>Indian Craft</h3>
                            <p>
                                Designed and crafted in India. Supporting local manufacturing,
                                creating artifacts worthy of your identity.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">◈</div>
                            <h3>Connection</h3>
                            <p>
                                From our Jaipur workshops to desks across India and beyond.
                                Globally understood, locally crafted.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🎁</div>
                            <h3>Perfect Gifts</h3>
                            <p>
                                Know some fantasy person? Our products make meaningful gifts they'll treasure forever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
