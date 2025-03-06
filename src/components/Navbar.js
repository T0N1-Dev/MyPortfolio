import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import '../assets/css/components/navbar.css';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export const Navbar = ({ projectsRef, aboutRef, contactRef }) => {

  const isMobile = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = useSmoothScroll();

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 10 && isOpen) {
          setIsOpen(false);
        } 
      }
  
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar animate__animated animate__fadeIn">

      <div className='nav-left'>
        {isMobile ? (
          <button className='menu-toggle' onClick={toggleMenu}>
            ☰
          </button>
        ) : (
          <div className={`nav-links ${isOpen ? 'open' : ''}`}>
            <button className="nav-link" onClick={(e) => handleScroll(e, contactRef, 50)}>Contact</button>
            <button className="nav-link" onClick={(e) => handleScroll(e, aboutRef, 0)}>About</button>
            <button className="nav-link" onClick={(e) => handleScroll(e, projectsRef, 300)}>Projects</button>
          </div>
        )}
      </div>
      
      <div className='nav-center'>
        <span className='logo'>AC</span>
      </div>

      <div className="nav-right">
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1739393021/images_1_lijyvr.png" 
            alt="LinkedIn" 
            className="social-icon"
          />
        </a>
        <a href="https://github.com/T0N1-Dev" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1739393991/github_ualv1s.png" 
            alt="GitHub" 
            className="social-icon github-icon"
          />
        </a>
        <a href="https://stackoverflow.com/users/22050198/antonio-cruz" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1739393797/Stack_Overflow_icon.svg_vau8u7.png" 
            alt="Stack Overflow" 
            className="social-icon stackOverflow-icon"
          />
        </a>
      </div>
      
      {isMobile && isOpen && (
        <div className="mobile-menu">
          <button className="nav-link animate__animated animate__fadeInDown animate__faster" onClick={(e) => handleScroll(e, projectsRef)}>Projects</button>
          <button className="nav-link animate__animated animate__fadeInDown animate__fast" onClick={(e) => handleScroll(e, aboutRef)}>About</button>
          <button className="nav-link animate__animated animate__fadeInDown" onClick={(e) => handleScroll(e, contactRef)}>Contact</button>
        </div>
      )}
    </nav>
  )
}
