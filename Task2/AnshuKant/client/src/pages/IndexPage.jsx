import React, { useEffect, useState } from "react";
import { createClient } from "pexels";
import { Input } from "../components/index";

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("nature");
  const items = [
    "wallpaper",
    "nature",
    "dog",
    "cat",
    "man",
    "books",
    "animal",
    "food",
    "sport",
  ];

  const client = createClient(
    import.meta.env.VITE_API_KEY
  );
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    client.photos.search({ query, per_page: 20, page }).then((res) => {
      setPhotos(res.photos);
    });
  }, [page, query]);
  return (
    <>
      <div className="my-4 w-1/2 flex items-center mx-auto">
        <Input
          placeholder="Type to search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 mx-6 ">
        {items.map((item) => (
          <div key={item} className="">
            <button onClick={()=>setQuery(item)} className="bg-gray-300 px-3 py-2 rounded-2xl mb-2">{item}</button>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 bg-gray-200">
        {Array.isArray(photos) &&
          photos.map((photo) => (
            <div key={photo.id} className="m-4">
              <img
                className="aspect-square object-cover rounded-2xl"
                src={photo.src.medium}
                alt=""
              />
            </div>
          ))}
      </div>

      <div className="my-4 flex gap-2">
        <button
          className="bg-gray-400 px-5 py-2  rounded-2xl flex gap-1"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Prev
        </button>
        <button
          className="bg-gray-400 px-5 py-2 rounded-2xl flex gap-1"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
      {/* {console.log(page)} */}
    </>
  );
};

export default IndexPage;
