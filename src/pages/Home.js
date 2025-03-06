import React, { useEffect, useRef } from 'react'
import { VantaFogBackground } from '../components/VantaFogBackground'
import { ParticlesBackground } from '../components/ParticlesBackground'
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import '../assets/css/pages/home.css';


export const Home = ({ homeRef, contactRef }) => {
  const arrowRef = useRef(null);
  const handleSmoothScroll = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (arrowRef.current) {
        if (window.scrollY >= 30) {
          arrowRef.current.classList.add('fade-out');
        } else {
          arrowRef.current.classList.remove('fade-out');
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const ArrowIcon = ({ className }) => (
    <svg 
      ref={arrowRef}
      className={className} 
      fill="#ffffff" 
      height="60px" 
      width="60px" 
      viewBox="0 0 330 330" 
      stroke="#c90404"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_iconCarrier"> 
        <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
      </g>
    </svg>
  );  
  
  return (
    <>
      <section className='home-section' ref={homeRef}>
        <div className='background-layer'>
          <VantaFogBackground />
        </div>

        <div className='particles-layer'>
          <ParticlesBackground />
        </div>

        <div className='container'>
          <div className='text-content'>
            <h1><span>Full Stack</span> <span className='developer'>Developer</span></h1>
            <div className='name-tag'>
              <span>Antonio Cruz</span>
            </div>
            <p>
              Hey there! 👋 I'm a software developer with over two years of experience in coding. 
              I have a degree in Computer Engineering and a strong background in Python, React, relational & non-relational databases, 
              software architecture, cloud deployments and testing.
              Feel free to contact me so we can work together! 🤝
            </p>
            <div className="buttons-container">
              <button className="btn resume-btn">Download CV</button>
              <button className="btn contact-btn" onClick={(e) => handleSmoothScroll(e, contactRef, 60)}>Contact Me</button>
            </div>
          </div>
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1739068069/erasebg-transformed_aelxmt.webp" 
            className="avatar-image"
            alt="My avatar"
          />
        </div>

        {/* Arrow section */}
        <ArrowIcon className="arrow-icon bounce" />
      </section>
    </>
  )
}
