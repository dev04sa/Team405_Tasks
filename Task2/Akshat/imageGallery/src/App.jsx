import { useEffect, useRef, useState } from 'react'
import './index.css'
import axios, {isCancel, AxiosError} from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
const IMAGES_PER_PAGE = 30;
// const API_KEY = 'j6s69QIDBlmnr56riJN84ucjl1GNDOfv4GHurd8bJk0';

function App() {
  const searchInput = useRef(null);
  // console.log('key',import.meta.env.VITE_API_KEY);

  const [images,setImages] = useState('')
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(0);

  const fetchImages =async () => {
    try {
      const {data} = await axios.get(
        `${API_URL}?query=${
          searchInput.current.value
        }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`
      );
      // console.log('result', result.data)
      setImages(data.results);
      setTotalPages(data.total_pages);
     } catch (error) {
      console.log(error);
     }
  }

  useEffect(() => {
    fetchImages()
  },[page])

  const searchHandling = (event) => {
    event.preventDefault();
    // console.log(searchInput.current.value);
    setPage(1);
    fetchImages();
  }

  const buttonHandling = (selection) => {
    searchInput.current.value = selection;
    // console.log(searchInput.current.value);
    setPage(1);
    fetchImages();
  }
  

  return (
    <>
    <h1 className='text-4xl my-5 mx-12 font-semibold'>Image Search</h1>
    <div className="search-section">
      <form onSubmit={searchHandling}>
        <input type="search"
        className='w-3/4 h-10 mx-16 my-5 px-5'
        placeholder='Type something to search...'
        ref = {searchInput}
         />
      </form>
    </div>
    <div className="flex justify-evenly my-5 container">
      <input className='px-3 py-2 bg-red-600 rounded' type="button" value="Nature" onClick={() => buttonHandling('Nature')}/>
      <input className='px-3 py-2 bg-green-400 rounded' type="button" value="Film" onClick={() => buttonHandling('Film')}/>
      <input className='px-3 py-2 bg-blue-500 rounded' type="button" value="Animal" onClick={() => buttonHandling('Animal')}/>
      <input className='px-3 py-2 bg-yellow-600 rounded' type="button" value="People" onClick={() => buttonHandling('People')}/>
      <input className='px-3 py-2 bg-blue-800 rounded' type="button" value="Food" onClick={() => buttonHandling('Food')}/>
      <input className='px-3 py-2 bg-purple-700 rounded' type="button" value="Sport" onClick={() => buttonHandling('Sport')}/>
      <input className='px-3 py-2 bg-pink-700 rounded' type="button" value="Wallpaper" onClick={() => buttonHandling('Wallpaper')}/>
      <input className='px-3 py-2 bg-gray-700 rounded' type="button" value="Valentine" onClick={() => buttonHandling('Valentine')}/>
      <input className='px-3 py-2 bg-blue-300 rounded' type="button" value="Flower" onClick={() => buttonHandling('Flower')}/>
      <input className='px-3 py-2 bg-orange-700 rounded' type="button" value="Book" onClick={() => buttonHandling('Book')}/>
    </div>
    <div className="mt-7 w-full  flex flex-wrap h-full justify-center">
      {images && images.map((image) => 
          ( 
            <img 
            key={image.id} 
            src={image.urls.small} 
            alt={image.alt_description} 
            className="image  m-1.5  rounded  duration-200  hover:scale-105 w-64 h-64"
            />
          ))}
    </div>
    <div className="flex justify-evenly m-7">
      {page > 1 && <button onClick={() => setPage(page-1)} className="bg-green-400 rounded-lg px-4 py-2 font-semibold text-xl hover:bg-green-600 hover:text-white">Previous</button>}
      {page < totalPages && <button onClick={() => setPage(page+1)} className="bg-green-400 rounded-lg px-4 py-2 font-semibold text-xl hover:bg-green-600 hover:text-white">Next</button>}
    </div>
    </>
  )
}

export default App
