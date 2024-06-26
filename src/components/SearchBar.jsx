import React, { useState } from "react";

import "./SearchBar.css";

const SearchBar = ({ onSearch  , onCatChange}) => {
  const [location, setLocation] = useState("");
  const [cat, setCat] = useState("Buy");

  const handleSearch = () => {
    onSearch(location);
  };

  const handleCategoryChange = () =>{
    onCatChange(cat)
  }

  return (
    <div className="search">
      <div className="namediv">
        <span onClick={() => handleCategoryChange} >Buy</span>
        <span onClick={() => handleCategoryChange} >Rent</span>
        <span onClick={() => handleCategoryChange} >PGs</span>
      </div>
    <div className="search-bar">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search by location"
        className="input"
      />

        <input
        type="text"
        
        
        placeholder="Property Types"
        className="input"
      />

       <input
        type="text"
        
        
        placeholder="Budget"
        className="input"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    </div>
  );
};

export default SearchBar;
