import React from 'react';
import './header.css';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/search/searchSlice';

function Header() {
  const searchText = useSelector((state) => state.search.searchKeyword);
  console.log(searchText);

  const dispatch = useDispatch();

  let closeSearch;

  if (searchText !== '') {
    closeSearch = (
      <span
        className="closeSearchbarIcon"
        onClick={() => dispatch(searched(''))}
      >
        <i className="fa fa-times" />
      </span>
    );
  }
  if (searchText === '') {
    closeSearch = null;
  }

  return (
    <header>
      <div className="navbar">
        <div className="searchbar">
          <span className="searchbarIcon">
            <i className="fas fa-search" />
          </span>

          {closeSearch}

          <input
            type="text"
            className="searchInput"
            placeholder="search"
            onChange={(e) => dispatch(searched(e.target.value))}
            value={searchText}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
