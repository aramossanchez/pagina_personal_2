import Image from 'next/image';
import Link from 'next/link';
import style from './studies.module.scss';

export default function StudiesComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Estudios</div>
            <span className={style.text_article}>
                Nací en Madrid, aunque me crié y crecí en Getafe, un municipio al sur de la capital. Estudié FPI y FPII de informática y telecomunicaciones y comencé mi carrera profesional como informático. En 2018 me mudé a Albacete por una oferta laboral, y allí se me presentó la oportunidad de empezar a formarme como programador cursando un certificado de profesionalidad. Descubrí que era un mundo que me apasionaba, y decidí mudarme a Valencia para ampliar esa formación. Actualmente trabajo como Front-end Developer.
            </span>
            <div className={style.data_article_container}>
                <div className={style.data_article}>
                    <span>NOMBRE</span><span className={style.separator_data}>- - - -</span><span className={style.text_article}>Armando Ramos Sánchez</span>
                </div>
                <div className={style.data_article}>
                    <span>FECHA DE NACIMIENTO</span><span className={style.separator_data}>- - - -</span><span className={style.text_article}>10/02/1988</span>
                </div>
                <div className={style.data_article}>
                    <span>DIRECCIÓN</span><span className={style.separator_data}>- - - -</span><span className={style.text_article}>Valencia, España</span>
                </div>
                <div className={style.data_article}>
                    <span>DISPONIBILIDAD</span><span className={style.separator_data}>- - - -</span><span className={style.text_article}>Trabajando</span>
                </div>
            </div>
        </article>
    )
}