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

            {/* Fandoms Section */}
            <section className="section fandoms-showcase">
                <div className="container">
                    <h2 className="text-center">Celebrate Your Fandom</h2>
                    <p className="section-description text-center">
                        From wizards to superheroes, we craft merchandise for fans who wear their identity with pride.
                    </p>
                    <div className="fandom-badges">
                        <span className="fandom-tag">Harry Potter</span>
                        <span className="fandom-tag">Marvel</span>
                        <span className="fandom-tag">Star Wars</span>
                        <span className="fandom-tag">DC Comics</span>
                        <span className="fandom-tag">Anime</span>
                        <span className="fandom-tag">Gaming</span>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="section featured-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Collections</h2>
                        <p className="section-description">
                            Handcrafted desk accessories and collectibles for fans. Made in India
                            with precision 3D printing and laser cutting.
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
                    <h2 className="text-center">Why Fans Choose Us</h2>

                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">✦</div>
                            <h3>Fandom Identity</h3>
                            <p>
                                Your desk is your identity. Let the world know if you're Team Gryffindor,
                                Team Iron Man, or serving the Empire.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">♡</div>
                            <h3>Fan to Fan</h3>
                            <p>
                                Made by fans, for fans. We understand the emotional connection
                                to your favorite franchises.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🇮🇳</div>
                            <h3>Made in India</h3>
                            <p>
                                Proudly crafted in India using premium materials. Supporting
                                local manufacturing, serving fans nationwide.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon">🎁</div>
                            <h3>Perfect Gifts</h3>
                            <p>
                                Know a Potter fan or a Marvel enthusiast? Our products make
                                meaningful gifts they'll treasure forever.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
