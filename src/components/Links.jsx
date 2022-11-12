import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {url:'/search', text:'🔍All'},
    {url:'/news', text:'📰News'},
    {url:'/image', text:'📸Images'},
    {url:'/video', text:'📺Videos'},
]

export const Links = () => {
  return (
    <div className='flex sm:justify-center justify-between items-center mt-2 w-[950px]'>
        {
            links.map(({url, text}, index)=>(
            <NavLink key={index} to={url} className='m-8 mb-0' activeClassName='text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2'>
            {text}
            </NavLink>
            ))
        } 
    </div>
  )
}
