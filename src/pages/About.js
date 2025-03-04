import { useEffect, useState } from 'react';
import "../assets/css/pages/about.css";

export const About = () => {
  console.log('About Me Page');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if ((scrolledPercentage >= 60) !== isScrolled) {
        setIsScrolled(scrolledPercentage >= 60);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);
  

  return (
    <>
      <div className='container-about-me'>
        <div className='text-content-about-me'>
          <h1><span>About</span> <span className='me'>Me</span></h1>
          <p>
            Hi there! 👋 I'm Antonio, a junior web developer passionate about technology and software development. Ever since I was a kid, I was always in front of a computer, curious about how things worked behind the scenes. That curiosity grew over time and led me to study at Universidad Tecnológica de La Habana, where I earned my degree in Computer Engineering.

            During my studies, I discovered my love for web development, and for my final project, I built a full-fledged web application from scratch, taking it all the way to production in just four months. This experience ignited my passion even more, and since then, I've been continuously learning and diving deeper into modern web technologies.

            I'm currently looking for a collaborative and challenging work environment where I can tackle new problems, contribute innovative ideas, and keep improving both as a developer and as a team player. I strongly value code quality, customer satisfaction, teamwork, active listening, and continuous learning.

            If you're looking for not just a good programmer, but also a dedicated team player who strives to make every project better than before, let's connect and start building something amazing together! 🚀
          </p>
        </div>
        <div className='about-me-images-container'>
          <img 
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1740972144/20945770_nlggdn.png"
            className='about-me-image'
            alt="About Me"
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019216/Ball_Code_axx39o.png'
            className='ball about-me-image-ballCode'
            alt='Ball Code'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019217/Ball_CSS_byzw6t.png'
            className={`ball about-me-image-ballCSS ${isScrolled ? 'animate-ball' : ''}`} 
            alt='Ball CSS'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019218/Ball_HTML_bwrvww.png'
            className={`ball about-me-image-ballHTML ${isScrolled ? 'animate-ball' : ''}`}
            alt='Ball HTML'
          />
          <img 
            src='https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019217/Ball_JS_hwafir.png'
            className={`ball about-me-image-ballJS ${isScrolled ? 'animate-ball' : ''}`} 
            alt='Ball JS'
          />
          <div className='glowing-circle'></div>
        </div>
      </div>
    </>
  )
}
