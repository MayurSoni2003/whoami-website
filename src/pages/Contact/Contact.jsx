import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Frontend-only form handling for now
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-page">
            <div className="container">
                {/* Header */}
                <div className="contact-header">
                    <h1>Get in Touch</h1>
                    <p className="contact-subtitle">
                        Have questions about our products? Want to discuss custom designs?
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2>Send us a Message</h2>

                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✓</div>
                                <h3>Thank you!</h3>
                                <p>
                                    Your message has been received. We'll get back to you shortly.
                                </p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        placeholder="Tell us more..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info-section">
                        <h2>Contact Information</h2>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">✉</div>
                                <div className="contact-content">
                                    <h3>Email</h3>
                                    <a href="mailto:hello@whoami.craft">hello@whoami.craft</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">☎</div>
                                <div className="contact-content">
                                    <h3>Phone</h3>
                                    <a href="tel:+911234567890">+91 12345 67890</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">⌚</div>
                                <div className="contact-content">
                                    <h3>Hours</h3>
                                    <p>Monday - Friday<br />9:00 AM - 6:00 PM IST</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-note">
                            <h3>Note</h3>
                            <p>
                                This is a showcase website. The contact form is for demonstration
                                purposes only. For actual inquiries, please use the email or phone
                                provided above.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
