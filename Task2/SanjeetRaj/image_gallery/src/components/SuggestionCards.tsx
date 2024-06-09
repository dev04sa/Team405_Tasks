import { useContext } from "react";
import { InputContext } from "./InputContext"

interface card{
  color:number,
  text:string,
}

//colors which repeat after 10 cards
var colorList:string[]=["bg-red-400","bg-lime-400","bg-blue-400","bg-yellow-400","bg-purple-400","bg-pink-400","bg-slate-400","bg-cyan-400","bg-orange-400","bg-sky-600"]

function SuggestionCards(props:card) {
  const [input,setInput]=useContext(InputContext)
  return (
    // suggestion card
    <div 
      className ={`w-32 ${colorList[props.color%10]}  rounded-md py-1 my-2 text-center cursor-pointer bg`} 
      onClick={()=>setInput(props.text)}
      >
      {props.text}
    </div>
    
  )
}

export default SuggestionCards