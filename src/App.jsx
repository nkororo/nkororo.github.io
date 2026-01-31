
import React, { useState } from 'react';
import './App.css'; 
import { projects } from './data/projects';
import ProjectCard from './components/ProjectCard';

function App() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="app-container">
      
      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <h1>Domșa Daiana</h1>
          <p>
            Proiecte dezvoltate cu pasiune.
          <\p>
          <p>
            Junior Software Developer în formare, cu un interes deosebit pentru backend și baze de date. 
            Am cunoștințe teoretice și practice în Java, Python și JS, aplicate în proiecte de tip personal/cursuri. 
            Sunt în căutarea primului rol profesional unde să pot pune în practică bazele acumulate și să evoluez alături de o echipă experimentată.
          </p>
        </div>
      </header>

      {/* Zona Principală */}
      <main className="main-content">
        
        {/* Filtre */}
        <div className="filters-container">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grila Proiecte */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <p>&copy; 2026 Daiana Domșa</p>
      </footer>
    </div>
  );
}

export default App;
