import React from 'react';

const Navbar = ({setQuery}) => {

  return (
    <div className='w-full h-auto flex flex-wrap gap-2 justify-center py-4 lg:flex-row lg:items-center '>
      <Button setQuery={setQuery} title={"Nature"} color={"bg-red-700"}/>
      <Button setQuery={setQuery} title={"Flower"} color={"bg-yellow-700"}/>
      <Button setQuery={setQuery} title={"Book"} color={"bg-indigo-700"}/>
      <Button setQuery={setQuery} title={"Film"} color={"bg-orange-700"}/>
      <Button setQuery={setQuery} title={"Animals"} color={"bg-pink-700"}/>
      <Button setQuery={setQuery} title={"People"} color={"bg-green-700"}/>
      <Button setQuery={setQuery} title={"Wallpaper"} color={"bg-blue-700"} />
      <Button setQuery={setQuery} title={"Sports"} color={"bg-purple-700"}/>
      <Button setQuery={setQuery} title={"Painting"} color={"bg-yellow-700"}/>
      <Button setQuery={setQuery} title={"Monument"} color={"bg-violet-700"}/>
    </div>
  )
}

const Button = ({title, color, setQuery}) => {
    return (
        <button onClick={()=>{setQuery(title)}} className={`px-4 py-2 ${color}  text-white rounded-lg w-[45%] lg:w-auto cursor-pointer hover:scale-[1.01] transition-transform duration-300 `} >{title}</button>
    )
}

export default Navbar;
