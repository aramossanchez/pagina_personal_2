import style from './information.module.scss';
import AboutMeComponent from './aboutMe/aboutMe.component';
import StudiesComponent from './studies/studies.component';
import ExperiencesComponent from './experiences/experiences.component';
import SkillsComponent from './skills/skills.component';
import ProyectsComponent from './proyects/proyects.component';
import PersonalComponent from './personal/personal.component';

export default function InformationComponent() {
    return (
        <section className={style.information_container}>
            <AboutMeComponent />
            <StudiesComponent />
            <ExperiencesComponent />
            <SkillsComponent />
            <ProyectsComponent />
            <PersonalComponent />
        </section>
    )
}