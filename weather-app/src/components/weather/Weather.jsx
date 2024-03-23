import { useEffect, useState } from "react";
import Search from "../search/Search";
import "./Weather.css";

function Weather() {
  const [search,setSearch]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError] =useState();
  const [weatherData,setWeatherData]=useState(null);


  async function fetchWeatherData(param){
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=625c3ec05811e4ad61368f924fcd7bbc`)
      const data=await response.json();
      setLoading(false);
      setWeatherData(data)
    } catch (error) {
      console.log(error);
      setLoading(false);

    }
  }

   function handleSearch(){
      fetchWeatherData(search);
   
  }

  useEffect(()=>{
    fetchWeatherData('rajahmundry');

  },[])

  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {
        loading?<div>Loading...</div>:
        <div>
          <div className="city-name">
            <h2>{weatherData?.name}, <span>{weatherData?.sys.country}</span></h2>
          </div>
          <div className="date">
            <span></span>
          </div>
        </div>
      }
    </div>
  );
}

export default Weather;
