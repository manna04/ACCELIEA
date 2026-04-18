import React from 'react';
import Nav from '../Shared/header/Nav';
import clinicVideo from '../assets/images/clinic_video.mov';

export default function Index() {
    return (
        <>
            <Nav />

            <section className="hero">
                <video className="hero-video" autoPlay muted loop playsInline>
                    <source src={clinicVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
                <div className="hero-text">
                    <h1>Welcome to Accelia Clinical Solutions</h1>
                    <p>Your trusted partner in global clinical trials and biopharmaceutical innovation.</p>
                </div>
            </section>

            <section id="news" className="section">
                <h2>News & Resources</h2>
                <p>Stay updated with the latest industry insights, company news, and whitepapers.</p>
            </section>

            <section id="solutions" className="section">
                <h2>Our Solutions</h2>
                <p>From site-level execution to regulatory excellence, we offer integrated SMO solutions that drive precision, quality, and accelerated clinical outcomes.</p>
            </section>

            <section id="expertise" className="section">
                <h2>Expertise</h2>
                <p>With a strong SMO foundation, we bring therapeutic excellence across Oncology, Hematology, Gastroenterology, Neurology, Orthopedics, Ophthalmology, Pediatrics, Vaccines, Infectious Diseases, Rare Diseases, Cardiology, Gynaecology, and General Medicine.</p>
            </section>

            <section id="careers" className="section">
                <h2>Careers</h2>
                <p>Be part of Accelia’s expanding SMO ecosystem, driving high-impact clinical research that transforms lives across India.<br/>Headquartered in Kolkata, with a strong presence across all regions of West Bengal, Assam, Bhubaneswar, Bihar, and Uttar Pradesh, we offer a platform to grow, innovate, and lead in the future of clinical research.</p>
            </section>

            <section id="about" className="section">
                <h2>About Aceliea</h2>
                <p>Aceliea is a leading CRO committed to accelerating drug development through scientific excellence and operational expertise.</p>
            </section>

            <section id="locations" className="section">
                <h2>Our Locations</h2>
                <p>We operate in multiple countries with regional offices across Asia-Pacific, Europe, and North America.</p>
            </section>

            <section id="contact" className="section">
                <h2>Contact Us</h2>
                <p>Email: info@aceliea.com | Phone: +1-800-123-4567</p>
            </section>

            <footer>
                <p>&copy; 2025 Aceliea Clinical Research. All rights reserved.</p>
            </footer>
        </>
    );
}