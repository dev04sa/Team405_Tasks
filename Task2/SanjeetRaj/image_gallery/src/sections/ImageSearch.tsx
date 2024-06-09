
import SearchBar from "../components/SearchBar";
import SuggestionCard from "../components/SuggestionCards";
import {useState} from "react";
import {InputContext} from "../components/InputContext";

//modify this if you want more suggestions
var SuggestionList=["Nature","Film","Animals","People","Food","Sports","Wallpaper","Valentine","Flower","Book","New","Anime"]


function ImageSearch() {
  const [input,setInput]=useState("")
  return (
    <InputContext.Provider value={[input,setInput]}>
    <div 
      className="px-5 py-5 shadow-xl ring-1 ring-slate-900/5 rounded-lg">
        
        <section>
           <SearchBar />
        </section>

        <section 
          className="grid grid-cols-2 place-items-center xl:flex xl:flex-row xl:flex-wrap xl:text-xl xl:space-x-6 xl:justify-center my-5">
            {SuggestionList.map((item,index)=>(<SuggestionCard color={index} text={item} />))}
        </section>

    </div>
    </InputContext.Provider>
  )
}

export default ImageSearch