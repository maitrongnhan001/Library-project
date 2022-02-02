import React from 'react';
import "./search.scss";

const Search = () => {
    return (
        <div className="search-header">
            <input type="text" placeholder="Enter to search" />
            <button>Search</button>
        </div>
    );
}

export default Search;
