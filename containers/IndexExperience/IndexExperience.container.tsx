import { TitleComponent } from '@/components/Title.component';
import experiences from '../../data/experiencie.data';
import { ExperienceRightComponent } from '@/components/Experience/ExperienceRight.component';
import { ExperienceLeftComponent } from '@/components/Experience/ExperienceLeft.component';

export function IndexExperienceContainer() {

  return (
    <section id="Experience" className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full pt-16
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Experiencia' />
      </div>
      {/* CONTENEDOR DE EXPERIENCIAS */}
      <div className='
        flex flex-col
        min-[1280px]:w-[1000px] w-[90vw]
      '>
        {experiences.map((experience) => {
          return (
            experience.orientation === 'right' ?
              <ExperienceRightComponent experience={experience} />
              :
              <ExperienceLeftComponent experience={experience} />
          )
        })}
      </div>
    </section>
  )
}