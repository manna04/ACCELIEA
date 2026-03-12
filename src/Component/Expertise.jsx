import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav';

export default function Expertise() {
  return (
    <>
      <Nav />
      <main>
        <h1 className="section-title">Our Areas of Expertise</h1>
        <div className="expertise-container">
          <div className="expertise-box">
            <h3>Oncology CRO Services</h3>
            <p>Comprehensive oncology clinical trial services with deep therapeutic knowledge.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Pharmacometric Services</h3>
            <p>Advanced modeling & simulation services to optimize drug development.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Drug Development Consulting</h3>
            <p>Expert advice and strategy to help accelerate your drug development journey.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>GMO Solutions</h3>
            <p>Regulatory-compliant services for Genetically Modified Organism trials.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Liver Disease CRO Services</h3>
            <p>End-to-end CRO services tailored for liver disease clinical studies.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Infectious Diseases & Vaccines CRO Services</h3>
            <p>Proven track record managing infectious disease and vaccine trials globally.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Orphan & Rare Disease CRO Services</h3>
            <p>Dedicated team for complex rare and orphan disease drug trials.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Clinical & Regulatory Strategy</h3>
            <p>Strategic guidance for clinical trial design and regulatory pathways.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
        </div>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <h2>Talk to an Expert Team Member</h2>
          <p>
            Receive a timely response to an enquiry about a service, process or technical questions.<br />
            Enter your details and the right person at Aceliea will get in touch with you soon.
          </p>

          <form className="expert-contact-form" action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </section>
      </main>
    </>
  );
}