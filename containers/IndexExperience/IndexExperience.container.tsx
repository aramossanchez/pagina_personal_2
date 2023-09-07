import { ButtonComponent } from '@/components/Button.component';
import style from './IndexExperience.module.css';
import Image from 'next/image';
import { basePath } from '../../config/config';
import { SecondaryButton } from '@/components/SecondaryButton.component';
import { IconBrandInstagram, IconBriefcase2 } from '@tabler/icons-react';

export function IndexExperienceContainer() {

  return (
    <section className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-[100vh]
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <span className='
          text-titleFontColor
          text-6xl
        '>
          Experience
        </span>
      </div>
      {/* CONTENEDOR DE EXPERIENCIAS */}
      <div className='
        flex flex-col
        min-[1280px]:w-[1000px] w-[90vw]
      '>
        <div className='w-full flex flex-row items-center justify-end'>
          <div className='relative h-full w-[1%] '>
            <hr className='
              border-l-4 border-t-0 border-primaryColor2 h-full
            '/>
            <div className='absolute top-0 border-2 border-titleFontColor rounded-full p-1 bg-backgroundColor left-[-0.95em]'>
              <IconBriefcase2 className=' text-titleFontColor'/>
            </div>
          </div>
          <div className='
            min-[1023px]:w-[49.5%] w-full
            min-[1023px]:pl-6 pl-10
            pt-1
          '>
            <span>Geekhubs</span>
            <span>2022 - Actualidad</span>
            <span>Full Stack Developer</span>
            <span>Proyectos en los que participé:</span>
            <span>Nexo: ERP para empresa de telecomunicaciones (localización y solución de bugs, creación de nuevas funcionalidades, mantenimiento de código) (frontend). Tecnologías utilizadas: Angular, Typescript</span>
          </div>
        </div>
        <div className='w-full flex flex-row items-center justify-start'>
          <div className='
            pt-2
            min-[1023px]:w-[49.5%] w-full
            min-[1023px]:pr-6 pr-0
            min-[1023px]:pl-0 pl-10
            min-[1023px]:order-1 order-2
          '>
            <span>Cyberdelia</span>
            <span>2022</span>
            <span>Full Stack Developer</span>
            <span>Proyectos en los que participé:</span>
            <span>Nex: página web dedicada a la compra de neumáticos (localización y solución de bugs, creación de nuevas funcionalidades) (fullstack). Tecnologías utilizadas: React, Laravel y Mysql.</span>
            <span>Riversa: página web dedicada a la compra de artículos para el jardín (creación de proyecto de cero) (frontend). Tecnologías utilizadas: React.</span>
            <span>CLB: widget en página web dedicada a la compra de artículos de maquillaje de lujo (creación de proyecto de cero) (frontend). Tecnologías utilizadas: React.</span>
          </div>
          <div className='
            relative h-full w-[1%]
            min-[1023px]:order-1 order-1
          '>
            <hr className='
              border-l-4 border-t-0 border-primaryColor2 h-full
            '/>
            <div className='absolute top-0 border-2 border-titleFontColor rounded-full p-1 bg-backgroundColor left-[-0.95em]'>
              <IconBriefcase2 className=' text-titleFontColor'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}