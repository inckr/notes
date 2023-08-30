import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <SearchIcon className="search-icons" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Type To Search..."
      />
    </div>
  );
};

export default Search;
