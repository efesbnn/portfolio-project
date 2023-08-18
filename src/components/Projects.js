import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section className="section">
      <h2>My projects</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
