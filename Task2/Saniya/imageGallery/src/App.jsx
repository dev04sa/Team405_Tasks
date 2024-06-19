//import{form } from 'react-bootstrap'

import './my.css'
import axios from 'axios';
import { useState } from "react";


import { useEffect, useRef } from "react"
const API_URL ='https://api.unsplash.com/search/photos';
const perpage= 30;

function App() {
  
 
  const searchInput =useRef(null);
   const [images,setImages] = useState([]);
   const [page,setPage] = useState(1);
   const [totalpages, setTotalPages] = useState(0);

    useEffect(()=>{
    fetchImages();
    },[page]);

const fetchImages =async()=>{
  try {
    const {data}  =  await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${page}
      &per_page${perpage}&client_id=${import.meta.env.VITE_API_KEY}`
    );
   
    setImages(data.results);
    setTotalPages(data.total_pages);
   } catch (error) {
    console.log(error);
   }
  
}
  
  const handleSearch =(event)=>{
    event.preventDefault();
    console.log(searchInput.current.value);
    fetchImages();
  }
  const handleSelection = (selection) =>{
searchInput.current.value =selection;
  fetchImages();
  }
  return (
    <>
      <div >
      <div className='container' >
        <form onSubmit={handleSearch}>
      <h1 className="title" id='title'>Image Search</h1>
      <input type="search" className="form-control" id="search" 
       placeholder="Type something for search..." ref={searchInput}/>
       
      </form>
        </div>
        <div className="container " >
        <div className="filters" id="filters">
        <button id="nature" onClick={()=> handleSelection('nature')}>Nature</button>
        <button id="film" onClick={()=> handleSelection('film')}>Film</button>
        <button id="animals" onClick={()=> handleSelection('Animals')}>Animals</button>
        <button id="people" onClick={()=> handleSelection('people')}>People</button>
        <button id="sports" onClick={()=> handleSelection('sports')}>Sports</button>
        <button id="valentine" onClick={()=> handleSelection('valentine')}>Valentine</button>
        </div>
        </div>
        <br></br>
        <div className='images'>
    {images.map((image) =>{
      return(
        <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
            className='image'/>

            
      );
    })}
        
      </div>
      <div className='buttons'>
    {page>1&&<button id='prev' onClick={()=> setPage(page-1)}>Previous</button>}
    {page < totalpages && <button id='next' onClick={()=> setPage(page+1)}>Next</button>}
      </div>
  </div>

    </>

  )
}

export default App
