import Image from 'next/image';
import { basePath } from '../../config/config';
import { IconBriefcase2 } from '@tabler/icons-react';
import { TooltipComponent } from '@/components/Tooltip/Tooltip.component';
import { TitleComponent } from '@/components/Title.component';
import Link from 'next/link';

export function IndexExperienceContainer() {

  return (
    <section id="Experience" className='
      z-10 w-[100vw] relative overflow-x-hidden flex flex-col justify-center items-center h-full pt-16
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
              <span>2022 - Present time</span>
            </div>
            <div className='flex flex-col gap-2'>
              <span>Projects I participated in:</span>
              {/* LISTADO DE PROYECTOS */}
              <div className='flex flex-col relative pl-3'>
                <div className='flex flex-col'>
                  <Link href={'https://app.geekup.es/register'} target='_blank'>
                    <span className='text-titleFontColor underline'>Geekup</span>
                  </Link>
                  <span>Web application for validating programming languages through multiple-choice tests and automated code tests. Area for companies to manage staff (creation of project from scratch, development of features).</span>
                </div>
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Technologies used</span>
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
                  <Link href={'https://captend.com/login'} target='_blank'>
                    <span className='text-titleFontColor underline'>Captend</span>
                  </Link>
                  <span>Web application based on the creation of legal texts from smart templates. (creation of project from scratch, development of features).</span>
                </div>
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Technologies used</span>
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
                  <span>ERP for telecommunications company (bug localization and resolution, creation of new features, code maintenance).</span>
                </div>
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Technologies used</span>
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
              <span>Projects I participated in:</span>
              {/* LISTADO DE PROYECTOS */}
              <div className='
                flex flex-col relative 
                min-[1023px]:pr-3 pr-0
                min-[1023px]:pl-0 pl-3
                min-[1023px]:items-end items-start
              '>
                <div className='flex flex-col'>
                  <span className='text-titleFontColor'>CLB</span>
                  <span>Widget on a website dedicated to purchasing luxury makeup items (project creation from scratch, website replication) (not finished).</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Technologies used</span>
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
                  <span>Website dedicated to purchasing garden items (project creation from scratch) (not finished).</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Technologies used</span>
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
                  <Link href={'https://www.nex.es'} target='_blank'>
                    <span className='text-titleFontColor underline'>Nex</span>
                  </Link>
                  <span>Web application dedicated to purchasing tires (bug localization and resolution, creation of new features).</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Technologies used</span>
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