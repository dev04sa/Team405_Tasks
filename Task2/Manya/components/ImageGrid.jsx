import React from 'react';

const ImageGrid = ({ data }) => {
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading..
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((img) => (
        <div key={img.id} className="relative group overflow-hidden rounded-lg shadow-lg">
          <img src={img.urls.small} alt={img.alt_description} className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110" />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out"></div>
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
