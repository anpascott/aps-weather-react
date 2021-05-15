import React, {useState} from "react";
import FormattedDate from "./FormattedDate.js"
import './Overview.css';
import axios from 'axios';


export default function Overview(props) {

const city = "Mexico City";
const units = "metric";
const [weatherData, setWeatherData] = useState({ ready:false });



  function handleResponse(response){
setWeatherData({
  ready: true,
  sky: response.data.weather[0].description,
  temperature: Math.round(response.data.main.temp),
  humidity: Math.round(response.data.main.humidity),
  wind: Math.round(response.data.wind.speed),
  feels: Math.round(response.data.main.feels_like),
  date: new Date(response.data.dt * 1000),
});
  }

  if (weatherData.ready) {
     return (
    <div className="Overview">
      <div className="general-info-container">
        <div className="row">
          <div className="col">
            <h1 id="city">Mexico City</h1>
            <div className="row">
              <div className="col">
                <ul className="mainData">
                  <li className="dateLog">
                    <FormattedDate date={weatherData.date}/>
                    </li>
                  <li className="sky"> {weatherData.sky} </li>
                </ul>
              </div>
              <div className="col-6" id="current-temp-wrapper">
                <span id="temp-now"> {weatherData.temperature} </span>
                <span className="units">
                  <button variant="link" id="celsius-link" className="active"> °C </button>
                  <span>|</span>
                  <button variant="link" id="fahrenheit-link"> °F </button>
                </span>
               
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="variable">
              Feels Like:
              <br />
              <span id="feels-like-value">{weatherData.feels}</span>°
            </div>
          </div>
          <div className="col">
            <div className="variable">
              Humidity:
              <br />
              <span id="humidity-value">{weatherData.humidity}</span>%
            </div>
          </div>
          <div className="col">
            <div className="variable">
              Wind:
              <br />
              <span id="wind-value">{weatherData.wind}</span>
              km/h
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
  } else {

        const apiKey = "54b3e201447a1afa52495e15558f28df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <h1> Loading... </h1>
    );
  } 
}