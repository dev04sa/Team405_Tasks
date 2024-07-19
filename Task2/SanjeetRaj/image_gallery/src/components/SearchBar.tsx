import { useContext} from "react";
import {InputContext, IsReadyContext} from "../components/InputContext";
// import searchImage from "./SearchImage.mts";


function SearchBar() {
  const[input,setInput]=useContext(InputContext)
  const[ftext,setFText]=useContext(IsReadyContext)

  function changeHandler(e:React.ChangeEvent<HTMLInputElement>){
    //handle the changes when user types in the input box
    setInput(e.target.value)
  }
  
  
  return (
    <div className="flex justify-center space-x-4 text-xl xl:text-2xl" >
      {/* Input box */}
        <input 
          type="text" 
          id="inputf"  
          className="w-3/4 border-2 border-slate-400 rounded-md px-5 " 
          placeholder="Search.." 
          value={input}
          onChange={changeHandler}
        />
        {/* Search button */}
        <button  
        className='bg-slate-600 hover:bg-slate-800 text-white rounded-md px-2 py-1 xl:p-4' 
        onClick={()=>{
            if(input!=""){
              
              setFText(input)
              console.log(ftext)
              
            }else{
              alert("Input Field is Empty")
              console.log("Empty String");
              
            }
            
        }}>Search</button>
    </div>
  )
}

export default SearchBar