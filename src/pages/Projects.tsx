import '../styles/Projects.css';
import { useState } from 'react';
import { projects } from '../data/projects';
import { Project } from '../types/Project';

export const Projects = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');

    const filteredProjects = projects.filter((project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );

    const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTech(e.target.value);
    };

    return (
        <section className="projects-section">
            <h2>Проекты</h2>
            <label htmlFor="tech-filter">Фильтр по технологиям:</label>
            <select id="tech-filter" onChange={handleTechChange}>
                <option value="All">Все</option>
                <option value="C++">C++</option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
            </select>
            <ul className="projects-list">
                {filteredProjects.map((project: Project) => (
                    <li key={project.id} className="project-item">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            Тык
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};