import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav'; // আপনার Nav কম্পোনেন্ট

export default function Contact() {
  return (
    <>
      <Nav />

      <main className="locations-page">
        <section className="contact-location-section">
          <div className="contact-locations-wrapper">
            <h2 id="office-title">Offices in Your Area</h2>
            <div className="office-grid" id="user-location-office">
              {/* This will be dynamically populated based on user's location */}
            </div>
          </div>
        </section>

        <section className="contact-form-section styled-contact">
          <div className="contact-form-wrapper">
            <div className="contact-intro">
              <h2>Get in Touch</h2>
              <p>Fill in the form and the right Aceliea expert will get back to you shortly.</p>
            </div>

            <form className="expert-contact-form" action="#" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input type="text" id="company" name="company" />
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="country" name="country" />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

              <div className="form-submit">
                <button type="submit" className="submit-btn">Send</button>
              </div>
            </form>
          </div>
        </section>

        <section className="all-global-offices">
          <h2>All Aceliea Global Offices</h2>
          <div className="office-grid">
            <div className="office-card" style={{ backgroundImage: "url('/images/india-office.jpg')" }}>
              <div className="office-overlay">
                <h3>Bangalore</h3>
                <p>Unit 1, Block E, Helios Business Park, Bangalore 560103, India</p>
                <p><strong>📞</strong> +91 80 4164 8996</p>
              </div>
            </div>

            <div className="office-card" style={{ backgroundImage: "url('/images/usa-office.jpg')" }}>
              <div className="office-overlay">
                <h3>Boston</h3>
                <p>123 Seaport Blvd, Boston, MA 02210, USA</p>
                <p><strong>📞</strong> +1 617-123-4567</p>
              </div>
            </div>

            <div className="office-card" style={{ backgroundImage: "url('/images/germany-office.jpg')" }}>
              <div className="office-overlay">
                <h3>Frankfurt</h3>
                <p>Friedrich-Ebert-Anlage 35, 60327 Frankfurt, Germany</p>
                <p><strong>📞</strong> +49 69 12345678</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Aceliea Clinical Research. All rights reserved.</p>
      </footer>
    </>
  );
}