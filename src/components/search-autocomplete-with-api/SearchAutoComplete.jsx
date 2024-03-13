import { useEffect, useState } from "react";
import "./SearchAutoComplete.css";
import Suggestions from "./Suggestions";

function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchListOfUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setLoading(false);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
      }
    } catch (error) {
      setError(error);
      setLoading(false);

      console.log(error.message);
    }
  };

  const handleClick=(e)=>{
    setShowDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);


  }
  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);
  return (
    <div className="searchAutoCompleteContainer">
      {loading ? (
        <h1>Loading data</h1>
      ) : (
        <>
        <h1>Search Autocomplete</h1>
        <input
          type="search"
          name="search-user"
          id=""
          placeholder="Search users here..."
          value={searchParam}
          onChange={handleChange}
        />
        </>
      )}

      {showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
}

export default SearchAutoComplete;
