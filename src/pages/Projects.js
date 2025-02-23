import React from 'react';
import '../assets/css/projects.css';

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    alt: "Modern workspace with laptop",
    title: "E-Commerce Dashboard",
    description: "A full-stack e-commerce dashboard with real-time analytics and inventory management",
    technologies: [
      { logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", name: "React" },
      { logo: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg", name: "Node.js" },
      { logo: "https://www.mongodb.com/assets/images/global/leaf.svg", name: "MongoDB" }
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    alt: "Code on dark background",
    title: "Social Media Platform",
    description: "A modern social networking platform with real-time messaging and content sharing",
    technologies: [
      { logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", name: "Next.js" },
      { logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg", name: "TailwindCSS" },
      { logo: "https://graphql.org/img/logo.svg", name: "GraphQL" }
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552308995-2baac1ad5490?auto=format&fit=crop&q=80&w=2070",
    alt: "Mobile development",
    title: "Mobile Finance App",
    description: "A cross-platform mobile application for personal finance management and budgeting",
    technologies: [
      { logo: "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg", name: "React Native" },
      { logo: "https://www.typescriptlang.org/images/branding/logo-grouping.svg", name: "TypeScript" },
      { logo: "https://redux.js.org/img/redux.svg", name: "Redux" }
    ]
  }
];

export const Projects = () => {
  return (
    <section className="projects-section">
      <h2><span>Some</span> <span className='projects-title'>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.alt}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="technology">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`} 
                      className="technology-logo"
                    />
                    <span className="technology-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
