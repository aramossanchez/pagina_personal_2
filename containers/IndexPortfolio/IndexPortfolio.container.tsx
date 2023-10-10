import { TitleComponent } from '@/components/Title.component';
import portfolioProjects from '../../data/portfolioProjects.data';
import { PortfolioProjectComponent } from '@/components/PortfolioProject/PortfolioProject.component';

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
        {portfolioProjects.map((project, index) => {
          return (
            <PortfolioProjectComponent
              key={index}
              projectNumber={index + 1}
              projectName={project.ProjectName}
              explanation={project.Explanation}
              image={project.Image}
              url={project.Url}
              orientation={project.Orientation}
            />
          )
        })}
      </div>
    </section>
  )
}