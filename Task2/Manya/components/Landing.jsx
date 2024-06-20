"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import ImageGrid from "./ImageGrid";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";

const Landing = () => {
  const [query, setQuery] = useState("Nature");
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
            },
          }
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching data from Unsplash API", error);
      }
      setLoading(false);
    };
    fetchData();
  }, [query, page]);

  return (
    <div className="h-full w-full">
      <SearchBar setQuery={setQuery} />
      <Navbar setQuery={setQuery} />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ImageGrid data={data} />
      )}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Landing;
