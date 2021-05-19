import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
  
  return (
 <div className="WeatherInfo">
      <div className="general-info-container">
        <div className="row">
          <div className="col">
            <h1 id="city">{props.data.city}</h1>
            <div className="row">
              <div className="col">
              <div className="row">
              <div className="col-2 main-icon">
                <WeatherIcon code={props.data.icon} />
                </div>
                <div className="col-10">
                <ul className="mainData">
                  <li className="dateLog">
                    <FormattedDate date={props.data.date}/>
                    </li> 
                  <li className="description"> {props.data.description} </li>
                </ul>
              </div>
              </div>
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