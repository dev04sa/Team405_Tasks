import ImageSearch from "./sections/ImageSearch";
import Result from "./sections/Result";
import { IsReadyContext } from "./components/InputContext";
import { useState } from "react";


function App() {
  
  const [fText,setFText]=useState("")
  return (
    <main className="px-5 py-5 xl:px-10 xl:py-15} " >

      <header 
        className=" text-5xl xl:text-6xl pb-5 font-bold"
        >
          Image Search
      </header>


      <IsReadyContext.Provider value={[fText,setFText]}>
      <section >
        <ImageSearch/>
      </section>

      <section >
        <Result/>
      </section>
      </IsReadyContext.Provider>


    </main>
  )
}

export default App
