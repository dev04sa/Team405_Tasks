import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

function App() {



  const [inputVal,setInputVal]=useState('');
  const [imagesData,setImagesData]=useState('');
  
  const [loading,setLoading]=useState(false);
 

  const [page,setPage]=useState(1);

    
    const API_URL = 'https://api.unsplash.com/search/photos';

    const fetchData=async()=>{
      setLoading(true);
      const { data } = await axios.get(
        `${API_URL}?query=${
          inputVal
        }&page=${page}&per_page=25&client_id=fPiATqWi2v1cXmF0id9UNmG0k7mMAKFW11xTdGYJI5k`
       
      );
      
      setImagesData(data.results);
     
      setLoading(false);
      
      
    
      
    }

    const changePage=(change)=>{
        if(change=='next'){
          setPage((prev)=>{
            const next=Number(prev)+1;
            return next;
          });
        }else{
          setPage((prev)=>{
            const next=Number(prev)-1;
            return next;
          });
        }
       
      
    }

    const handleChange=async(change)=>{

       setImagesData('');
        setLoading(true);
       await changePage(change);
       console.log(page);

        await fetchData();
       
       
        
        setLoading(false);


        
      }
     
    

   



  const setText=(t)=>{
    setInputVal(t);
  }


  const handleForm=(e)=>{
       e.preventDefault();
       fetchData();
  }

 
  
  return (
    <>
      <h1 className="text-[30px] font-bold mx-4 my-2">Image Search</h1>
     <form  onSubmit={(e)=>handleForm(e)}>
     <input
        type="text"
        placeholder="Type Something to search..."
        className=" m-4 w-[95vw] rounded-md w-[95vw]  px-3 py-2 border-solid border-2 border-gray-400  focus:border-solid focus:border-2 focus:border-blue-300 "
        onChange={(e)=>setInputVal(e.target.value)}
        value={inputVal}
      />
     </form>
     
      <div className="flex flex-wrap flex-row w-[95vw] ml-3">
        <button className="py-2 px-3 rounded-md bg-red-400  ml-8 mt-2" onClick={()=>setText('Nature')}>Nature</button>
        <button className="py-2 px-3 rounded-md bg-green-400 ml-8 mt-2" onClick={()=>setText('Film')}>
          Film
        </button>
        <button className="py-2 px-3 rounded-md bg-blue-400 ml-8 mt-2" onClick={()=>setText('Animals')}>
          Animals
        </button>
        <button className="py-2 px-3 rounded-md bg-yellow-400 ml-8 mt-2" onClick={()=>setText('People')}>
          People
        </button>
        <button className="py-2 px-3 rounded-md bg-blue-400 ml-8 mt-2" onClick={()=>setText('Food')}>
          Food
        </button>
        <button className="py-2 px-3 rounded-md bg-violet-400 ml-8 mt-2" onClick={()=>setText('Sports')}>
          Sports
        </button>
        <button className="py-2 px-3 rounded-md bg-pink-400 ml-8 mt-2"onClick={()=>setText('Wallpapers')}>
          Wallpapers
        </button>
        <button className="py-2 px-3 rounded-md bg-gray-400 ml-8 mt-2" onClick={()=>setText('vallentine')}>
          Vallentine
        </button>
        <button className="py-2 px-3 rounded-md bg-orange-400 ml-8 mt-2"onClick={()=>setText('flower')}>
          flower
        </button>
        <button className="py-2 px-3 rounded-md bg-indigo-400 ml-8 mt-2"onClick={()=>setText('book')}>
          Book
        </button>
        <button className="py-2 px-3 rounded-md bg-orange-400 ml-8 mt-2" onClick={()=>setText('human')}>
          Human
        </button>
        

      </div>

      <div className="mt-7 w-full  flex flex-wrap h-full justify-center ">
       
          {
       

               
       
       imagesData && imagesData.map((image)=>(<img src={image.urls.small} className="image  m-2  rounded-md  duration-300  hover:scale-105 " alt="hlhedld"  key={image.id} />))
          }
      </div>
         




      {
        loading && <div className="flex justify-center m-5">

        <h1 className="text-3xl font-bold">Loading..........</h1>


      </div>
      

      } 
      
      {
          imagesData ?
          <div className="flex justify-evenly m-5">
        {page!=1 &&  <button className="bg-green-400 rounded-md px-4 py-2 font-semibold hover:border-solid hover:border-green-800 hover:border-1 text-xl" onClick={()=>handleChange('prev')}>Prev</button>}
           {imagesData&&<button className="bg-green-400 rounded-md px-4 py-2 font-semibold hover:border-solid hover:border-green-800 hover:border-1 text-xl" onClick={()=>handleChange('next')}>Next</button>}
         </div>
         : null

      
      }
      
      
    </>
  );
}

export default App;
