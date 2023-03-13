import style from './menuNavBar.module.scss';

export default function MenuNavBarComponent() {
    return (
        <section className={style.menu_navbar_container}>
            <div className={style.link}>
                <span className="material-icons">person_outline</span>
                <span>Sobre mí</span>
            </div>
            <div className={style.link_active}>
                <span className="material-icons">school</span>
                <span>Estudios</span>
            </div>
            <div className={style.link}>
                <span className="material-icons">apartment</span>
                <span>Experiencia</span>
            </div>
            <div className={style.link}>
                <span className="material-icons">calendar_view_month</span>
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