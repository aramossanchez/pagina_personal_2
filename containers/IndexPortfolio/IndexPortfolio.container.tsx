import Image from 'next/image';
import { basePath } from '../../config/config';
import { IconArrowNarrowRight, IconBriefcase2 } from '@tabler/icons-react';
import { TooltipComponent } from '@/components/Tooltip/Tooltip.component';
import { TitleComponent } from '@/components/TitleComponent';
import Link from 'next/link';
import style from './IndexPortfolio.module.css';

export function IndexPortfolioContainer() {

  return (
    <section className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full mt-[30vh] pb-10
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Portfolio' />
      </div>
      {/* CONTENEDOR DE PROYECTOS */}
      <div className='flex flex-col gap-32'>
        <div className='
          flex flex-col
          min-[1280px]:w-[1000px] w-[90vw]
        '>
          <div className='
          flex gap-9
          min-[1023px]:flex-row flex-col
        '>
            <div className='
          flex flex-col gap-3
          min-[1023px]:w-6/12 w-full
          '>
              <span className=' text-primaryColor2 text-2xl'>Project 1</span>
              <span className=' text-titleFontColor text-2xl'>Sudoku solver</span>
              <p>Algoritmo diseñado para solucionar un sudoku. Tienes acceso a una cuadrícula típica de sudoku, donde rellenar los cuadrados que quieras con los números que quieras. Pulsando el botón de validar, la aplicación resolverá el sudoku (siempre y cuando los números introducidos no hagan que el sudoku sea incorrecto e imposible de resolver)</p>
              <Link href={'/'} className='flex flex-row gap-3 hover:text-primaryColor2 ease-in-out duration-300'>
                <IconArrowNarrowRight />
                <span>Read more</span>
              </Link>
            </div>
            <div className='
          flex flex-col gap-3
          min-[1023px]:w-6/12 w-full
          '>
              <div className='
            w-full flex flex-row
            min-[1023px]:pl-0
          '>
                <div className='
              relative
              w-full
            '>
                  <Image
                    src={`${basePath}images/profile.jpg`}
                    alt='Profile Image'
                    width={600}
                    height={310}
                    objectFit='fill'
                    className='
                      grayscale-0 z-30 relative rounded-lg hover:grayscale ease-in-out duration-300 cursor-pointer
                      min-[1023px]:w-full w-11/12
                      min-[1023px]:h-[300px] h-[50vw]
                    '/>
                  <div className='
                    flex flex-row items-center justify-center rounded-lg z-10 absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2
                    min-[1023px]:w-full w-11/12
                    min-[1023px]:h-[300px] h-[50vw]
                    min-[428px]:top-9 top-7
                    min-[428px]:left-9 left-7
                  '>
                    <div
                      className={`${style.width_height_photo_border} rounded-lg z-20 bg-backgroundColor`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='
        flex flex-col
        min-[1280px]:w-[1000px] w-[90vw]
      '>
          <div className='
          flex gap-9
          min-[1023px]:flex-row flex-col
        '>
            <div className='
              flex flex-col gap-3
              min-[1023px]:w-6/12 w-full
              min-[1023px]:order-2 order-1
              min-[1023px]:pl-10 pl-0
            '>
              <span className=' text-primaryColor2 text-2xl'>Project 2</span>
              <span className=' text-titleFontColor text-2xl'>Gamified PokeApi </span>
              <p>Aplicación que obtiene datos de la api de Pokemon. Tiene 2 secciones diferenciadas. En la primera sección puedes ver el listado de los primeros 151 Pokemon, y acceder a sus datos a través de la famosa Pokedex. En la segunda sección puedes seleccionar un equipo de 6 Pokemon y jugar contra "el líder del gimnasio", que tendrá su propio de 6 Pokemon.</p>
              <Link href={'/'} className='flex flex-row gap-3 hover:text-primaryColor2 ease-in-out duration-300 '>
                <IconArrowNarrowRight />
                <span>Read more</span>
              </Link>
            </div>
            <div className='
              flex flex-col gap-3
              min-[1023px]:w-6/12 w-full
              min-[1023px]:order-1 order-2
            '>
              <div className='
            w-full flex flex-row
            min-[1023px]:pl-0
          '>
                <div className='
              relative
              w-full
            '>
                  <Image
                    src={`${basePath}images/profile.jpg`}
                    alt='Profile Image'
                    width={600}
                    height={310}
                    objectFit='fill'
                    className='
                      grayscale-0 z-30 relative rounded-lg hover:grayscale ease-in-out duration-300 cursor-pointer
                      min-[1023px]:w-full w-11/12
                      min-[1023px]:h-[300px] h-[50vw]
                    '/>
                  <div className='
              flex flex-row items-center justify-center rounded-lg z-10 absolute bg-gradient-to-r from-primaryColor1 to-primaryColor2
              min-[1023px]:w-full w-11/12
              min-[1023px]:h-[300px] h-[50vw]
              min-[428px]:top-9 top-7
              min-[428px]:left-9 left-7
              '>
                    <div
                      className={`${style.width_height_photo_border} rounded-lg z-20 bg-backgroundColor`}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}