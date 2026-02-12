import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                {/* Hero Section */}
                <div className="about-hero">
                    <h1>About WhoAmI</h1>
                    <p className="about-tagline">Where identity meets craft. Where rebellion is subtle.</p>
                </div>

                {/* Story Section */}
                <section className="about-section">
                    <h2>Our Story</h2>
                    <div className="about-content">
                        <p>
                            WhoAmI was born in India from a quiet rebellion: the refusal to explain yourself.
                        </p>
                        <p>
                            We craft artifacts for those who belong to worlds beyond the ordinary—
                            fantasy realms, sci-fi universes, mythologies reimagined. Not because you're a "fan,"
                            but because these stories are part of who you are.
                        </p>
                        <p>
                            Your desk isn't a workspace. It's a declaration. Your hoodie isn't clothing.
                            It's a manifesto you don't need to speak aloud.
                        </p>
                        <p>
                            For the students in Bangalore who carry magic in their backpacks.
                            For the creators in Delhi who build universes pixel by pixel.
                            For everyone who knows: identity isn't chosen. It's discovered, then owned.
                        </p>
                    </div>
                </section>

                {/* Worlds Section */}
                <section className="about-section fandoms-section">
                    <h2>Worlds We Translate</h2>
                    <div className="fandoms-grid">
                        <div className="fandom-badge">The Wizarding World</div>
                        <div className="fandom-badge">Superhero Universes</div>
                        <div className="fandom-badge">Galactic Sagas</div>
                        <div className="fandom-badge">Comics</div>
                        <div className="fandom-badge">Mythologies</div>
                        <div className="fandom-badge">Gaming Realms</div>
                        <div className="fandom-badge">Fantasy Epics</div>
                        <div className="fandom-badge">Your Universe</div>
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
                                    Not what you wear. Who you are. Artifacts that don't announce, they resonate.
                                    For those who know the difference between a symbol and a logo. Your desk, your identity.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">⚡</div>
                            <div className="value-content">
                                <h3>Rebellion</h3>
                                <p>
                                    The quiet kind. The kind that doesn't shout but refuses to conform.
                                    Premium craftsmanship for those who won't blend into beige cubicles and generic aesthetics.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">♡</div>
                            <div className="value-content">
                                <h3>Emotion</h3>
                                <p>
                                    Every product evokes the magic of your favorite stories. The thrill of seeing your
                                    house crest on your desk, the joy of gifting a loved one something truly special.
                                    We design for emotional connection.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">⬢</div>
                            <div className="value-content">
                                <h3>Craft</h3>
                                <p>
                                    Made in India with precision engineering. We use premium materials, 3D printing, and
                                    laser cutting to create products that are as refined as they are meaningful.
                                    Quality that lasts.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">✓</div>
                            <div className="value-content">
                                <h3>Trust</h3>
                                <p>
                                    An Indian brand you can trust. Transparent pricing, honest materials, and
                                    reliable delivery across India. We're fans serving fans.
                                </p>
                            </div>
                        </div>

                        <div className="value-item">
                            <div className="value-icon">◈</div>
                            <div className="value-content">
                                <h3>Connection</h3>
                                <p>
                                    From Jaipur workshops to your desk in Delhi, Bangalore, Mumbai, or anywhere
                                    you're building your world. Indian-made, globally understood.
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
                            <h3>Students & Creators</h3>
                            <p>
                                Your dorm room, your studio, your late-night coding setup —
                                spaces that deserve artifacts of who you're becoming.
                                Budget-friendly identity pieces that don't apologize for passion.
                            </p>
                        </div>
                        <div className="audience-card">
                            <h3>Young Professionals</h3>
                            <p>
                                Your workspace doesn't have to scream to speak volumes.
                                Subtle symbols that say "I refuse to be ordinary" to those who understand.
                                Professional on the surface, extraordinary beneath.
                            </p>
                        </div>
                        <div className="audience-card">
                            <h3>Gift Seekers</h3>
                            <p>
                                For the person who doesn't need more stuff, they need
                                validation that someone sees who they really are.
                                Artifacts that say "I get you" without explanation.
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
                                Universes translated into tangible form. Research, iteration,
                                refinement, until we create something worthy of your identity.
                            </p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Craft</h3>
                            <p>
                                Made in India using 3D printing and laser cutting.
                                Premium materials ensure durability fit for everyone.
                            </p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Quality Check</h3>
                            <p>
                                Every piece inspected by those who understand what these symbols mean.
                                Not good enough for us? Not good enough for you.
                            </p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h3>Deliver</h3>
                            <p>
                                Shipped across India with care. Your artifact arrives ready
                                to prove your identity to the world.
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
                            Designed, crafted, and shipped from Jaipur. Indian creativity meets global
                            standards, creating identity artifacts for the quietly expressive wherever they are.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
