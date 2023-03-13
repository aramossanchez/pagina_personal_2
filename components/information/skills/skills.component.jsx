import style from './skills.module.scss';
import { hardSkills } from '../../../services/skills.sevices';
import { softSkills } from '../../../services/skills.sevices';

export default function SkillsComponent() {
    return (
        <article className={style.article}>
            <div className={style.title_article}>Skills</div>
            <div className={style.data_article_container}>
                <div>
                    <div>Hard skills</div>
                    <div className={style.hard_skills_container}>
                        {hardSkills.map((hardSkill, index) => {
                            return (
                                <div key={`${index}-${hardSkill}`}>
                                    <span className="material-icons">done</span>
                                    <span>{hardSkill}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div>Soft skills</div>
                    <div>
                        {softSkills.map((softSkill, index) => {
                            return (
                                <div key={`${index}-${softSkill}`}>
                                    <span className="material-icons">done</span>
                                    <span>{softSkill}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </article>
    )
}