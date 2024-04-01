import { NavLink } from "react-router-dom";
import Home from "../../pages/home/Home";
import Favorites from "../../pages/favorites/Favorites";
import { useContext } from "react";
import { Context } from "../../context/Context";

function Navbar() {

  const {searchParam,setSearchParam,handleSubmit}=useContext(Context);

 

  console.log(searchParam)
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
      <NavLink to="/">
            Food Recipe
          </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          name="search"
          onChange={(event)=>{setSearchParam(event.target.value)}}
          placeholder="Search an item here..."
        />
      </form>
      <ul className="flex gap-5 ">
        <li>
          <NavLink className="text-black hover:text-gray-700 duration-300" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="text-black hover:text-gray-700 duration-300" to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
