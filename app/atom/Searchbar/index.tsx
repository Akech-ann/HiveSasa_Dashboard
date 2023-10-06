"use client"
import React, { ChangeEvent } from 'react';
type SearchBarProps = {
  searchQuery: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: () => void;
  placeholder: string;
};
const SearchBar : React.FC<SearchBarProps>= ({ searchQuery, handleSearchChange, handleSearchSubmit, placeholder }) => {
  return (
    <div className='mb-4 mt-10 flex items-center'>
      <input
        type='text'
        className='px-7 py-4 border border-solid border-black rounded-2xl ml-12 mb-4 w-1/3'
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button
        className='ml-4 px-8 py-4 bg-custom-orange text-black rounded-3xl hover:text-white text-xl mb-4 '
        onClick={handleSearchSubmit}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;