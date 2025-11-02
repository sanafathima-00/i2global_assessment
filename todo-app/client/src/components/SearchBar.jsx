import React from "react";
import FormField from "./common/FormField";
import "./SearchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass search-icon"></i>
      <FormField
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
