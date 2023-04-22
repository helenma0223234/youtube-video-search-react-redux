import React, { useState } from 'react';

function SearchBar(props) {
  const [searchterm, setSearchTerm] = useState('');

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearchChange(searchterm);
  };

  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={searchterm} placeholder="search" />
    </div>
  );
}

export default SearchBar;
