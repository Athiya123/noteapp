import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import './search.css';
function Search({ handleSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    handleSearch(value);
  };

  return (
    <div className="search">
      <MdSearch className="search-icons" />
      <input
        onChange={handleInputChange}
        type="text"
        value={searchText}
        placeholder="type to search..."
      />
    </div>
  );
}

export default Search;
