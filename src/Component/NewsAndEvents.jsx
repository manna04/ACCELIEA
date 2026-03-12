import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav';

export default function NewsAndEvents() {
  return (
    <>
      <Nav />

      <main>
        <section className="news-resources">
          <h1 className="section-title">News & Resources</h1>

          <div className="resources-container">
            <section className="resource-section colored">
              <h2 className="resource-title">Latest News</h2>
              <div className="resource-grid">
                <div className="resource-box">Brief news content 1</div>
                <div className="resource-box">Brief news content 2</div>
                <div className="resource-box">Brief news content 3</div>
                <div className="resource-box">Brief news content 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All News</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest Reports</h2>
              <div className="resource-grid">
                <div className="resource-box">Report summary 1</div>
                <div className="resource-box">Report summary 2</div>
                <div className="resource-box">Report summary 3</div>
                <div className="resource-box">Report summary 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All Reports</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest White Papers</h2>
              <div className="resource-grid">
                <div className="resource-box">White Paper 1</div>
                <div className="resource-box">White Paper 2</div>
                <div className="resource-box">White Paper 3</div>
                <div className="resource-box">White Paper 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All White Papers</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest Webinars</h2>
              <div className="resource-grid">
                <div className="resource-box">Webinar topic 1</div>
                <div className="resource-box">Webinar topic 2</div>
                <div className="resource-box">Webinar topic 3</div>
                <div className="resource-box">Webinar topic 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All Webinars</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest Events</h2>
              <div className="resource-grid">
                <div className="resource-box">Event 1</div>
                <div className="resource-box">Event 2</div>
                <div className="resource-box">Event 3</div>
                <div className="resource-box">Event 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All Events</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest Articles</h2>
              <div className="resource-grid">
                <div className="resource-box">Article 1</div>
                <div className="resource-box">Article 2</div>
                <div className="resource-box">Article 3</div>
                <div className="resource-box">Article 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All Articles</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest Blog</h2>
              <div className="resource-grid">
                <div className="resource-box">Blog post 1</div>
                <div className="resource-box">Blog post 2</div>
                <div className="resource-box">Blog post 3</div>
                <div className="resource-box">Blog post 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All Blog</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest Case Studies</h2>
              <div className="resource-grid">
                <div className="resource-box">Case study 1</div>
                <div className="resource-box">Case study 2</div>
                <div className="resource-box">Case study 3</div>
                <div className="resource-box">Case study 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All Case Studies</Link>
            </section>

            <section className="resource-section colored">
              <h2 className="resource-title">Latest FAQs</h2>
              <div className="resource-grid">
                <div className="resource-box">FAQ 1</div>
                <div className="resource-box">FAQ 2</div>
                <div className="resource-box">FAQ 3</div>
                <div className="resource-box">FAQ 4</div>
              </div>
              <Link to="#" className="view-all-btn">View All FAQs</Link>
            </section>
          </div>
        </section>

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