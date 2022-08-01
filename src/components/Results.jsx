import React, { useContext, useEffect } from 'react';
import { useResultContext } from '../context/ResultContextProvider';
import { useLocation } from 'react-router-dom';
import { Loading } from './Loading';

export const Results = () => {
    const { data, loading, searchTerm, getResults } = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        if(searchTerm){
            getResults(`${location.pathname}/q=${searchTerm}&num=40`)
        }
        
    },[])

    if (loading) return <Loading />;

    switch(location.pathname){
        case '/search':
            return(
                <div className='flex flex-wrap justify-between space-y-6sm:px-56'>
                    {
                        data?.results?.map(({link, title, description}, index)=>(
                            <div key={index} className='md:w-2/5 w-full'>
                                <a href={link} target='_blank' rel='noreferrer'>
                                    <p className='text-sm hover:underline dark:text-blue-300 text-blue-700'>
                                        {link.length > 30 ? link.substring(0, 30) : link}
                                    </p>
                                    <p className='text-sm'>
                                        {description.length > 250 ? description.substring(0, 250)+'...' : description}
                                    </p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            );
        case '/image':
            return(
                <div className='flex flex-wrap justify-center items-center'>
                    {
                        data?.image_results?.map(({image,link:{href, title}},index)=>(
                            <a className='sm:p-3 p-5' href={href} key={index} target='_blank' rel='noreferrer'>
                                <img src={image?.src} alt={title} loading='lazy' />
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
                <div>
                    news
                </div>
            );
         case '/video':
            return(
                <div>
                    video
                </div>
            );
            default: return(
                <div>
                    page not found
                </div>
            );
    }

}
