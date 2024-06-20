import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div className='flex justify-center items-center py-4'>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className='px-4 py-2 bg-gray-600 text-white rounded-lg mx-2 cursor-pointer hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed'
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className='px-4 py-2 bg-blue-600 text-white rounded-lg mx-2 cursor-pointer hover:bg-blue-700'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
