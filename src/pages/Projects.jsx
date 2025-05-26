import React from 'react';
import '../assets/css/pages/projects.css';

const projects = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1740582296/CalendarCapture_xhd7is.png",
    alt: "Event Calendar App Image",
    title: "Event Calendar App",
    description: `A modern and intuitive calendar app for managing events efficiently. 
                  Users can register securely, create, update, view, and share events with ease. 
                  Designed for a smooth and fast experience, it simplifies scheduling and collaboration.`,
    link: 'https://t0n1-dev.github.io/MERN-Calendar-Frontend/',
    github: 'https://github.com/T0N1-Dev/MERN-Calendar-Frontend',
    technologies: [
      { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", name: "React" },
      { logo: "https://img.icons8.com/fluency/240/node-js.png", name: "Node.js" },
      { logo: "https://img.icons8.com/color/96/mongo-db.png", name: "MongoDB" },
      { logo: "https://img.icons8.com/color/480/express-js.png", name: "Express.js" },
      { logo: "https://img.icons8.com/color/480/redux.png", name: "Redux" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1740594999/react-router-svgrepo-com_il0l7e.svg", name: "React Router" },
      { logo: "https://img.icons8.com/color/480/java-web-token.png", name: "JWT" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1740591797/jest-snapshot-svgrepo-com_xykglj.svg", name: "Jest" }
    ]
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1740515058/Estadistica_en_el_dash_2_z4weoy.jpg",
    alt: "Management ISMN Image",
    title: "ISMN Management",
    description: `Efficient management of ISMN requests and music catalog. 
                  This platform allows clients to register and submit ISMN requests for their music books. 
                  All users can explore the registered music catalog. 
                  Employees can manage requests, site publications, generate graphical reports, and track user activity from an intuitive interface.`,
    link: 'https://ismn-cuba.onrender.com',
    github: 'https://github.com/T0N1-Dev/ISMN-Cuba',
    technologies: [
      { logo: "https://img.icons8.com/color/480/python--v1.png", name: "Python" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1740587765/django-icon-svgrepo-com_ve7q2c.svg", name: "Django" },
      { logo: "https://img.icons8.com/ios-filled/250/jquery.png", name: "jQuery" },
      { logo: "https://img.icons8.com/color/480/postgreesql.png", name: "PostgreSQL" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1740587913/sqlite-svgrepo-com_cdkqos.svg", name: "SQLite" },
      { logo: "https://img.icons8.com/color-glass/480/bootstrap.png", name: "Bootstrap" }
    ]
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745263470/React-tech-Slider-Demo_e9ozt4.png",
    alt: "NPM package",
    title: "react-tech-slider",
    description: `A reusable and customizable npm package to showcase brand logos or tech stacks with 
                  smooth infinite animation. Perfect for portfolios, agency pages, SaaS websites, and more...`,
    link: 'https://react-tech-slider-demo-git-main-t0n1-devs-projects.vercel.app/',
    github: 'https://github.com/T0N1-Dev/react-tech-slider?tab=readme-ov-file',
    npm: 'https://www.npmjs.com/package/react-tech-slider?activeTab=readme',
    technologies: [
      { logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg", name: "React" },
      { logo: "https://img.icons8.com/fluency/240/nextjs.png", name: "Next.js" },
      { logo: "https://img.icons8.com/color/144/tailwindcss.png", name: "Tailwind" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745264239/139895814_wbtpon.png", name: "Shadcn" },
      { logo: "https://img.icons8.com/fluency/240/vite.png", name: "Vite" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745264301/LogosVitest_tbii6v.svg", name: "Vitest" },
    ]
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1746639596/Gamor-Technical-Test_ghnv3u.png",
    alt: "Gamor Streaming",
    title: "Gamor Streaming",
    description: `This project is a web application for the "Gamor" game streaming platform, developed as a frontend assessment. 
                  It focuses on HTML and CSS skills, with additional functionality implemented using the React framework. 🚀`,
    link: 'https://gamor-technical-test.vercel.app/',
    github: 'https://github.com/T0N1-Dev/technical-test',
    technologies: [
      { logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg", name: "React" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1746640784/purple-css-logo_xufnis.webp", name: "CSS" },
      { logo: "https://img.icons8.com/fluency/240/vite.png", name: "Vite" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745264301/LogosVitest_tbii6v.svg", name: "Vitest" },
    ]
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1746643389/EcoTrack_amilce.png",
    alt: "EcoTrack",
    title: "EcoTrack",
    description: `EcoTrack is a fictional video streaming platform focused on promoting sustainable content and lifestyle. 
                  The project consists of a fully functional mini website developed using React, React Router, and SCSS Modules. 
                  It includes four main pages: Home, About Us, Contact, and Data. The design is fully responsive and follows modern UI/UX best practices.`,
    link: 'https://technical-test-ecotrack.vercel.app/',
    github: 'https://github.com/T0N1-Dev/technical-test-ecotrack',
    technologies: [
      { logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg", name: "React" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1740594999/react-router-svgrepo-com_il0l7e.svg", name: "React Router" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1740594744/sass-svgrepo-com_bxczfn.svg", name: "Sass" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1746640784/purple-css-logo_xufnis.webp", name: "CSS" },
      { logo: "https://img.icons8.com/fluency/240/vite.png", name: "Vite" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745264301/LogosVitest_tbii6v.svg", name: "Vitest" },
    ]
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dmfs1od9n/image/upload/v1748212994/desktop-design-light_n56qhf.jpg",
    alt: "Browser Extensions Manager UI",
    title: "Browser Extensions Manager UI",
    description: `A web app for managing browser extensions. Users can toggle extensions on/off, filter by status, remove extensions, and switch between light/dark themes. 
                  The UI is responsive and accessible, with clear focus and hover states.`,
    link: 'https://browser-extensions-manager-six.vercel.app/',
    github: 'https://github.com/T0N1-Dev/browser-extensions-manager',
    technologies: [
      { logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg", name: "React" },
      { logo: "https://img.icons8.com/color/144/tailwindcss.png", name: "Tailwind" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745264239/139895814_wbtpon.png", name: "Shadcn" },
      { logo: "https://img.icons8.com/fluency/240/vite.png", name: "Vite" },
      { logo: "https://res.cloudinary.com/dmfs1od9n/image/upload/f_auto,q_auto,w_auto/v1745264301/LogosVitest_tbii6v.svg", name: "Vitest" },
    ]
  }
];

export const Projects = ({ projectsRef }) => {
  return (
    <section className="projects-section" ref={projectsRef}>
      <h2><span>Some</span> <span className='projects-title'>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                srcSet={`
                  ${project.image} 50w,
                  ${project.image} 100w,
                  ${project.image} 200w
                  `}
                sizes="(max-width: 600px) 50px, (max-width: 1200px) 100px, 200px"
                className="project-image"
                alt={project.alt}
                width="200" height="200"
                loading='lazy'
              />
            </div>
            <div className="project-content">
              <div className='project-header'>
                <h3 className="project-title">{project.title}</h3>
                <div className='project-links'>
                  <a href={project.link}><img src='https://res.cloudinary.com/dmfs1od9n/image/upload/v1740676850/link-svgrepo-com_1_ucixbm.svg' alt='Demo Icon' className='icon' loading='lazy' width="10" height="10"/></a>
                  <a href={project.github}><img src='https://res.cloudinary.com/dmfs1od9n/image/upload/v1740676850/github-142-svgrepo-com_on77o9.svg' alt='Github Icon' className='icon' loading='lazy' width="10" height="10"/></a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className={`project-technologies-wrapper ${project.id === 1 ? 'mask-wrapper' : ''}`}>
                <div className={`project-technologies ${project.id === 1 ? 'animate' : ''}`}>
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="technology">
                      <img 
                        src={tech.logo}
                        srcSet={`
                          ${tech.logo} 20w,
                          ${tech.logo} 50w,
                          ${tech.logo} 100w
                        `}
                        sizes="(max-width: 600px) 20px, (max-width: 1200px) 50px, 100px" 
                        className="technology-logo"
                        alt={`${tech.name} logo`} 
                        width="100" height="100"
                        loading='lazy'
                      />
                      <span className="technology-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
