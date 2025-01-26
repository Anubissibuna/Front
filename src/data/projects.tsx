import { Project } from '../types/Project.tsx';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Комплексные числа',
        description: 'Реализация шаблонного класса комплексных чисел',
        technologies: ['C++', 'OOP'],
        link: 'https://github.com/Anubissibuna/ComplexLab',
    },
    {
        id: 2,
        title: 'RogueLike',
        description: 'Игра в жанре RogueLike с монстрами разного уровня, ловушками и случайными событиями',
        technologies: ['C++'],
        link: 'https://github.com/Anubissibuna/RogueLike',
    },
    {
        id: 3,
        title: 'Калькулятор',
        description: 'Простой калькулятор на JS.',
        technologies: ['JavaScript'],
        link: 'https://github.com/Anubissibuna/WebLab4',
    },
    {
        id: 4,
        title: 'Статичный сайт',
        description: 'Одностраничный сайт, оформленный под свой стиль',
        technologies: ['HTML', 'CSS'],
        link: 'https://github.com/Anubissibuna/statik_site',
    },
];