
import ImageCard from "../components/ImageCard"
import { IsReadyContext } from "../components/InputContext"

import { useContext, useEffect, useState } from "react"
import PageNav from "../components/PageNav";



function Result() {
  const client_api=import.meta.env.VITE_CLIENT_KEY;
  const[pageNum,setPageNum]=useState<number>(0)
  const [fText,setFText]=useContext(IsReadyContext)
  const[photos,setPhotos]=useState<{total_pages:number,results:{urls:{raw:string}}[]}|null>(null)

  //function to change the pageNum ,that can be passed as prop
  function changePage(page:number){
    setPageNum(page)
  }
  //if new text is searched make the page number 1
  useEffect(()=>{
    if(fText!==""){
      setPageNum(1)
    }
    
  },[fText])
  useEffect(()=>{
    if(pageNum==0){
      return
    }else{
      (async()=>{
        try{console.log("fetching",fText,"Page",pageNum)
          const response=await fetch(`https://api.unsplash.com/search/photos?query=${fText}&page=${pageNum}&per_page=30&client_id=${client_api}`)
          var pictures=await response.json()
          setPhotos(pictures);
          console.log("Retrieved images successfully")
        }catch(err){
          console.log("An error occured")
        }
        
  
      })();
    }
    
  },[pageNum])
  
  return (
    <section>
    <div className="my-10 p-5 min-h-96 rounded-md shadow-xl ring-1 ring-slate-900/5 grid grid-cols-2 xl:grid-cols-3">
        {photos!=null && [...photos.results].map((item)=>(
          
            <ImageCard url={item.urls.raw}/>
            
        ))}
    </div>

    {//rendering the page navigation
      photos!=null && <PageNav pageNum={pageNum} setPageNum={changePage} last={photos.total_pages}/>
    }
    </section>
  )
}

export default Result