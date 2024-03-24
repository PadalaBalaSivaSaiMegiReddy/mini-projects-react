import "./Search.css";

function Search({ handleSearch, setSearch, search }) {

  function handleSubmit(e){
    e.preventDefault();
    handleSearch();
  }

  return (
    <form className="search-engine" onSubmit={handleSubmit}>
      <input
        type="text"
        className="city-search"
        placeholder="Search city..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit" className="search-btn" onClick={handleSearch}>
        search
      </button>
    </form>
  );
}

export default Search;
