import "./Search.css";

function Search({ handleSearch, setSearch, search }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        className="city-search"
        placeholder="Search city..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        search
      </button>
    </div>
  );
}

export default Search;
