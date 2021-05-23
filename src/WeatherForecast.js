import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import "./WeatherForecastDay.js";
import axios from 'axios';
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function WeatherForecast(props) {

  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect (() => {
   setLoaded(false);
   }, [props.coordinates]);
  

  function handleForecast (response) {
  setForecastData(response.data.daily);
  setLoaded(true);
  }
 if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
} else {
    const apiKey = "4206b9b1732d9962f39b9e24c12a50e7";
    let lat = (props.coordinates.lat);
    let lon = (props.coordinates.lon);
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  
  return (
    <p>Loading</p>
  );
  }
}