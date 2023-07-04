import Image from 'next/image';
import style from './proyects.module.scss';
//TODO --> Cambiar nombre del componente
//TODO --> Crear los popups de los proyectos
export default function ProyectsComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Proyectos</div>
            <div className={style.data_article_container}>
                <div className={style.data_article}>
                    <Image
                        width={500}
                        height={500}
                        alt={'Imagen de proyecto'}
                        src={'/images/proyecto_needbeatthedragon.jpg'}
                    />
                    <div>Need Beat the Dragon</div>
                    <div className={style.text_article}>Videojuego en Javascript</div>
                </div>
                <div className={style.data_article}>
                    <Image
                        width={500}
                        height={500}
                        alt={'Imagen de proyecto'}
                        src={'/images/proyecto_appvideoclub.jpg'}
                    />
                    <div>Videoclub</div>
                    <div className={style.text_article}>APP en React y Express</div>
                </div>
            </div>
        </article>
    )
}