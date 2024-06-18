import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const categories = [
  'Nature', 'Film', 'Animals', 'People', 'Food', 'Sports', 'Wallpapers', 'Valentine', 'Flower', 'Book'
];

const App = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('Book');
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState('Book');

  const fetchImages = async () => {
    const clientId = 'rrHnHjNFI_rqxmoYF7GVVtYxlBzxaMniMbYEllgYtzE';
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${category}&client_id=${clientId}`;

    try {
      const response = await axios.get(url);
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images from Unsplash API', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [category, page]);

  const handleCategoryClick = (cat) => {
    setInputValue(cat);
    setCategory(cat);
    setPage(1);
  };

  return (
    <div className="app">
      <h1>Image Search</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter category"
        />
      </div>
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={cat === category ? 'active' : ''}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        ))}
      </div>
      <button className="next-button" onClick={() => setPage((prevPage) => prevPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default App;
