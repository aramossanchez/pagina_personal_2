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

export function ExperienceRightComponent({ experience }: { experience: Experience }) {

  return (
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
          <span className='text-primaryColor2 font-medium text-lg'>{experience.role}</span>
        </div>
        <div className='py-2 flex flex-row items-end gap-3 text-[17px]'>
          <span className='text-titleFontColor'>{experience.company}</span>
          <span>
            {experience.init_date === experience.finish_date ?
              experience.init_date
              :
              experience.init_date + ' - ' + experience.finish_date
            }
          </span>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Proyectos en los que he participado:</span>
          {/* LISTADO DE PROYECTOS */}
          {experience.projects.map((project) => {
            return (
              <div className='flex flex-col relative pl-3'>
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
                <span className='flex my-2 flex-col items-start'>
                  <span className='text-titleFontColor'>Tecnologías usadas</span>
                  <div className='flex flex-row items-center gap-2 my-2'>
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
                <span className=' bg-primaryColor2 w-[10px] h-[10px] rounded-full border-[1px] border-primaryColor1 absolute top-[0.5em] left-[-0.2em]'></span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}