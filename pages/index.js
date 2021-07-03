import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ProjectList from './components/projectList'
import *  as siteData from './siteData'

export default function Home() {
  const router = useRouter()
  return (
    <>
    <div className=" ">
      <div className="flex  w-screen fixed  h-screen items-center content-center  mx-auto sm:px-6 lg:px-8 bg-blue-100">
      <div className="flex flex-col max-w-4xl mx-auto items-center bg-red-100 ">
        <div className="flex flex-row  items-center bg-red-200">
          <div className="mr-4 flex-shrink-0 self-center">
            <Image className="rounded-full" src={siteData.selfie} alt="Picture of the author" />
          </div>
          <div>
            <h4 className="text-4xl font-bold">{siteData.firstName} {siteData.lastName}</h4>
            <h4 className="text-2xl font-thin">{siteData.title}</h4>
          </div>
        </div>
        <div className="bg-blue-500 mt-6 text-2xl">
          <p>{siteData.bio}</p>
        </div>
        <div className=" mt-6 text-xl">
          <p className="flex flex-row">{siteData.links.map(link => { 
            return siteData.userIcons 
            ? <link.icon alt={link.link} onClick={()=> router.push(link.link)}
              className="mx-2 fill-current text-gray-500 hover:text-black" href={link.link}>{link.name}</link.icon>
            : <a className="mx-2" href={link.link}>{link.name}</a>
          })}
          </p>
        </div>
      </div>
    </div>
   </div>
   <div className="flex mt-10 absolute w-full h-screen items-center content-center  mx-auto sm:px-6 lg:px-8 bg-blue-300 slider-up">
     <ProjectList projects={siteData.portfolioItems}/> 
     <style jsx>{`.slider-up {margin: 100vh auto 0;}`}</style>
   </div>
   </>

  )
}

   

