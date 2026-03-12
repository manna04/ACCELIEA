import React, { useState } from 'react'; 
import '../../App.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Aceliea logo" />
            </Link>
          </div>

          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            &#9776;
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            
            <li className="dropdown">
              <Link to="/news-resources" onClick={closeMenu}>News & Events</Link>
              <ul className="dropdown-menu">
                <li><Link to="/news-resources" onClick={closeMenu}>Press Releases</Link></li>
                <li><Link to="#" onClick={closeMenu}>Blog</Link></li>
                <li><Link to="#" onClick={closeMenu}>Webinars</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/solutions" onClick={closeMenu}>Solutions</Link>
              <ul className="dropdown-menu">
                <li><Link to="/solutions" onClick={closeMenu}>Clinical Trials</Link></li>
                <li><Link to="#" onClick={closeMenu}>Regulatory</Link></li>
                <li><Link to="#" onClick={closeMenu}>Data Management</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/expertise" onClick={closeMenu}>Expertise</Link>
              <ul className="dropdown-menu">
                <li><Link to="/expertise" onClick={closeMenu}>Oncology</Link></li>
                <li><Link to="#" onClick={closeMenu}>Rare Diseases</Link></li>
                <li><Link to="#" onClick={closeMenu}>Vaccines</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/careers" onClick={closeMenu}>Careers</Link>
              <ul className="dropdown-menu">
                <li><Link to="#" onClick={closeMenu}>Open Positions</Link></li>
                <li><Link to="#" onClick={closeMenu}>Internships</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/about" onClick={closeMenu}>About</Link>
              <ul className="dropdown-menu">
                <li><Link to="#" onClick={closeMenu}>Our Story</Link></li>
                <li><Link to="#" onClick={closeMenu}>Leadership</Link></li>
                <li><Link to="#" onClick={closeMenu}>Ethics</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/locations" onClick={closeMenu}>Locations</Link>
              <ul className="dropdown-menu">
                <li><Link to="#" onClick={closeMenu}>Asia-Pacific</Link></li>
                <li><Link to="#" onClick={closeMenu}>Europe</Link></li>
                <li><Link to="#" onClick={closeMenu}>North America</Link></li>
              </ul>
            </li>

            <li className="dropdown">
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
              <ul className="dropdown-menu">
                <li><Link to="#" onClick={closeMenu}>Email</Link></li>
                <li><Link to="#" onClick={closeMenu}>Support</Link></li>
              </ul>
            </li>

          </ul>
        </nav>
      </header>
    </>
  );
}