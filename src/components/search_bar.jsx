// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../actions';

function SearchBar(props) {
  // const [searchterm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (event) => {
    dispatch(setSearch(event.target.value));
  };
  const query = useSelector((state) => (state.search.text));

  return (
    <div id="search-bar">
      <input onChange={onInputChange} value={query} placeholder="search" />
    </div>
  );
}

export default SearchBar;
