import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav';

export default function Expertise() {
  return (
    <>
      <Nav />
      <main>
        <section className="expertise-section">
        <h1 className="section-title">Our Areas of Expertise</h1>
        <div className="expertise-grid">
          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Oncology</h2>
              <p>Delivering excellence in complex oncology trials through precision-driven execution and deeply
                patient-centric care models.<br />Leveraging advanced site capabilities and experienced investigators, we
                ensure accelerated recruitment, superior data quality, and impactful outcomes in high-stakes oncology
                research.</p>
            </div>
            <div className="expertise-title">Oncology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Hematology</h2>
              <p>Advanced expertise in hematological studies, ensuring exceptional data integrity and clinical
                accuracy.<br />Our specialized approach enables meticulous monitoring, timely interventions, and seamless
                management of complex hematology protocols.</p>
            </div>
            <div className="expertise-title">Hematology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Gastroenterology</h2>
              <p>Seamless management of GI trials with optimized patient engagement and operational efficiency.<br />We
                combine strong site coordination with patient-centric strategies to ensure consistent recruitment and
                high-quality data delivery.</p>
            </div>
            <div className="expertise-title">Gastroenterology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Gastroenterology</h2>
              <p>Seamless management of GI trials with optimized patient engagement and operational efficiency.<br />We
                combine strong site coordination with patient-centric strategies to ensure consistent recruitment and
                high-quality data delivery.</p>
            </div>
            <div className="expertise-title">Gastroenterology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Neurology</h2>
              <p>Expert handling of neurological studies with meticulous protocol adherence and regulatory precision.<br />
                Our team is adept at managing complex neurological endpoints while ensuring patient safety and study
                continuity.</p>
            </div>
            <div className="expertise-title">Neurology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Orthopedics</h2>
              <p>Streamlined execution of musculoskeletal trials with coordinated site excellence and efficiency.<br />
                From patient screening to follow-ups, we ensure smooth operational flow and adherence to study timelines.
              </p>
            </div>
            <div className="expertise-title">Orthopedics</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Ophthalmology</h2>
              <p>High-precision ophthalmic trial delivery supported by detailed clinical evaluation and quality
                oversight.<br />
                We maintain rigorous assessment standards to ensure accuracy, compliance, and reproducible outcomes.</p>
            </div>
            <div className="expertise-title">Ophthalmology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Pediatrics</h2>
              <p>Ethically grounded pediatric trials prioritizing safety, compliance, and compassionate patient care.<br />
                Our approach ensures sensitive handling, parental engagement, and strict adherence to pediatric regulatory
                frameworks.</p>
            </div>
            <div className="expertise-title">Pediatrics</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Vaccines</h2>
              <p>Large-scale vaccine trial execution with accelerated recruitment and rigorous monitoring frameworks.<br />
                We enable rapid mobilization of sites and patient pools, ensuring timely and efficient study completion.</p>
            </div>
            <div className="expertise-title">Vaccines</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Infectious Diseases</h2>
              <p>Agile and responsive trial management for infectious disease studies in dynamic environments.<br />
                Our readiness and adaptability ensure continuity and precision even in high-pressure and evolving scenarios.
              </p>
            </div>
            <div className="expertise-title">Infectious Diseases</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Rare Diseases</h2>
              <p>Specialized execution of complex, low-prevalence studies with tailored and strategic approaches.<br />
                We leverage targeted recruitment strategies and expert coordination to deliver meaningful outcomes in niche
                indications.</p>
            </div>
            <div className="expertise-title">Rare Diseases</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Cardiology</h2>
              <p>Precision-led cardiovascular trials supported by robust monitoring and data excellence.<br />
                Our expertise ensures accurate endpoint tracking, patient safety, and compliance with stringent cardiac
                study protocols.</p>
            </div>
            <div className="expertise-title">Cardiology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Gynaecology</h2>
              <p>Dedicated expertise in women’s health studies with a strong focus on patient-centric methodologies.<br />
                We ensure ethical conduct, patient comfort, and high-quality data across diverse gynecological indications.
              </p>
            </div>
            <div className="expertise-title">Gynaecology</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>General Medicine</h2>
              <p>Versatile clinical capabilities across a broad spectrum of therapeutic indications.<br />
                Our adaptable approach allows seamless execution of studies across varied clinical domains with consistent
                quality.</p>
            </div>
            <div className="expertise-title">General Medicine</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>GCP Training Workshops</h2>
              <p>Elevating research standards through continuous, globally aligned GCP training excellence.<br />
                We empower research teams with up-to-date knowledge, ensuring compliance, audit readiness, and operational
                excellence.</p>
            </div>
            <div className="expertise-title">GCP Training Workshops</div>
          </div>

          <div className="expertise-box">
            <div className="expertise-overlay">
              <h2>Ethics Committee Registration & Re-Registration</h2>
              <p>Comprehensive, compliant, and seamless EC registration and renewal solutions ensuring regulatory
                confidence.<br />
                Our end-to-end support streamlines documentation, accelerates approvals, and ensures adherence to all
                governing authorities.</p>
            </div>
            <div className="expertise-title">Ethics Committee Registration & Re-Registration</div>
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