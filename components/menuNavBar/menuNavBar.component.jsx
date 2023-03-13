import style from './menuNavBar.module.scss';

export default function MenuNavBarComponent() {
    return (
        <section>
            <div className={style.link}>
                <span className="material-icons">person_outline</span>
                <span>Sobre mí</span>
            </div>
            <div className={style.link_active}>
                <span className="material-icons">article</span>
                <span>Resumen</span>
            </div>
        </section>
    )
}