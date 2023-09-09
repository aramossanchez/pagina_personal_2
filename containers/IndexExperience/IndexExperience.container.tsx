import Image from 'next/image';
import { basePath } from '../../config/config';
import { IconBriefcase2 } from '@tabler/icons-react';
import { TooltipComponent } from '@/components/Tooltip/Tooltip.component';
import { TitleComponent } from '@/components/TitleComponent';

export function IndexExperienceContainer() {

  return (
    <section className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full
    '>
      <div className='w-full flex-row mb-16 justify-center flex'>
        <TitleComponent text='Experience' />
      </div>
      {/* CONTENEDOR DE EXPERIENCIAS */}
      <div className='
        flex flex-col
        min-[1280px]:w-[1000px] w-[90vw]
      '>
        <div className='w-full flex flex-row items-center justify-end'>
          <div className='
            min-[1023px]:w-[50.2%] w-full pl-6
            min-[1023px]:pb-0 pb-10
            pt-1 border-l-4 border-primaryColor2 relative
          '>
            <div className='absolute top-0 border-2 border-titleFontColor rounded-full p-1 bg-backgroundColor left-[-1.25em]'>
              <IconBriefcase2 className=' text-titleFontColor' />
            </div>
            <div className=''>
              <span className='text-primaryColor2 font-medium text-lg'>Front End Developer</span>
            </div>
            <div className='py-2 flex flex-row items-end gap-3 text-[17px]'>
              <span className='text-titleFontColor'>Geekshubs</span>
              <span>2022 - Actualidad</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span>Proyectos en los que participé:</span>
              {/* LISTADO DE PROYECTOS */}
              <div className='flex flex-col relative pl-3'>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>Geekup</span>
                  <span>Aplicación web para la validación de lenguajes de programación a través de pruebas tipo test y pruebas de código automatizadas. Zona para empresas en la que gestionar personal (creación de proyecto desde cero, elaboración de funcionalidades).</span>
                </div>
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Tecnologías utilizadas</span>
                  <div className='flex flex-row items-center gap-2 my-2'>
                    <TooltipComponent label='Next.js'>
                      <Image
                        src={`${basePath}images/nextjs_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='React'>
                      <Image
                        src={`${basePath}images/react_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='TypeScript'>
                      <Image
                        src={`${basePath}images/typescript_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='Tailwind'>
                      <Image
                        src={`${basePath}images/tailwind_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='CSS'>
                      <Image
                        src={`${basePath}images/css_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                  </div>
                </span>
                <span className=' bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em] left-[-0.2em]'></span>
              </div>
              <div className='flex flex-col relative pl-3'>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>Captend</span>
                  <span>Aplicación web basada en la creación de textos legales a partir de plantillas inteligentes. (creación de proyecto desde cero, elaboración de funcionalidades).</span>
                </div>
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Tecnologías utilizadas</span>
                  <div className='flex flex-row items-center gap-2 my-2'>
                    <TooltipComponent label='Next.js'>
                      <Image
                        src={`${basePath}images/nextjs_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='React'>
                      <Image
                        src={`${basePath}images/react_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='TypeScript'>
                      <Image
                        src={`${basePath}images/typescript_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='SASS'>
                      <Image
                        src={`${basePath}images/sass_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                  </div>
                </span>
                <span className=' bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em] left-[-0.2em]'></span>
              </div>
              <div className='flex flex-col relative pl-3'>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>Nexo</span>
                  <span>ERP para empresa de telecomunicaciones (localización y solución de bugs, creación de nuevas funcionalidades, mantenimiento de código).</span>
                </div>
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Tecnologías utilizadas</span>
                  <div className='flex flex-row items-center gap-2 my-2'>
                    <TooltipComponent label='Angular'>
                      <Image
                        src={`${basePath}images/angular_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='TypeScript'>
                      <Image
                        src={`${basePath}images/typescript_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='CSS'>
                      <Image
                        src={`${basePath}images/css_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                  </div>
                </span>
                <span className=' bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em] left-[-0.2em]'></span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row items-center justify-start'>
          <div className='
            pt-1 border-primaryColor2 relative
            min-[1023px]:border-r-4 border-r-0
            min-[1023px]:border-l-0 border-l-4
            min-[1023px]:w-[50.2%] w-full
            min-[1023px]:pr-6 pr-0
            min-[1023px]:pl-0 pl-6
            min-[1023px]:order-1 order-2
          '>
            <div className='
              absolute top-0 border-2 border-titleFontColor rounded-full p-1 bg-backgroundColor
              min-[1023px]:right-[-1.25em]
              max-[1023px]:left-[-1.25em]
              '>
              <IconBriefcase2 className=' text-titleFontColor' />
            </div>
            <div className='
              w-full flex flex-row items-center
              min-[1023px]:justify-end justify-start
            '>
              <span className='text-primaryColor2 font-medium text-lg'>Full Stack Developer</span>
            </div>
            <div className='
              py-2 flex flex-row items-end gap-3 text-[17px] w-full
              min-[1023px]:justify-end justify-start
              '>
              <span className='text-titleFontColor'>Cyberdelia</span>
              <span>2022</span>
            </div>
            <div className='
              flex flex-col gap-2
              min-[1023px]:items-end items-start
              min-[1023px]:text-right text-left
              '>
              <span>Proyectos en los que participé:</span>
              {/* LISTADO DE PROYECTOS */}
              <div className='
                flex flex-col relative 
                min-[1023px]:pr-3 pr-0
                min-[1023px]:pl-0 pl-3
                min-[1023px]:items-end items-start
              '>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>CLB</span>
                  <span>Widget en página web dedicada a la compra de artículos de maquillaje de lujo (creación de proyecto de cero, réplica de web)</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Tecnologías utilizadas</span>
                  <div className='flex flex-row items-center my-2 gap-2'>
                    <TooltipComponent label='React'>
                      <Image
                        src={`${basePath}images/react_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='JavaScript'>
                      <Image
                        src={`${basePath}images/javascript_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='SASS'>
                      <Image
                        src={`${basePath}images/sass_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                  </div>
                </span>
                <span className='
                  bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em]
                  max-[1023px]:left-[-0.2em]
                  min-[1023px]:right-[-0.2em] right-0
                '></span>
              </div>
              <div className='
                flex flex-col relative 
                min-[1023px]:pr-3 pr-0
                min-[1023px]:pl-0 pl-3
                min-[1023px]:items-end items-start
              '>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>Riversa</span>
                  <span>Página web dedicada a la compra de artículos para el jardín (creación de proyecto de cero)</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Tecnologías utilizadas</span>
                  <div className='flex flex-row items-center gap-2 my-2'>
                    <TooltipComponent label='React'>
                      <Image
                        src={`${basePath}images/react_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='JavaScript'>
                      <Image
                        src={`${basePath}images/javascript_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='SASS'>
                      <Image
                        src={`${basePath}images/sass_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                  </div>
                </span>
                <span className='
                  bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em]
                  max-[1023px]:left-[-0.2em]
                  min-[1023px]:right-[-0.2em] right-0
                '></span>
              </div>
              <div className='
                flex flex-col relative 
                min-[1023px]:pr-3 pr-0
                min-[1023px]:pl-0 pl-3
                min-[1023px]:items-end items-start
              '>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>Nex</span>
                  <span>Aplicación web dedicada a la compra de neumáticos (localización y solución de bugs, creación de nuevas funcionalidades).</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Tecnologías utilizadas</span>
                  <div className='flex flex-row items-center my-2 gap-2'>
                    <TooltipComponent label='React'>
                      <Image
                        src={`${basePath}images/react_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='JavaScript'>
                      <Image
                        src={`${basePath}images/javascript_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='SASS'>
                      <Image
                        src={`${basePath}images/sass_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='Laravel'>
                      <Image
                        src={`${basePath}images/laravel_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                    <TooltipComponent label='PHP'>
                      <Image
                        src={`${basePath}images/php_icon.svg`}
                        width={30}
                        height={30}
                        alt="Logo"
                        className='w-[30px] h-[30px]'
                      />
                    </TooltipComponent>
                  </div>
                </span>
                <span className='
                  bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em]
                  max-[1023px]:left-[-0.2em]
                  min-[1023px]:right-[-0.2em] right-0
                '></span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}