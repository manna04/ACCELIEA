import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav'; 

export default function Contact() {
  return (
    <>
      <Nav />

      <main className="locations-page">

        <section className="contact-form-section styled-contact">
          <div className="contact-form-wrapper">
            <div className="contact-intro">
              <h1>Get in Touch</h1>
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
      </main>

      <footer>
        <p>&copy; 2025 Aceliea Clinical Research. All rights reserved.</p>
      </footer>
    </>
  );
}