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
            <h3>Oncology</h3>
            <p>Delivering excellence in complex oncology trials through precision-driven execution and deeply patient-centric care models.<br />Leveraging advanced site capabilities and experienced investigators, we ensure accelerated recruitment, superior data quality, and impactful outcomes in high-stakes oncology research.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Hematology</h3>
            <p> Advanced expertise in hematological studies, ensuring exceptional data integrity and clinical accuracy.<br />Our specialized approach enables meticulous monitoring, timely interventions, and seamless management of complex hematology protocols.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Gastroenterology</h3>
            <p>Seamless management of GI trials with optimized patient engagement and operational efficiency.<br />We combine strong site coordination with patient-centric strategies to ensure consistent recruitment and high-quality data delivery.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Neurology</h3>
            <p>Expert handling of neurological studies with meticulous protocol adherence and regulatory precision.<br />
              Our team is adept at managing complex neurological endpoints while ensuring patient safety and study continuity.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Orthopedics</h3>
            <p>Streamlined execution of musculoskeletal trials with coordinated site excellence and efficiency.<br />
              From patient screening to follow-ups, we ensure smooth operational flow and adherence to study timelines.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Ophthalmology</h3>
            <p>High-precision ophthalmic trial delivery supported by detailed clinical evaluation and quality oversight.<br />
              We maintain rigorous assessment standards to ensure accuracy, compliance, and reproducible outcomes.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Pediatrics</h3>
            <p>Ethically grounded pediatric trials prioritizing safety, compliance, and compassionate patient care.<br />
              Our approach ensures sensitive handling, parental engagement, and strict adherence to pediatric regulatory frameworks.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>
          <div className="expertise-box">
            <h3>Vaccines</h3>
            <p> Large-scale vaccine trial execution with accelerated recruitment and rigorous monitoring frameworks.<br />
              We enable rapid mobilization of sites and patient pools, ensuring timely and efficient study completion.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>Infectious Diseases</h3>
            <p> Agile and responsive trial management for infectious disease studies in dynamic environments.<br />
              Our readiness and adaptability ensure continuity and precision even in high-pressure and evolving scenarios.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>Rare Diseases</h3>
            <p> Specialized execution of complex, low-prevalence studies with tailored and strategic approaches.<br />
              We leverage targeted recruitment strategies and expert coordination to deliver meaningful outcomes in niche indications.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>Cardiology</h3>
            <p> Precision-led cardiovascular trials supported by robust monitoring and data excellence.<br />
              Our expertise ensures accurate endpoint tracking, patient safety, and compliance with stringent cardiac study protocols.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>Gynaecology</h3>
            <p> Dedicated expertise in women’s health studies with a strong focus on patient-centric methodologies.<br />
              We ensure ethical conduct, patient comfort, and high-quality data across diverse gynecological indications.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>General Medicine</h3>
            <p> Versatile clinical capabilities across a broad spectrum of therapeutic indications.<br />
              Our adaptable approach allows seamless execution of studies across varied clinical domains with consistent quality.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>GCP Training Workshops</h3>
            <p> Elevating research standards through continuous, globally aligned GCP training excellence.<br />
              We empower research teams with up-to-date knowledge, ensuring compliance, audit readiness, and operational excellence.</p>
            <Link to="#" className="learn-more">Learn More</Link>
          </div>

          <div className="expertise-box">
            <h3>Ethics Committee Registration & Re-Registration</h3>
            <p>Comprehensive, compliant, and seamless EC registration and renewal solutions ensuring regulatory confidence.<br />
              Our end-to-end support streamlines documentation, accelerates approvals, and ensures adherence to all governing authorities.</p>
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