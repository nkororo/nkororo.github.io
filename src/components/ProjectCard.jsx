// src/components/ProjectCard.jsx
import React from 'react';
import { Github, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-body">
        
        {/* Header Card */}
        <div className="card-header">
          <div className="icon-box">
            <FolderGit2 size={24} />
          </div>
          <span className="category-label">
            {project.category}
          </span>
        </div>
        
        {/* Titlu */}
        <h3 className="card-title">{project.title}</h3>
        
        {/* Descriere */}
        <p className="card-description">
          {project.description}
        </p>

        {/* Linie separator */}
        <div className="divider"></div>

        {/* Tag-uri */}
        <div className="tags-list">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Buton */}
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="card-btn"
        >
          <Github size={18} />
          Vezi Sursa
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;