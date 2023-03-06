import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInputField } from '../../styles/NavbarStyle';
import { searchIcon } from '../../utils/constants';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // keeps page from reloading

    const navigate = useNavigate(); // used to navigate to different page

    if (query.length > 0) navigate(`/search/${searchQuery}`); // navigates to searchFeed

    setQuery(''); // clears out the search field
  };

  return (
    <SearchInputField onSubmit={handleSubmit}>
      <input
        placeholder='Search. . .'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', height: '100%' }}
      ></input>
      <span
        style={{ cursor: 'pointer', display: 'flex' }}
        onClick={handleSubmit}
      >
        {searchIcon}
      </span>
    </SearchInputField>
  );
};

export default SearchBar;
