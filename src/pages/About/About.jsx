import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                {/* Hero Section */}
                <div className="about-hero">
                    <h1>About WhoAmI</h1>
                    <p className="about-tagline">India's home for fandom merchandise, crafted with love.</p>
                </div>

                {/* Story Section */}
                <section className="about-section">
                    <h2>Our Story</h2>
                    <div className="about-content">
                        <p>
                            WhoAmI was born in India from a simple belief: true fans deserve products
                            that celebrate their identity. Whether you're a Potterhead who dreams of Hogwarts,
                            a Marvel enthusiast who knows every character's origin, or a Star Wars devotee
                            who can quote every line—we create for you.
                        </p>
                        <p>
                            As a proudly Indian brand, we combine cutting-edge 3D printing and precision
                            laser cutting with the passion of fellow fans. Every product we craft isn't
                            just merchandise—it's a piece of your identity that transforms your desk
                            into a shrine of your favorite franchises.
                        </p>
                        <p>
                            From college dorm rooms in Delhi to corporate desks in Bangalore, our products
                            help fans across India express who they truly are. Because your fandom is your
                            identity, and your desk should prove it.
                        </p>
                    </div>
                </section>

                {/* Fandoms Section */}
                <section className="about-section fandoms-section">
                    <h2>Fandoms We Celebrate</h2>
                    <div className="fandoms-grid">
                        <div className="fandom-badge">Harry Potter</div>
                        <div className="fandom-badge">Marvel</div>
                        <div className="fandom-badge">Star Wars</div>
                        <div className="fandom-badge">DC Comics</div>
                        <div className="fandom-badge">Anime</div>
                        <div className="fandom-badge">Gaming</div>
                        <div className="fandom-badge">Lord of the Rings</div>
                        <div className="fandom-badge">Custom Requests</div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="about-section values-section">
                    <h2>What We Stand For</h2>
                    <div className="values-list">
                        <div className="value-item">
                            <div className="value-icon">✦</div>
                            <div className="value-content">
                                <h3>Identity</h3>
                                <p>
                                    Your fandom is your identity. We create products that let you proudly
                                    display which universe you belong to—whether it's Gryffindor, Team Iron Man,
                                    or the Rebel Alliance. Your desk, your identity.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">♡</div>
                            <div className="value-content">
                                <h3>Emotion</h3>
                                <p>
                                    Every product evokes the magic of your favorite stories. The thrill of
                                    seeing your house crest on your desk, the joy of gifting a fellow fan
                                    something truly special—we design for emotional connection.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">⬢</div>
                            <div className="value-content">
                                <h3>Craft</h3>
                                <p>
                                    Made in India with precision engineering. We use premium materials,
                                    3D printing, and laser cutting to create products that are as refined
                                    as they are meaningful. Quality that lasts.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div className="value-content">
                                <h3>Trust</h3>
                                <p>
                                    An Indian brand you can trust. Transparent pricing, honest materials,
                                    and reliable delivery across India. We're fans serving fans.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audience Section */}
                <section className="about-section">
                    <h2>Who We Create For</h2>
                    <div className="audience-grid">
                        <div className="audience-card">
                            <h3>College Students</h3>
                            <p>
                                Transform your dorm room or study desk into a fandom shrine.
                                Budget-friendly merchandise that lets you proudly display
                                your Hogwarts house or favorite superhero.
                            </p>
                        </div>
                        <div className="audience-card">
                            <h3>Young Professionals</h3>
                            <p>
                                Subtle yet unmistakable fandom touches for your workspace.
                                Sophisticated desk accessories that hint at your inner
                                Jedi, wizard, or superhero to those who know.
                            </p>
                        </div>
                        <div className="audience-card">
                            <h3>Gift Seekers</h3>
                            <p>
                                The perfect gift for the fan who has everything. Personalized
                                merchandise that shows you truly understand their fandom
                                and appreciate their identity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="about-section process-section">
                    <h2>How We Work</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Design</h3>
                            <p>
                                Fellow fans design every product. We research, prototype,
                                and refine until we create something worthy of your desk.
                            </p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Craft</h3>
                            <p>
                                Made in India using 3D printing and laser cutting. Premium
                                materials ensure durability fit for any fandom.
                            </p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Quality Check</h3>
                            <p>
                                Every piece is inspected by fellow fans. If it's not good
                                enough for our desks, it's not good enough for yours.
                            </p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h3>Deliver</h3>
                            <p>
                                Shipped with care across India. Your merchandise arrives
                                ready to prove your identity to the world.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Made in India */}
                <section className="about-section india-section">
                    <div className="india-banner">
                        <span className="india-flag">🇮🇳</span>
                        <h3>Proudly Made in India</h3>
                        <p>
                            Designed, crafted, and shipped from India. Supporting local manufacturing
                            while creating world-class fandom merchandise for fans across the country.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
