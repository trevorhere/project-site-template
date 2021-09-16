import React, { useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import *  as siteData from '../../services/siteData'
import {FaPencilAlt} from 'react-icons/fa'
import {Converter} from 'showdown';

// const AsyncMarkDown = dynamic(import('react-markdown'), { ssr: false });
// const AsyncGfm = dynamic(import('remark-gfm'), { ssr: false });

export async function getStaticPaths() {
  return  siteData.paths;
}

export async function getStaticProps({params}) {
  const {id} = params;
  console.log('posts', siteData.posts)
  console.log('id', id);

  console.log(siteData.posts.map(post => console.log('test', post)))
  const post = siteData.posts.find(post => post.id === id);

  if(!post){
    console.log('no post found');
    return {
      props: {
        post: null
      }
    }
  }





  const converter = new Converter({ metadata: true });
  let content = converter.makeHtml(post?.content);
  const meta = converter.getMetadata();
  // MDX text - can be from a local file, database, anywhere
  // const mdxSource = await serialize(source)
  return { props: { posts: siteData?.posts, new_post: post, id, content, meta } }
}

export default function Post({posts, id, new_post, content}) {
  const router = useRouter()
  const [post, setPost] = useState(posts.find(post => post.id === id) || null);
  const [loading, setIsLoading]= useState(false);

  return (
    <>
      <button 
        type="button" 
        className="absolute top-10 right-10 items-center px-1 py-1 border-2 border-black text-xs font-medium rounded  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
        onClick={() => router.push('/')}
      >
        Back 
      </button>
      <div className="lg:w-1/2 md:w-3/4 sm:w-full mx-auto flex-initial">
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg mx-auto flex flex-row justify-between">
            <div>
              <h1>
                <span className="mt-2 block text-3xl  leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  {post?.title} 
                </span>
              </h1>
              <p>
                {post?.tags.map((tag,i) => {
                  return <span key={i}>{`${tag.trim()}${i !== post?.tags.length - 1 ? ', ' : ''}`}</span>
                })}
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <a href={post?.author.href}>
                <span className="sr-only">{post?.author.name}</span>
                <img className="h-10 w-10 rounded-full" src={post?.author.imageUrl} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <a href={post?.author.href} className="hover:underline">
                  {post?.author.name}
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime={post?.datetime}>{post?.date}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{post?.readingTime} read</span>
              </div>
            </div>
          </div>

            <div className="flex my-8 ">
              <img
                className=" mx-auto rounded-lg " 
                src={post?.imageUrl}
                alt=""
                layout="cover"
              />
            </div> 
            <p className="whitespace-pre-line">{`${post?.content}`}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
              {/* <AsyncMarkDown  className="markdown" remarkPlugins={[AsyncGfm]} children={post?.content} /> */}
        </div>
      </div>

      </div>
    </>
  )
}