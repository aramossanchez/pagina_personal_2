import { TitleComponent } from '@/components/Title.component';
import { HardSkillComponent } from '@/components/HardSkill.component';
import hardSkills from '../../data/hardSkills.data';
import softSkills from '../../data/softSkills.data';
import { SoftSkillComponent } from '@/components/SoftSkill/SoftSkill.component';
import { useState } from 'react';

export function IndexSkillsContainer() {

  return (
    <section id='Skills' className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full pt-[30vh] pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Skills' />
      </div>
      <div className='flex flex-col items-center gap-32 w-full'>
        <div className='flex flex-col items-center gap-9 w-full'>
          <span className='text-center w-full text-primaryColor2 font-medium text-3xl'>Hard skills</span>
          <div className='
            grid items-center justify-center gap-8 px-10
            xl:w-[1200px] md:w-[700px] w-[350px]
            xl:grid-cols-10 md:grid-cols-5 grid-cols-2
          '>
            {hardSkills.map((skill, index) => {
              return (
                <HardSkillComponent key={index} image={skill.Image} text={skill.Text}/>
              )
            })}
          </div>
        </div>
        <div className='flex flex-col items-center gap-9 w-full'>
          <span className='text-center w-full text-primaryColor2 font-medium text-3xl'>Soft skills</span>
          <div className='
            grid items-center justify-center gap-8 px-10
            xl:w-[1200px] md:w-[700px] w-[350px]
            xl:grid-cols-5 md:grid-cols-4 grid-cols-2
          '>
            {softSkills.map((skill, index) => {
              return (
                <SoftSkillComponent key={index} image={skill.Image} text={skill.Text} label={skill.Label} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}