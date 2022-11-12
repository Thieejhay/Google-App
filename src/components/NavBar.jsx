import React from 'react';
// import { Link } from 'react-router-dom';

export const NavBar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className="lg:p-5 lg:pb-0 flex lg:flex-wrap sm:justify-between lg:justify-center lg:items-center p-10 ml-[600px] lg:ml-0">
      <div className="flex lg:justify-end lg:items-center space-x-10 lg:space-x-5 lg:w-screen">
      {/* <Link to="/">
        <p className="text-2xl bg-blue-500 text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900 ">
          Google 🔎
        </p>
      </Link> */}
      <p className='text-5xl lg:text-xl'>Gmail</p>
      <button type='button' onClick={()=>setDarkTheme(!darkTheme)} 
      className="text-5xl lg:text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full first-letter px-2 py-1 hover:shadow-lg">
        {darkTheme ? '💡' : '🌙'}
      </button>
      </div>
    </div>
  )
}