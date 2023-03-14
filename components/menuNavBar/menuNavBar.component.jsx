import { useState } from 'react';
import style from './menuNavBar.module.scss';

export default function MenuNavBarComponent() {

    const [darkMode, setDarkMode] = useState(false);

    const handleThemeChangeLight = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('light_theme');
    };

    const handleThemeChangeFruit = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('fruit_theme');
    };

    const handleThemeChangeRainy = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('rainy_theme');
    };

    const handleThemeChangeEight = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('eight_theme');
    };

    return (
        <section className={style.menu_navbar_container}>
            <div className={style.link}>
                <span className="material-icons" onClick={() => handleThemeChangeLight()}>person_outline</span>
                <span>Sobre mí</span>
            </div>
            <div className={style.link_active}>
                <span className="material-icons" onClick={() => handleThemeChangeFruit()}>school</span>
                <span>Estudios</span>
            </div>
            <div className={style.link}>
                <span className="material-icons" onClick={() => handleThemeChangeRainy()}>apartment</span>
                <span>Experiencia</span>
            </div>
            <div className={style.link}>
                <span className="material-icons" onClick={() => handleThemeChangeEight()}>calendar_view_month</span>
                <span>Skills</span>
            </div>
            <div className={style.link}>
                <span className="material-icons">visibility</span>
                <span>Proyectos</span>
            </div>
            <div className={style.link}>
                <span className="material-icons">sports_score</span>
                <span>Personal</span>
            </div>
            <div className={style.link}>
                <span className="material-icons">send</span>
                <span>Contacto</span>
            </div>
        </section>
    )
}