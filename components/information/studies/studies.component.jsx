import style from './studies.module.scss';
import { studies } from "../../../services/studies.service";
//TODO --> Logos de academias
export default function StudiesComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Estudios</div>
            <div className={style.data_article_container}>
                {studies.map((study) => {
                    return (
                        <div className={style.data_article}>
                            <span className={style.data_date}>{study.year}</span>
                            <p>
                                <span>{study.school}</span> - <span className={style.text_article}>{study.city}</span>
                            </p>
                            <span className={style.data_name}>{study.course}</span>
                            <span className={style.text_article}>{study.content}</span>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}