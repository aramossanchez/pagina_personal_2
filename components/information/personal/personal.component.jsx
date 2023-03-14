import Image from 'next/image';
import Link from 'next/link';
import style from './personal.module.scss';

export default function PersonalComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Personal</div>
            <div className={style.data_article_container}>
                <div className={style.data_article}>
                    <Image
                        src={'/images/deporte.png'}
                        width={100}
                        height={100}
                        alt='Foto de deporte'
                    />
                    <span className={style.text_article}>Una de mis grandes pasiones es el deporte. Me gusta todo tipo de deporte, y he practicado de todo. Si tuviera que elegir, me quedo con el FÚTBOL SALA y con los PATINES EN LÍNEA. Son como papá y mamá: no puedo decidir a quién quiero más.</span>
                </div>
                <div className={style.data_article}>
                    <span className={style.text_article}>Con la programación me ha pasado algo que no pensé que me pasaría nunca: DISFRUTO estudiando y trabajando. Nunca jamás tuve esa sensación, no me pasó nunca, y no he tenido nunca tan claro a lo que quiero dedicarme.</span>
                    <Image
                        src={'/images/progamar.png'}
                        width={100}
                        height={100}
                        alt='Foto de programar'
                    />
                </div>
                <div className={style.data_article}>
                    <Image
                        src={'/images/videojuego.png'}
                        width={100}
                        height={100}
                        alt='Foto de videojuego'
                    />
                    <span className={style.text_article}>Otra de mis grandes pasiones son los videojuegos. Jugando a videojuegos, a parte de pasar horas y horas de diversión y de entretenimiento, he aprendido mucho. De todo. Generalmente, se tiene una idea muy equivocada de lo que son los videojuegos. Es un entretenimiento muy desconocido para el público que pasa de la treintena, y me esfuerzo por hacer que todo el que no lo conozca LO PRUEBE y descubra las historias tan increibles y las horas de diversión que se está perdiendo.</span>
                </div>
                <div className={style.data_article}>
                    <span className={style.text_article}>Esta es muy típica, lo se, pero me encanta la música. Ya sea escuchar otra vez discos que me gustan o poner en bucle durante horas esa canción que acaba de salir. Pero, ante todo, me gusta la música en directo. Un concierto de un grupo que te gusta, con las canciones que te ponen los pelos de punta, con tus amigos...</span>
                    <Image
                        src={'/images/musica.png'}
                        width={100}
                        height={100}
                        alt='Foto de música'
                    />
                </div>
            </div>
        </article>
    )
}