import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  
  return (
 <div className="WeatherInfo">
      <div className="general-info-container">
        <div className="row">
          <div className="col">
            <h1 id="city">{props.data.city}</h1>
            <div className="row">
              <div className="col">
                <ul className="mainData">
                  <li className="dateLog">
                    <FormattedDate date={props.data.date}/>
                    </li> 
                  <li className="sky"> {props.data.sky} </li>
                </ul>
              </div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="variable">
              Feels Like:
              <br />
              <span id="feels-like-value">{props.data.feels}</span>°
            </div>
          </div>
          <div className="col">
            <div className="variable">
              Humidity:
              <br />
              <span id="humidity-value">{props.data.humidity}</span>%
            </div>
          </div>
          <div className="col">
            <div className="variable">
              Wind:
              <br />
              <span id="wind-value">{props.data.wind}</span>
              km/h
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );

}