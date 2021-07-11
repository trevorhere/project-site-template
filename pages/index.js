import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ProjectList from './components/projectList'
import *  as siteData from '../services/siteData'
import { FaPenNib } from "react-icons/fa";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className="width-screen h-1 " >
        <div className="z-20 fixed top-8 right-10 ">
            <button
              type="button"
              className={`accent-bg accent-bg-hover inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white `}
              onClick={() => router.push(siteData.callToActionLink)}
            > 
            <style>{`.accent-bg{ background-color:${siteData.accent};} .accent-bg-hover:hover{ opacity: .7;}`}</style>
              <FaPenNib className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {siteData.callToActionTitle} 
            </button>
        </div>
      </div>
      <div className="z-0 flex  w-screen fixed  h-screen items-center content-center  mx-auto sm:px-6 lg:px-8 ">
      <div className="flex flex-col max-w-4xl mx-auto items-center">
        <div className="flex flex-row  items-center">
          <div className="mr-4 flex-shrink-0 self-center">
            <Image className="rounded-full" src={siteData.selfie} placeholder="blur" alt="Picture of the author" />
          </div>
          <div>
            <h4 className="text-4xl font-bold">{siteData.firstName} {siteData.lastName}</h4>
            <h4 className="text-2xl font-thin">{siteData.title}</h4>
          </div>
        </div>
        <div className="mt-6 text-2xl">
          <p>{siteData.bio}</p>
        </div>
        <div className=" mt-6 text-xl">
          <p className="flex flex-row">{siteData.links.map(link => { 
            return siteData.userIcons 
            ? <link.icon key={link.link} alt={link.link} onClick={()=> router.push(link.link)}
              className="mx-2 fill-current text-gray-500 hover:text-black" href={link.link}>{link.name}</link.icon>
            : <a className="mx-2" key={link.link} href={link.link}>{link.name}</a>
          })}
          </p>
        </div>
      </div>
    </div>
   <div className="accent-bg z-30 flex mt-10 absolute slider-up w-full min-h-screen items-center content-center  mx-auto sm:px-6 lg:px-8  lg:.slider_up_small ">
     <ProjectList accentColor={siteData.accent} projects={siteData.portfolioItems}/> 
     <style jsx>{`.accent-bg{background-color: ${siteData.accent}} .slider-up {margin: 100vh auto 0;} .a .slider_up_small{margin: 200vh auto 0;}`}</style>
   </div>
   </>

  )
}

   

