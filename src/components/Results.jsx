import React, { useEffect } from 'react'
import {useResultContext} from '../context/ResultContextProvider';
import { useLocation } from 'react-router-dom';
import { Loading } from './Loading';
import ReactPlayer from 'react-player';

export const Results = () => {
    const { data, loading, searchTerm, getResults} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
    
      if(searchTerm){
  
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
      
    },[searchTerm,location.pathname])

    if (loading) return <Loading />;

    switch(location.pathname){
      case '/search':
        return(
          <div className='flex flex-col justify-between space-y-10 sm:px-40 border-t-2 border-grey-300'>
            {
              
              data?.map(({link, title, description},index)=>(
                  <div key={index} className='md:w-[700px] w-full mt-5'>
                      <a href={link} target='_blank' rel='noreferrer'>
                      <p className='text-base dark:text-blue-300'>
                          {link.length > 30 ? link.substring(0,30) : link}
                        </p>
                        <h3 className='text-[#1A0DAB] hover:underline contrast-150 font-semibold text-[20px]'>{title}</h3>
                      </a>
                      <p className='text-base'>
                          {description.length > 250 ? description.substring(0,250)+'...' : description}
                      </p>
                  </div>
              ))
            }
          </div>
        );
    case '/image':
      return(
        <div className='flex flex-wrap justify-center items-center'>
          {
            data?.map(({image,link:{href,title}},index)=>(
              <a className='sm:p-3 p-5' href={href} key={index} target='_blank' rel='noreferrer'>
                  <img src={image?.src} alt={title} loading='lazy'/>
                  <p className='w-36 break-words text-sm mt-2'>
                    {title}
                  </p>
              </a>
            ))
          }
        </div>
      );
    case '/news':
      return(
        <div className='flex flex-col justify-between space-y-10 sm:px-40 border-t-2 border-grey-300'>
          {
            data?.map(({links,id,source,title})=>(
              <div key={id} className='md:w-[600px] w-full mt-5'>
                  <a href={links?.[0].href} target='_blank' rel='noreferrer' className='hover:underline'>
                    <p className='text-lg dark:text-blue-300 text-blue-700'>
                      {title}
                    </p>
                    <div className='flex gap-4'>
                      <a href={source?.title} target='_blank' rel='noreferrer'>
                          {source?.title}
                      </a>
                    </div>
                  </a>
              </div>
            ))
          }
        </div>
      );
      case '/video':
        return(
          <div className='flex flex-wrap'>
            {
              data?.map((video,index)=>(
                <div className='p-2' key={index}>
                  <ReactPlayer url={video.link} width='355px' height='200px' />
                </div>
              ))
            }
          </div>
        );
        default: return (
          <div>
            Page not found
          </div>
        )
    }
}