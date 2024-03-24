import { useEffect, useState } from "react";
import Search from "../search/Search";
import "./Weather.css";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=625c3ec05811e4ad61368f924fcd7bbc`
      );
      const data = await response.json();
      setLoading(false);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    const date = new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return date;
  }

  // Function to convert temperature from Fahrenheit to Celsius
  function convertToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius.toFixed(1);
}

  useEffect(() => {
    fetchWeatherData("rajahmundry");
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">{convertToCelsius(weatherData?.main?.temp)}°C</div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="weather-info">
            <div className="column">
              <div>
                <p className="wind">{weatherData?.wind?.speed}</p>
                <p>Wind Speed</p>
              </div>
            </div>
            <div className="column">
              <div>
                <p className="humidity">{weatherData?.main?.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
