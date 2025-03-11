import React from 'react';
import '../assets/css/components/footer.css';
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useWindowSize } from '../hooks/useWindowSize';

export const Footer = ({ homeRef, aboutRef, contactRef, projectsRef }) => {
  const handleScroll = useSmoothScroll();
  const isMobile = useWindowSize();

  let offsetProjects = isMobile ? 0 : 300;

  return (
    <footer>
      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
      </div>
      <ul className='social_icon'>
        <li>
          <a href="https://x.com/T0N1_DEV" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1741376230/icons8-x-500_s5myo7.png" 
              className="social-icon X"
              alt="X" 
              width="20" height="20"
              loading='lazy'
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/T0N1-Dev" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1739393991/github_ualv1s.png" 
              alt="GitHub" 
              className="social-icon github-icon"
              loading='lazy'
            />
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/22050198/antonio-cruz" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1741376701/icons8-stack-overflow-500_m1vojm.png" 
              className="social-icon stackOverflow-icon"
              alt="Stack Overflow"
              width="20" height="20" 
              loading='lazy'
            />
          </a>
        </li>
      </ul>
      <ul className='menu'>
        <li><a href='#home' onClick={(e) => handleScroll(e, homeRef, 100)}>Home</a></li>
        <li><a href='#projects' onClick={(e) => handleScroll(e, projectsRef, offsetProjects)}>Projects</a></li>
        <li><a href='#about' onClick={(e) => handleScroll(e, aboutRef, 0)}>About</a></li>
        <li><a href='#contact' onClick={(e) => handleScroll(e, contactRef, 60)}>Contact</a></li>
      </ul>
      <p>Developed by T0N1 - Updated in February 2025</p>
    </footer>
  )
}
