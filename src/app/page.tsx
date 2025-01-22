import { ArrowRight, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import React from 'react';
import HeroHeader from '../components/HeroHeader';
import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
    const steps = [
        {
            number: '1',
            title: 'Consultation',
            description: 'We discuss your needs and assess your space.',
        },
        {
            number: '2',
            title: 'Custom Plan',
            description: 'We create a tailored organization strategy.',
        },
        {
            number: '3',
            title: 'Implementation',
            description: 'We transform your space efficiently and effectively.',
        },
    ];

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                <HeroHeader
                    backgroundImage="/images/organized-home.jpg"
                    onCtaClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                            contactSection.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                            });
                        }
                    }}
                />

                <HowItWorks />

                {/* Recent Projects Section */}
                <section className="padding-section-medium background-color-secondary">
                    <div className="padding-global">
                        <div className="container-large">
                            <h2 className="heading-style-h2 text-align-center">
                                Recent Projects
                            </h2>
                            <div className="spacer-48">
                                {/* Project grid placeholder - to be implemented */}
                                <img
                                    src="/api/placeholder/400/320"
                                    alt="Recent project"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Stories Section */}
                <section className="padding-section-medium">
                    <div className="padding-global">
                        <div className="container-medium">
                            <h2 className="heading-style-h2 text-align-center">
                                Client Stories
                            </h2>
                            <div className="spacer-48">
                                <blockquote className="text-align-center text-size-large text-style-italic">
                                    "The transformation of my space was beyond my
                                    expectations. Every corner now has a purpose, and
                                    I feel so much more peaceful at home."
                                    <footer className="text-size-regular text-weight-semibold spacer-16">
                                        Sarah M.
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact"
                    className="padding-section-medium background-color-dark">
                    <div className="padding-global">
                        <div className="container-medium text-color-light">
                            <h2 className="heading-style-h2 text-align-center">
                                Ready to Transform Your Space?
                            </h2>
                            <p className="text-align-center text-size-large spacer-32">
                                Take the first step towards an organized, peaceful
                                home.
                                <br />
                                Let's create your perfect space together.
                            </p>
                            <div className="container-small">
                                <form className="spacer-32">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="spacer-16"
                                    />
                                    <button className="background-color-primary text-color-light">
                                        Schedule Consultation
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="padding-section-small">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="spacer-48">
                                <h2 className="heading-style-h5">Home Organizers</h2>
                                <p className="text-color-neutral">
                                    Professional organizing solutions for every space
                                    in your home.
                                </p>
                            </div>

                            <div className="spacer-32">
                                <h3 className="heading-style-h5">Contact</h3>
                                <div className="spacer-16">
                                    <a
                                        href="mailto:hello@homeorganizers.com"
                                        className="display-inlineflex">
                                        <Mail className="text-color-primary" />
                                        hello@homeorganizers.com
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="tel:(555)123-4567"
                                        className="display-inlineflex">
                                        <Phone className="text-color-primary" />
                                        (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            <div className="spacer-32">
                                <h3 className="heading-style-h5">Quick Links</h3>
                                <nav>
                                    <a href="#how-it-works">How It Works</a>
                                    <a href="#portfolio">Portfolio</a>
                                    <a href="#testimonials">Testimonials</a>
                                    <a href="#contact">Contact</a>
                                </nav>
                            </div>

                            <div className="spacer-32">
                                <h3 className="heading-style-h5">Follow Us</h3>
                                <div className="display-inlineflex">
                                    <a href="#instagram" aria-label="Instagram">
                                        <Instagram className="text-color-primary" />
                                    </a>
                                    <a href="#facebook" aria-label="Facebook">
                                        <Facebook className="text-color-primary" />
                                    </a>
                                </div>
                            </div>

                            <div className="spacer-32 text-align-center text-color-neutral">
                                © 2025 Home Organizers. All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default HomePage;
