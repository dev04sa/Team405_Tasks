import React from 'react'

const SearchBar = ({setQuery}) => {
  return (
    <div className='flex h-[80px] w-full py-4 px-2 justify-center items-center gap-min'>
        <input type="text" placeholder='Search images' className='w-3/4 p-4 rounded-xl h-full  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => {setQuery(e.target.value)}}></input>
       
    </div>
  )
}

export default SearchBar