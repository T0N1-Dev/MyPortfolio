import "../assets/css/pages/projects.css";

export const Projects = ({ projectsRef, projects }) => {
  return (
    <section className="projects-section" ref={projectsRef}>
      <h2>
        <span>Some</span> <span className="projects-title">Projects</span>
      </h2>
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
                width="200"
                height="200"
                loading="lazy"
              />
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link}>
                      <img
                        src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1740676850/link-svgrepo-com_1_ucixbm.svg"
                        alt="Demo Icon"
                        className="icon"
                        loading="lazy"
                        width="10"
                        height="10"
                      />
                    </a>
                  )}
                  <a href={project.github}>
                    <img
                      src="https://res.cloudinary.com/dmfs1od9n/image/upload/v1740676850/github-142-svgrepo-com_on77o9.svg"
                      alt="Github Icon"
                      className="icon"
                      loading="lazy"
                      width="10"
                      height="10"
                    />
                  </a>
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div
                className={`project-technologies-wrapper ${project.id === projects.length ? "mask-wrapper" : ""}`}
              >
                <div
                  className={`project-technologies ${project.id === projects.length ? "animate" : ""}`}
                >
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
                        width="100"
                        height="100"
                        loading="lazy"
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
