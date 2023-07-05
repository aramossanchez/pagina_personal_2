import style from './experiences.module.scss';
//TODO --> Logos de empresas
export default function ExperiencesComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Experiencias</div>
            <div className={style.data_article_container}>
                <div className={style.data_article}>
                    <span className={style.data_date}>2022 - Actualidad</span>
                    <p>
                        <span>GeeksHubs</span> - <span className={style.text_article}>Valencia</span>
                    </p>
                    <span className={style.data_name}>Front-end Developer</span>
                    <ol>
                        <li>Proyectos:</li>
                        <li className={style.text_article}>- Nexo: ERP para empresa de telecomunicaciones (localización y solución de bugs, creación de nuevas funcionalidades, mantenimiento de código).</li>
                        <li className={style.text_article}>Tecnologías utilizadas: Angular, Typescript</li>
                    </ol>
                </div>
                <div className={style.data_article}>
                    <span className={style.data_date}>2022</span>
                    <p>
                        <span>Cyberdelia</span> - <span className={style.text_article}>Barcelona</span>
                    </p>
                    <span className={style.data_name}>Full-stack Developer</span>
                    <ol>
                        <li>Proyectos:</li>
                        <li className={style.text_article}>- Nex: página web dedicada a la compra de neumáticos (localización y solución de bugs, creación de nuevas funcionalidades) (fullstack).</li>
                        <li className={style.text_article}>Tecnologías utilizadas: React, Laravel y Mysql.</li>
                        <li className={style.text_article}>- Riversa: página web dedicada a la compra de artículos para el jardín (creación de proyecto de cero) (frontend).</li>
                        <li className={style.text_article}>Tecnologías utilizadas: React.</li>
                        <li className={style.text_article}>- CLB: widget en página web dedicada a la compra de artículos de maquillaje de lujo (creación de proyecto de cero) (frontend).</li>
                        <li className={style.text_article}>Tecnologías utilizadas: React.</li>
                    </ol>
                </div>
                <div className={style.data_article}>
                    <span className={style.data_date}>2018 - 2019</span>
                    <p>
                        <span>Marktel</span> - <span className={style.text_article}>Valencia</span>
                    </p>
                    <span className={style.data_name}>Soporte técnico teléfonico a usuarios de empresa de telecomunicaciones (Vodafone)</span>
                    <ol>
                        <li>Funciones desempeñadas:</li>
                        <li className={style.text_article}>- Resolución de incidencias técnicas.</li>
                        <li className={style.text_article}>- Gestión de órdenes de trabajo para envío de técnicos de campo.</li>
                        <li className={style.text_article}>- Escalado de incidencias a departamentos superiores.</li>
                    </ol>
                </div>
            </div>
        </article>
    )
}