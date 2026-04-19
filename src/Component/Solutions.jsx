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
                <h2>Ethics Committee Registration & Re-Registration</h2>
                <p>Streamlined, compliant EC registration with complete regulatory support.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Ethics Committee Registration & Re-Registration</div>
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
                <h2>Conduction of GCP Training Workshop</h2>
                <p>Empowering research teams with up-to-date GCP knowledge, ensuring compliance, quality, and site excellence.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Conduction of GCP Training Workshop</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${monitoringImg})` }}>
              <div className="solution-overlay">
                <h2>Audit Support & Quality Control</h2>
                <p>Ensuring compliance, data integrity, and audit-ready clinical operations.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Audit Support & Quality Control</div>
            </div>

            <div className="solution-box" style={{ backgroundImage: `url(${pharmacovigilance})` }}>
              <div className="solution-overlay">
                <h2>Archival of Clinical Data</h2>
                <p>Secure, compliant storage ensuring audit-ready and easily retrievable study documentation.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Archival of Clinical Data</div>
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
          

            <div className="solution-box" style={{ backgroundImage: `url(${projectImg})` }}>
              <div className="solution-overlay">
                <h2>Patient Recruitment & Retention</h2>
                <p>Faster enrollment with strong patient engagement and retention strategies.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Patient Recruitment & Retention</div>
            </div>
          

            <div className="solution-box" style={{ backgroundImage: `url(${projectImg})` }}>
              <div className="solution-overlay">
                <h2>Qualified & Skilled Manpower</h2>
                <p>GCP-trained professionals ensuring seamless and high-quality site execution.</p>
                <Link to="#" className="btn-know-more">Know More</Link>
              </div>
              <div className="solution-title">Qualified & Skilled Manpower</div>
            </div>
          </div>
          
          
        </section>
      </main>
    </>
  );
}