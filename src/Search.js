import React, { useState } from "react";
import './Search.css';
import axios from 'axios';


export default function Search () {
  const [city, setCity] = useState("null");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "54b3e201447a1afa52495e15558f28df";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    alert (`The weather in ${city} is ${Math.round(response.data.main.temp)}°C`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let browser = (
    <div className="searchEngine">
              
     <form className="mb-" size="lg" placeholder="Type a City" onSubmit={handleSubmit}>
<div className="row">
          <div className="col-8">
            <input
              className=""
              type="search"
              placeholder="Type a city.."
              className="searchBar"
              autoFocus="on"
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-xs"
              id="search-button"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Use Location"
              className="form-control btn btn-success shadow-xs"
              id="current-location-button"
            />
          </div>
        </div>
      </form>
      </div>
  );
  
return (
    <div className="searchBrowser">
     {browser}
    </div>
  );
}