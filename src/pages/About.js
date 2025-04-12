import { useEffect, useState } from 'react';
import "../assets/css/pages/about.css";

export const About = ({ aboutRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOutOf, setIsOutOf] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setIsScrolled(scrolledPercentage >= 50);
      setIsOutOf(scrolledPercentage >= 70);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, isOutOf]);
  

  return (
    <>
      <section className='container-about-me' ref={aboutRef}>
        <div className='text-content-about-me'>
          <h1><span>About</span> <span className='me'>Me</span></h1>
          <p className='about-me-text'>
            Hi! 👋 I'm Antonio, a passionate web developer with a degree in Computer Engineering from Universidad Tecnológica de La Habana. My curiosity for how things work led me to tech early on, and during my studies, I built and deployed a full web app as my final project, an experience that sparked my love for web development.

            I'm eager to join a collaborative team where I can solve real problems, share ideas, and grow as both a developer and teammate. I value clean code, great user experiences, and continuous learning.

            If you're looking for someone who’s not just skilled but also deeply committed to building great things let’s connect! 🚀
          </p>
        </div>
        <div className='about-me-images-container'>
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279189/About_Me_s6rz76.png"
            className='about-me-image'
            alt="About Me"
            width="400" height="400"
            loading='lazy'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279168/Ball_Code_1_suixzv.png'
            className='ball about-me-image-ballCode'
            alt='Ball Code'
            width="50" height="50"
            loading='lazy'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019217/Ball_CSS_byzw6t.png'
            className={`ball about-me-image-ballCSS ${isScrolled ? 'animate-ball' : ''}`} 
            alt='Ball CSS'
            width="50" height="50"
            loading='lazy'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279170/Ball_HTML_1_jkjg9t.png'
            className={`ball about-me-image-ballHTML ${isScrolled ? 'animate-ball' : ''}`}
            alt='Ball HTML'
            width="50" height="50"
            loading='lazy'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019217/Ball_JS_hwafir.png'
            className={`ball about-me-image-ballJS ${isScrolled ? 'animate-ball' : ''}`} 
            alt='Ball JS'
            width="50" height="50"
            loading='lazy'
          />
          <div className={`glowing-circle ${isOutOf ? 'glowing-circle-animate' : ''}`}></div>
        </div>
      </section>
    </>
  )
}
