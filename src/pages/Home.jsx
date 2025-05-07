import React, { lazy, Suspense, useEffect, useRef } from 'react'
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import '../assets/css/pages/home.css';
import { useShowToasts } from '../hooks/useShowToasts';

const VantaFogBackground = lazy(() => import("../components/VantaFogBackground"));
const ParticlesBackground = lazy(() => import("../components/ParticlesBackground"));

export const Home = ({ homeRef, contactRef }) => {
  const arrowRef = useRef(null);
  const handleSmoothScroll = useSmoothScroll();
  const [toast, showToast] = useShowToasts();

  const handleCVdownload = () => {
    showToast('info', 'Sending...', 'Your request is processing', 'https://img.icons8.com/color/480/info--v1.png', 4000);
  
    const timeOut = setTimeout(() => {
      // Wait a brief moment after hide the first toast before show the next
      setTimeout(() => {
        showToast('success', 'Success!', 'Message sent successfully', 'https://img.icons8.com/color/480/ok--v1.png', 4000);
      }, 100); // Short wait to ensure re-rendering
    }, 4000);

    window.addEventListener("pagehide", () => clearTimeout(timeOut));
  };
  

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
        
        <div className='toast-container'>
          {toast && (
            <div className={`toast toast-home toast-${toast.type}`}>
              <img 
                src={toast.imgURL} 
                className="toast-icon" 
                alt={toast.type}
                width="20" height="20"
                loading="eager"
              />
              <div>
                <strong>{toast?.title}</strong>
                <p>{toast?.message}</p>
              </div>
            </div>
          )}
        </div>
        
        <div className='background-layer'>
          <Suspense fallback={<div className="loader"></div>}>
            <VantaFogBackground />
          </Suspense>
        </div>

        <div className='particles-layer'>
          <Suspense fallback={<div className="loader"></div>}>
            <ParticlesBackground />
          </Suspense>
        </div>


        <div className='container'>
          <div className='text-content'>
            <h1><span>Full Stack</span> <span className='developer'>Developer</span></h1>
            <div className='name-tag'>
              <span>Antonio Cruz</span>
            </div>
            <p className="home-text" fetchpriority="high">
              Hey there! 👋 I'm a software developer with over two years of experience in coding. 
              I have a degree in Computer Engineering and a strong background in Python, React, relational & non-relational databases, 
              software architecture, cloud deployments and testing.
              Feel free to contact me so we can work together! 🤝
            </p>
            <div className="buttons-container">  
              <a 
                href="https://drive.google.com/uc?export=download&id=1vcU0JmKnc-LTMze_kwJ0jetgpyFfPZWg"
                download="Antonio_Cruz_CV.pdf" 
                className="btn resume-btn"
                onClick={handleCVdownload}
              >
                Download CV
              </a>
              <button className="btn contact-btn" onClick={(e) => handleSmoothScroll(e, contactRef, 60)}>Contact Me</button>
            </div>
          </div>
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1739068069/erasebg-transformed_aelxmt.webp" 
            srcSet="
              https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1739068069/erasebg-transformed_aelxmt.webp 100w,
              https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1739068069/erasebg-transformed_aelxmt.webp 200w,
              https://res.cloudinary.com/dmfs1od9n/image/upload/f_webp,q_auto/v1739068069/erasebg-transformed_aelxmt.webp 300w
            "
            sizes="(max-width: 600px) 100px, (max-width: 1200px) 200px, 300px"
            className="avatar-image"
            alt="My avatar"
            width="300" height="300"
            loading="eager"
          />
        </div>

        {/* Arrow section */}
        <ArrowIcon className="arrow-icon bounce" />
      </section>
    </>
  )
}
