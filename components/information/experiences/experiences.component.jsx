import style from './experiences.module.scss';

export default function ExperiencesComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Experiencias</div>
            <div className={style.data_article_container}>
                <div className={style.data_article}>
                    <span className={style.data_date}>2021 - 2022</span>
                    <p>
                    <span>GeeksHubs Academy</span> - <span className={style.text_article}>Valencia</span>
                    </p>
                    <span className={style.data_name}>Bootcamp Presencial Full-Stack-Developer</span>
                    <span className={style.text_article}>Desarrollo en Front-End y Back-End, estudiando las tecnologías HTML5, CSS3, SASS, JS, PHP, NodeJS, React, Redux, Express, MySQL, MongoDB y Docker.</span>
                </div>
                <div className={style.data_article}>
                    <span className={style.data_date}>2020 - 2021</span>
                    <p>
                    <span>GeeksHubs Academy</span> - <span className={style.text_article}>Valencia</span>
                    </p>
                    <span className={style.data_name}>Bootcamp Online Back-End-Developer</span>
                    <span className={style.text_article}>Desarrollo en Back-End, estudiando las tecnologías Javascript, NodeJS, Express, MySQL y MongoDB</span>
                </div>
                <div className={style.data_article}>
                    <span className={style.data_date}>2021 - 2022</span>
                    <p>
                    <span>Inforcad Centro de Formación</span> - <span className={style.text_article}>Hellín, Albacete</span>
                    </p>
                    <span className={style.data_name}>Certificado de Profesionalidad en Programación en Lenguajes Estructurados de Aplicaciones de Gestión</span>
                    <span className={style.text_article}>Desarrollar aplicaciones de gestión a partir de un diseño especificado mediante técnicas de programación estructurada, con Java y SQL</span>
                </div>
            </div>
        </article>
    )
}