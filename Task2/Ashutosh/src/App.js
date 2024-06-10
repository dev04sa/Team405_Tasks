import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import Spinner from "./components/Spinner";

  const API_URL = 'https://api.unsplash.com/search/photos'
  const API_KEY = 'HqQZ5uUyTnGPTr-Yxjj7Fjqgvy-ilrPm6hNE-Iom37g'
  const IMAGES_PER_PAGE = 20;

   function App() {

  const searchInput = useRef(null);
  const [page , setPage] = useState(1);
  const [images , setImages] = useState([]);
  const[totalpage , setTotalpage] = useState();
  const [loading , setLoading] = useState(false);


  const fetchData = async() => {

    try {
      setLoading(true);
      const output = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`)

          console.log("result" , output.data);
          setImages(output.data.results);
          setTotalpage(output.data.total_pages);
          setLoading(false);

      
    }
    

    catch (error) {
      
    }
    
  }

  useEffect (() => {
       fetchData();
  }, [page]);

  console.log("first " , setPage);

  function searchHandler(selection){
    searchInput.current.value = selection;
    fetchData();
  }

  
  return (
   <div className="overflow-hidden">

    <div className="font-bold text-gray-700 text-3xl mt-3 uppercase text-center">
      <h2>search your item here bro 🔎....</h2>
    </div>

    <div className="flex flex-row items-center  ml-[28rem] gap-2 m-[2rem]">

      <div className=" ">
        <input type="search" placeholder="What u want to search SIR 🔎..."
        ref={searchInput} className="w-[500px] p-4 rounded-lg text-xl " ></input>
      </div>

      <div>
        <button onClick={() =>fetchData()} className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">search</button>
      </div>
    </div>

    <div className="flex flex-row justify-around mt-5 buttons">

      <button onClick={() =>searchHandler('Flower')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Flower
      </button>

      <button onClick={() =>searchHandler('Dog')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Dog
      </button>

      <button onClick={() =>searchHandler('Film')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Film
      </button>

      <button onClick={() =>searchHandler('Animals')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Animals
      </button>

      <button onClick={() =>searchHandler('People')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        People
      </button>

      <button onClick={() =>searchHandler('Food')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Food
      </button>

      <button onClick={() =>searchHandler('Sports')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Sports
      </button>

      <button onClick={() =>searchHandler('Wallpapers')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Wallpapers
      </button>

      <button onClick={() =>searchHandler('Valentine')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Valentine
      </button>

      <button onClick={() =>searchHandler('Book')}
        className="bg-blue-400 font-bold text-2xl text-white rounded-md  p-3 ">
        Book
      </button>
    </div>

   {
    loading ? (<Spinner/>) : ( <div   className="grid grid-cols-4 grid-rows-5 m-auto gap-3 mt-4 image_box">
      {
      images.map(image =>{
        return(
          <img src={image.urls.small} alt ={image.alt_description} className="w-[450px] h-[450px] rounded-lg ml-2 mr-2 image"/>
        )
      })
      }
    </div>)
   }

    <div className="m-3 flex flex-row items-center justify-center space-x-[22rem]">
        {
         page > 1 && <button onClick={() => setPage(page - 1)} className="bg-blue-400 font-bold text-2xl text-white rounded-md
         p-3 ">Previous</button>

        }

        {
          page < totalpage && <button  onClick={() => setPage(page + 1)} className="bg-blue-400 font-bold text-2xl text-white rounded-md
           p-3 ">Next</button>
        }

    </div>

   </div>
  );
}

export default App;
