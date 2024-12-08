import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaSun, FaMoon, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import unity from './images/unity logo.png'

const MyNavbar = ({ onProductsClick }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
    setDropdownOpen(false); // Close the product dropdown
  };

  const handleProductClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setDropdownOpen(false);
    setExpanded(false);
    navigate('/categories', { state: { productCategory: category, openCategory: true } });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  }

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" expanded={expanded}>
      <div className="mobile-header">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} className="custom-toggler">
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </Navbar.Toggle>
        <div className="social-media-icons">
          <a href="https://www.instagram.com/pratik.dhote.104/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/pratik.dhote.104/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>
      <Button variant="outline-secondary" onClick={toggleDarkMode} className="dark-mode-btn">
        {darkMode ? <FaSun /> : <FaMoon />}
      </Button>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to={'/'} className="nav-link-custom" onClick={handleNavItemClick}>Home</Link></Nav.Link>
          <NavDropdown
            title={
              <>
                Product {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </>
            }
            id="basic-nav-dropdown"
            onClick={handleProductClick}
            onMouseEnter={() => handleDropdownToggle(true)}
            onMouseLeave={() => handleDropdownToggle(false)}
            show={dropdownOpen}
            ref={dropdownRef}
          >
            <NavDropdown.Item as={Link} to="/categories" state={{ productCategory: 'Turmeric' }} onClick={() => handleCategoryClick('Turmeric')} className='nav-item'>Turmeric</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categories" state={{ productCategory: 'Spices' }} onClick={() => handleCategoryClick('Rice')} className='nav-item'>Spices</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categories" state={{ productCategory: 'Cotton' }} onClick={() => handleCategoryClick('Cotton')} className='nav-item'>Cotton</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/categories" state={{ productCategory: 'Red Chilli' }} onClick={() => handleCategoryClick('Red Chilli')} className='nav-item'>Red Chilli</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link><Link to={'/about'} className="nav-link-custom" onClick={handleNavItemClick}>About us</Link></Nav.Link>
          <Nav.Link><Link to={'/gallery'} className="nav-link-custom" onClick={handleNavItemClick}>Gallery</Link></Nav.Link>
          <Nav.Link><Link to={'/catalogue'} className="nav-link-custom" onClick={handleNavItemClick}>Catalogue</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
