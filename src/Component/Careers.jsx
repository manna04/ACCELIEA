import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Shared/header/Nav'; 

export default function Careers() {
  return (
    <>
      <Nav />
      
      <main>
        <section className="section working-at">
          <h2>Working at Aceliea</h2>
          <p>Join a global team of dedicated professionals...</p>
        </section>

        <section className="section careers-section">
          <div className="career-cards">
            <div className="career-card">
              <h3>Clinical Operations</h3>
              <p>Manage trials with precision and impact, improving patient outcomes.</p>
            </div>
            <div className="career-card">
              <h3>Project Management</h3>
              <p>Lead complex projects across global sites with strategic oversight.</p>
            </div>
            <div className="career-card">
              <h3>Biometrics</h3>
              <p>Deliver data-driven insights with accuracy and regulatory alignment.</p>
            </div>
            <div className="career-card">
              <h3>Medical Affairs</h3>
              <p>Bridge science and strategy through clinical expertise and evidence.</p>
            </div>
            <div className="career-card">
              <h3>Regulatory Affairs</h3>
              <p>Navigate complex global regulations to support trial success.</p>
            </div>
            <div className="career-card">
              <h3>Corporate Services</h3>
              <p>Support teams in HR, Finance, and Legal driving our mission forward.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Career Development</h2>
          <p>We provide structured training pathways, mentorship, and hands-on opportunities through programs like CRA Essentials and Associate PM tracks.</p>
        </section>

        <section className="section">
          <h2>Explore Opportunities</h2>
          <p>We’re hiring across Asia-Pacific, Europe, and North America. Join us and shape the future of global clinical research.</p>
          {/* a tag-কে Link-এ পরিবর্তন করা হয়েছে */}
          <Link to="#" className="btn-know-more">View Open Positions</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Aceliea Clinical Research. All rights reserved.</p>
      </footer>
    </>
  );
}