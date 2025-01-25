import '../styles/Home.css'
import profilePhoto from '../assets/DOTA2.jpg';

export default function Home() {
    return (
        <section id="home" className="home-section">
            <div className="intro">
                <h1>• Name: Ilya</h1>
                <h1>• Code name: Anubis</h1>
                <h1>• Level: 20</h1>
                <h1>• Map: Vladivostok</h1>
                <h1>• Class: Student</h1>
            </div>
            <div className="home-image">
                <img src={profilePhoto}/>
            </div>
        </section>
    );
}