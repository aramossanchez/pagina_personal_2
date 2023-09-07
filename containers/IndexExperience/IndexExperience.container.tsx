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
            <div className=''>
            <span className='text-primaryColor2 font-medium text-lg'>Front End Developer</span>
            </div>
            <div className='py-2 flex flex-row items-end gap-3 text-[17px]'>
              <span className='text-titleFontColor'>Geekshubs</span>
              <span>2022 - Actualidad</span>
            </div>
            <div className='flex flex-col gap-2'>
            <span>Proyectos en los que participé:</span>
            <div className='flex flex-col relative pl-3'>
              <span><span className='text-titleFontColor'>Nexo: </span>ERP para empresa de telecomunicaciones (localización y solución de bugs, creación de nuevas funcionalidades, mantenimiento de código).</span>
              <span><span className='text-titleFontColor'>Tecnologías utilizadas:</span> Angular, Typescript</span>
              <span className=' bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em] left-[-0.2em]'></span>
            </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row items-center justify-start'>
          <div className='
            pt-1
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