import React, { ReactNode } from 'react'
import TitleUnderLined from '../components/TitleUnderLined'
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../features/projects/components/Project';
import FilledButton from '../components/Button/FilledButton';
import StrokedButton from '../components/Button/StrokedButton';
interface ProjectProps
{
    name:string,
    type : string,
    technologiesUsed:Array<string>,
    description:string,
    images:Array<string>,
    taskCompleted:Array<string>,
    urlbtns:ReactNode,
}
function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

const projects:ProjectProps[]=[{
  name:"Maruni Suppliers",
  type:'Ecommerce Platform',
  technologiesUsed:['react','laravel','mysql'],
  images:['react-laravel.png'],
  description:"asdfadsfa",
  taskCompleted:[],
  urlbtns:<></>
  

},
{
  name:"Maruni Suppliers",
  type:'Ecommerce Platform',
  technologiesUsed:['react','laravel','mysql'],
  images:['react-laravel.png'],
  description:`This is the ecommerce website `,
  taskCompleted:['frontend development with react','backend with laravel'],
  urlbtns:<div className='flex gap-5'><FilledButton title='View Code' onClick={()=>{}}></FilledButton>
  <StrokedButton title='Visit Site' onClick={()=>{}}/></div>
  

}]


  return (
    <div id='projects' className='flex  flex-col justify-center items-center gap-10 py-10'>
<div ref={ref} className={`opacity-0 transition-opacity duration-1000  ${inView ? ' animate-slide-in-down opacity-100' : ''
            }`}>      <TitleUnderLined title='Projects'/></div>
    <div className='flex flex-col xl:flex-row xl:flex-wrap xl:justify-center gap-20 '>

  
      {projects.map((project:ProjectProps)=>{
        return <ProjectCard images={project.images} type={project.type} description={project.description} technologiesUsed={project.technologiesUsed} name={project.name} urlbtns={project.urlbtns} taskCompleted={project.taskCompleted}/>
          // return <Project name={project.name} type={project.type} technologiesUsed={project.technologiesUsed} images={project.images} description={project.description} urlbtns={project.urlbtns} />
        }
      )}
      </div>

      </div>
  )
}

export default Projects