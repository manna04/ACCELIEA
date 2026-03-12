import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

export default function Nav() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Aceliea logo" />
            </Link>
          </div>
          <div className="menu-toggle" id="menu-toggle">&#9776;</div>
          <ul className="nav-links" id="nav-links">
            <li className="dropdown">
              <Link to="/news-resources">News & Events</Link>
              <ul className="dropdown-menu">
                <li><Link to="/news-resources">Press Releases</Link></li>
                <li><Link to="#">Blog</Link></li>
                <li><Link to="#">Webinars</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/solutions">Solutions</Link>
              <ul className="dropdown-menu">
                <li><Link to="/solutions">Clinical Trials</Link></li>
                <li><Link to="#">Regulatory</Link></li>
                <li><Link to="#">Data Management</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/expertise">Expertise</Link>
              <ul className="dropdown-menu">
                <li><Link to="/expertise">Oncology</Link></li>
                <li><Link to="#">Rare Diseases</Link></li>
                <li><Link to="#">Vaccines</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/careers">Careers</Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Open Positions</Link></li>
                <li><Link to="#">Internships</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/about">About</Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Our Story</Link></li>
                <li><Link to="#">Leadership</Link></li>
                <li><Link to="#">Ethics</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/locations">Locations</Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Asia-Pacific</Link></li>
                <li><Link to="#">Europe</Link></li>
                <li><Link to="#">North America</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <Link to="/contact">Contact</Link>
              <ul className="dropdown-menu">
                <li><Link to="#">Email</Link></li>
                <li><Link to="#">Support</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}