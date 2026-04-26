import { useEffect, useState } from "react";
import "../assets/css/pages/about.css";

export const About = ({ aboutRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOutOf, setIsOutOf] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setIsScrolled(scrolledPercentage >= 50);
      setIsOutOf(scrolledPercentage >= 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled, isOutOf]);

  return (
    <>
      <section className="container-about-me" ref={aboutRef}>
        <div className="text-content-about-me">
          <h1>
            <span>About</span> <span className="me">Me</span>
          </h1>
          <p className="about-me-text">
            👋 I was born on December 12, 1994, in Havana, Cuba. From a young
            age, I've always been passionate about video games and everything
            related to technology, even though accessing it was nearly
            impossible. At 15, I started learning the basics of computing, and
            by 17, I already had a small office supply business. I decided to go
            to university to fulfill a promise to my sister, and it was there
            that I discovered my passion for coding. One of my biggest
            motivations is learning new technologies and new methods to improve
            and streamline software development. I love sharing ideas and
            knowledge with other developers. I believe the best workplace is one
            that allows me to constantly evolve. 🚀
          </p>
        </div>
        <div className="about-me-images-container">
          <img
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279189/About_Me_s6rz76.png"
            className="about-me-image"
            alt="About Me"
            width="400"
            height="400"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279168/Ball_Code_1_suixzv.png"
            className="ball about-me-image-ballCode"
            alt="Ball Code"
            width="50"
            height="50"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019217/Ball_CSS_byzw6t.png"
            className={`ball about-me-image-ballCSS ${isScrolled ? "animate-ball" : ""}`}
            alt="Ball CSS"
            width="50"
            height="50"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741279170/Ball_HTML_1_jkjg9t.png"
            className={`ball about-me-image-ballHTML ${isScrolled ? "animate-ball" : ""}`}
            alt="Ball HTML"
            width="50"
            height="50"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto/v1741019217/Ball_JS_hwafir.png"
            className={`ball about-me-image-ballJS ${isScrolled ? "animate-ball" : ""}`}
            alt="Ball JS"
            width="50"
            height="50"
            loading="lazy"
          />
          <div
            className={`glowing-circle ${isOutOf ? "glowing-circle-animate" : ""}`}
          ></div>
        </div>
      </section>
    </>
  );
};
