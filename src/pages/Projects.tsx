import '../styles/Projects.css';

export default function Projects() {
    const projects = [
        {
            title: 'Комплексные числа',
            description: 'Реализация шаблонного класса комплексных чисел',
            link: 'https://github.com/Anubissibuna/ComplexLab',
        },
        {
            title: 'RogueLike',
            description: 'Игра в жанре RogueLike с монстрами разного уровня, ловушками и случайными событиями ',
            link: 'https://github.com/Anubissibuna/RogueLike',
        },
        {
            title: 'Калькулятор',
            description: ' Простой калькулятор на JS.',
            link: 'https://github.com/Anubissibuna/WebLab4',
        },
        {
            title: 'Статичный сайт',
            description: 'Одностраничный сайт, оформленный под свой стиль',
            link: 'https://github.com/Anubissibuna/statik_site',
        },

    ];

    return (
        <section className="projects-section">
            <h2>Проекты</h2>
            <ul className="projects-list">
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
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
}