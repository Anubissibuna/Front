import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Anubis</p>
            <ul className="footer-links">
                <li><a href="https://github.com/Anubissibuna" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://vk.com/id277338330" target="_blank" rel="noopener noreferrer">VK</a></li>
                <li><a href="https://t.me/exortable">TG</a></li>
            </ul>
        </footer>
    );
}