import Image from 'next/image'
import router from 'next/router'
import {accent} from '../../services/siteData'
 
const ProjectList = (props) => {
  console.log('test props', props)
  console.log('test props', props?.projects[props.projects.length - 1])
  return (
    <div className={`flex items-center content-center mx-auto relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8`}>
      <div className="relative max-w-7xl mx-auto">
      <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">Recent Projects</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {!!props?.projects?.length && props?.projects?.map((project,i) => (
            <div key={i} className="hover:border-white border-transparent border-2 flex flex-col rounded-lg shadow-lg overflow-hidden ">
              <div 
                className=".white-outline flex-shrink-0 "
                onClick={()=>router.push(project.link)}
              >
                <style>{`.white-outline:hover{ border: 2px solid #fff`}</style>
                <Image
                  {...project.imageUrl}
                  className="h-48 w-full object-cover" 
                  placeholder="blur"
                  alt="portfilio image" 
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={project.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 hover:underline">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </a>
                </div>
                  <p className="accent-color pt-2 text-sm font-medium italic">
                    <style>{`.accent-color {color:${accent}}`}</style>
                    {!!project?.tags?.length && project?.tags.map((tag,i) => {
                      return ` ${tag}${(i === project?.tags?.length - 1) ? '' : ','}`
                    })}
                  </p>
              <div>
                  {project?.links?.map((link, i) => {
                    return <div>
                      <a href={link.link} key={i} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900 hover:underline">{link.title}</p>
                      </a>
                    </div>
                  })}

              </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList 