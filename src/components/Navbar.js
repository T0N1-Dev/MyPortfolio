import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import '../assets/css/components/navbar.css';

export const Navbar = ({ projectsRef, aboutRef, contactRef }) => {

  const isMobile = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

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

  const handleScroll = (e, ref, scrollNumber) => {
    e.preventDefault();
    
    if (ref.current) {
      const topPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPosition - scrollNumber, behavior: 'smooth' });
    }
  }

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
          <button className="nav-link animate__animated animate__fadeInDown animate__faster" onClick={toggleMenu}>Home</button>
          <button className="nav-link animate__animated animate__fadeInDown animate__fast" onClick={toggleMenu}>About</button>
          <button className="nav-link animate__animated animate__fadeInDown" onClick={toggleMenu}>Contact</button>
        </div>
      )}
      { isMobile && !isOpen && (
          <div className="mobile-menu">
            <button className="nav-link animate__animated animate__fadeOutUp animate__faster" onClick={toggleMenu}>Home</button>
            <button className="nav-link animate__animated animate__fadeOutUp animate__fast" onClick={toggleMenu}>About</button>
            <button className="nav-link animate__animated animate__fadeOutUp" onClick={toggleMenu}>Contact</button>
          </div>
      )}
    </nav>
  )
}
