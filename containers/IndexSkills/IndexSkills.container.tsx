import { TitleComponent } from '@/components/TitleComponent';
import { HardSkillComponent } from '@/components/HardSkill.component';
import hardSkills from '../../data/hardSkills.data';

export function IndexSkillsContainer() {

  return (
    <section className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[30vh] pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Skills' />
      </div>
      <div className='flex flex-col items-center gap-10 w-full'>
        <div className='flex flex-col items-center gap-9 w-full'>
          <span className='text-center w-full text-primaryColor2 font-medium text-3xl'>Hardskills</span>
          <div className='
            flex flex-row items-center justify-center gap-8 flex-wrap px-10
            xl:w-full md:w-[700px] w-[350px]
          '>
            {hardSkills.map((skill, index) => {
              console.log(skill);
              return (
                <HardSkillComponent key={index} url={skill.Url} image={skill.Image} text={skill.Text} />
              )
            })}
          </div>
        </div>
        <div>
          <span className='text-primaryColor2 font-medium text-3xl'>Softskills</span>
          <div></div>
        </div>
      </div>
    </section>
  )
}