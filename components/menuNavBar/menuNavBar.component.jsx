import { useEffect, useState } from 'react';
import style from './menuNavBar.module.scss';

export default function MenuNavBarComponent() {

  const [activeLink, setActiveLink] = useState('');

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveLink(id);
  };

  return (
    <section className={style.menu_navbar_container}>
      <div className={activeLink === 'about_me' ? style.link_active : style.link} onClick={() => goToSection('about_me')}>
        <span className="material-icons">person_outline</span>
        <span>Sobre mí</span>
      </div>
      <div className={activeLink === 'studies' ? style.link_active : style.link} onClick={() => goToSection('studies')}>
        <span className="material-icons">school</span>
        <span>Estudios</span>
      </div>
      <div className={activeLink === 'experience' ? style.link_active : style.link} onClick={() => goToSection('experience')}>
        <span className="material-icons">apartment</span>
        <span>Experiencia</span>
      </div>
      <div className={activeLink === 'skills' ? style.link_active : style.link} onClick={() => goToSection('skills')}>
        <span className="material-icons">calendar_view_month</span>
        <span>Skills</span>
      </div>
      <div className={activeLink === 'projects' ? style.link_active : style.link} onClick={() => goToSection('projects')}>
        <span className="material-icons">visibility</span>
        <span>Proyectos</span>
      </div>
      <div className={activeLink === 'personal' ? style.link_active : style.link} onClick={() => goToSection('personal')}>
        <span className="material-icons">sports_score</span>
        <span>Personal</span>
      </div>
      <div className={activeLink === 'contact' ? style.link_active : style.link} onClick={() => goToSection('contact')}>
        <span className="material-icons">send</span>
        <span>Contacto</span>
      </div>
    </section>
  )
}