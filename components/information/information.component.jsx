import style from './information.module.scss';
import AboutMeComponent from './aboutMe/aboutMe.component';
import StudiesComponent from './studies/studies.component';

export default function InformationComponent() {
    return (
        <section className={style.information_container}>
            <AboutMeComponent />
            <StudiesComponent />
        </section>
    )
}