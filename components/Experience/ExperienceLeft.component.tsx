import { IconBriefcase2 } from "@tabler/icons-react"
import Link from "next/link"
import { TooltipComponent } from "../Tooltip/Tooltip.component"
import Image from "next/image"
import { basePath } from '../../config/config';

interface Technology {
  name: string;
  icon: string;
}

interface Projects {
  name: string,
  url: string | null,
  explanation: string,
  technologies: Technology[]
}

interface Experience {
  orientation: string,
  role: string,
  company: string,
  init_date: string,
  finish_date: string,
  projects: Projects[]
}

export function ExperienceLeftComponent({ experience }: { experience: Experience }) {

  return (
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
          <span className='text-primaryColor2 font-medium text-lg'>{experience.role}</span>
        </div>
        <div className='
          py-2 flex flex-row items-end gap-3 text-[17px] w-full
          min-[1023px]:justify-end justify-start
        '>
          <span className='text-titleFontColor'>{experience.company}</span>
          <span>
            {experience.init_date === experience.finish_date ?
              experience.init_date
              :
              experience.init_date + ' - ' + experience.finish_date
            }
          </span>
        </div>
        <div className='
          flex flex-col gap-2
          min-[1023px]:items-end items-start
          min-[1023px]:text-right text-left
        '>
          <span>Projects I participated in:</span>
          {/* LISTADO DE PROYECTOS */}
          {experience.projects.map((project) => {
            return (
              <div className='
                flex flex-col relative 
                min-[1023px]:pr-3 pr-0
                min-[1023px]:pl-0 pl-3
                min-[1023px]:items-end items-start
              '>
                <div className='flex flex-col'>
                  {project.url ?
                    <Link href={project.url} target='_blank'>
                      <span className='text-titleFontColor underline'>{project.name}</span>
                    </Link>
                    :
                    <span className='text-titleFontColor'>{project.name}</span>
                  }
                  <span>{project.explanation}</span>
                </div>
                <span className='
                  flex mt-2 mb-2 flex-col
                  min-[768px]:items-end items-start
                '>
                  <span className='text-titleFontColor'>Technologies used</span>
                  <div className='flex flex-row items-center my-2 gap-2'>
                    {project.technologies.map((technology) => {
                      return (
                        <TooltipComponent label={technology.name}>
                          <Image
                            src={`${basePath}images/${technology.icon}.svg`}
                            width={30}
                            height={30}
                            alt="Logo"
                            className='w-[30px] h-[30px]'
                          />
                        </TooltipComponent>
                      )
                    })}
                  </div>
                </span>
                <span className='
                  bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em]
                  max-[1023px]:left-[-0.2em]
                  min-[1023px]:right-[-0.2em] right-0
                '></span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}