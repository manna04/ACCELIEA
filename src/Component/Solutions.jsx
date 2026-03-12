import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav';
import clinicalImg from '../assets/images/clinical.jpg'
import regulatoryImg from '../assets/images/regulatory.jpg'
import dataimage from '../assets/images/data.jpg'
import medicalImg from '../assets/images/medical.jpg'
import biostatisticsImg from '../assets/images/statistics.jpg'
import monitoringImg from '../assets/images/monitoring.jpg'
import pharmacovigilance from '../assets/images/Pharmacovigilance.jpg'
import logisticsImg from '../assets/images/logistics.jpg'
import projectImg from '../assets/images/project.jpg'

export default function Solutions() {
  return (
    <>
      <Nav />
      <main>
        <section className="solutions-section">
          <h1 className="section-title">Our Solutions</h1>
          <div className="solutions-grid">
            <div className="solution-box" style={{ backgroundImage: `url(${clinicalImg})` }}>
              <div className="solution-overlay">
                <h2>Clinical Trial Management</h2>
                <p>Full-service trial planning, execution & support.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Clinical Trial Management</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${regulatoryImg})` }}>
              <div className="solution-overlay">
                <h2>Regulatory Consulting</h2>
                <p>Ensure global and regional compliance effectively.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Regulatory Consulting</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${dataimage})` }}>
              <div className="solution-overlay">
                <h2>Data Management</h2>
                <p>Clean, secure and regulatory-compliant data.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Data Management</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${medicalImg})` }}>
              <div className="solution-overlay">
                <h2>Medical Writing</h2>
                <p>Scientific documentation with accuracy and clarity.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Medical Writing</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${biostatisticsImg})` }}>
              <div className="solution-overlay">
                <h2>Biostatistics</h2>
                <p>Informed decisions based on deep statistical analysis.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Biostatistics</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${monitoringImg})` }}>
              <div className="solution-overlay">
                <h2>Site Monitoring</h2>
                <p>Ensure data integrity and regulatory compliance.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Site Monitoring</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${pharmacovigilance})` }}>
              <div className="solution-overlay">
                <h2>Pharmacovigilance</h2>
                <p>Patient safety & adverse event tracking.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Pharmacovigilance</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${logisticsImg})` }}>
              <div className="solution-overlay">
                <h2>Clinical Logistics</h2>
                <p>Fast, reliable supplies to sites and depots worldwide.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Clinical Logistics</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${projectImg})` }}>
              <div className="solution-overlay">
                <h2>Project Management</h2>
                <p>On-time, on-budget trial delivery by expert teams.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Project Management</div>
            </div>
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