import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav'; 
import team1 from '../assets/images/team1.jpg'
import team2 from '../assets/images/team2.jpg'
import team3 from '../assets/images/team3.jpg'

export default function About() {
  return (
    <>
      <Nav />
      
      <main>
        <section className="section about-hero">
          <h2>About Aceliea</h2>
          <p>
            Aceliea is a global, full-service clinical research organization (CRO) offering tailored support for
            biotechnology and pharmaceutical companies across all phases of clinical trials.
          </p>
        </section>

        <section className="section mission">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to accelerating innovative treatments by delivering high-quality, efficient, and ethical
            clinical trial services worldwide.
          </p>
        </section>

        <section className="section global">
          <h2>Global Reach</h2>
          <p>
            With offices across Asia-Pacific, North America, and Europe, Aceliea collaborates with over 4,000 trial
            sites globally, ensuring regional insight and global coordination.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={team1} alt="Team Member 1" />
            </div>
            <div className="team-member">
              <img src={team2} alt="Team Member 2" />
            </div>
            <div className="team-member">
              <img src={team3} alt="Team Member 3" />
            </div>
           
          </div>
        </section>

        <section className="section capabilities">
          <h2>Core Capabilities</h2>
          <ul className="capability-list">
            <li>Clinical Operations & Project Management</li>
            <li>Regulatory Affairs</li>
            <li>Data Management & Biostatistics</li>
            <li>Medical Writing & Pharmacovigilance</li>
            <li>Clinical Logistics</li>
          </ul>
        </section>

        <section className="section awards">
          <h2>Excellence Recognized</h2>
          <p>
            Aceliea has received recognition for quality, innovation, and workplace culture—reinforcing our standing
            as a trusted CRO partner.
          </p>
        </section>

        <section className="section leadership">
          <h2>Leadership</h2>
          <p>
            Our experienced leadership team combines scientific, operational, and regulatory expertise to guide every
            project to success.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Aceliea Clinical Research. All rights reserved.</p>
      </footer>
    </>
  );
}
