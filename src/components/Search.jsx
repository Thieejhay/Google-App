import React, { useEffect, useState } from 'react';
import { Links } from './Links';
import { useDebounce } from 'use-debounce';
import { useResultContext } from '../context/ResultContextProvider';
import { Text } from './Text';

export const Search = () => {
    const [text,setText] = useState('');
    const {setSearchTerm} = useResultContext();
    const [debouncevalue] = useDebounce(text, 600); 

    useEffect(()=>{
      if(debouncevalue) setSearchTerm(debouncevalue);
    },[debouncevalue])
  return (
    <div className='relative'>
      <div className='lg:flex px-20 contrast-100 opacity-100 py-10 lg:py-0 ml-[200px] lg:ml-0 space-y-10 lg:space-y-0'>
        <Text />
        <input value={text} type='text' className='sm:w-[600px] w-[500px] h-10 dark:bg-gray-200 border rounded-full shadow-lg outline-none p-6 text-black hover:shadow-xl lg:inline-block' placeholder=' 🔍 search iSEARCH or type a url' onChange={(e)=>setText(e.target.value)} />
          {
              text && (
                  <button type='button' className='absolute top-1.5  inline-block ml-[51rem] text-2xl text-gray-500' onClick={()=>setText('')}>
                      x
                  </button>
              )
          }
      </div>
        <Links />
    </div>
  )
}
