import React from 'react';

const SearchBox = ({onSearchChange}) => {
  return (
    <div className="search-wrap">
      <input className="search-input"
        type="search"
        placeholder="Search learners by name"
        onChange={onSearchChange}/>
    </div>
  )
}

export default SearchBox;
