import React, { useState } from "react";
import './Form.css';

export default function Form () {
  const [city, setCity] = useState("null");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "54b3e201447a1afa52495e15558f28df";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    // axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    alert (response.data.main.temp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
     <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city.."
              className=""
              autoComplete="off"
              onChange={updateCity}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-primary shadow-sm"
              id="search-button"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Use Location"
              className="form-control btn btn-success shadow-sm"
              id="current-location-button"
            />
          </div>
        </div>
      </form>
  );
  
return (
    <div className="Form">
     {form}
    </div>
  );
}