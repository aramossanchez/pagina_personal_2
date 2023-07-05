import style from './information.module.scss';
import AboutMeComponent from './aboutMe/aboutMe.component';
import StudiesComponent from './studies/studies.component';
import ExperiencesComponent from './experiences/experiences.component';
import SkillsComponent from './skills/skills.component';
import ProyectsComponent from './proyects/proyects.component';
import PersonalComponent from './personal/personal.component';
import ContactComponent from './contact/contact.component';
//TODO --> Crear el componente de contacto
export default function InformationComponent() {

  return (
    <section className={style.information_container}>
      <div id='about_me'>
        <AboutMeComponent />
      </div>
      <div id='studies'>
        <StudiesComponent />
      </div>
      <div id='experience'>
        <ExperiencesComponent />
      </div>
      <div id='skills'>
        <SkillsComponent />
      </div>
      <div id='projects' className={style.div_container}>
        <ProyectsComponent />
      </div>
      <div id='personal'>
        <PersonalComponent />
      </div>
      <div id='contact' className={style.div_container}>
        <ContactComponent />
      </div>
    </section>
  )
}