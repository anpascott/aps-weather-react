import React from "react";
import './Overview.css';

export default function Overview() {


  return (
    <div className="Overview">
      <div className="general-info-container">
        <div className="row">
          <div className="col">
            <h1 id="city">Mérida</h1>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li id="date">Monday February 5, 2021</li>
                  <li id="description">Cloudy</li>
                </ul>
              </div>
              <div className="col-6" id="current-temp-wrapper">
                <span id="temp-now"> 22 </span>
                <span className="units">
                  <a href="#" id="celsius-link" className="active">
                    °C
                  </a>
                  <span>|</span>
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </span>
                <div className="row" className="day-min-max">
                  <div className="col-6">
                    <span className="max-temp">Max.</span>
                    <span className="max-temp" id="max-temp">
                      26
                    </span>
                    <span className="max-temp">° | </span>
                    <span className="min-temp">Min.</span>
                    <span className="min-temp" id="min-temp">
                      18
                    </span>
                    <span className="min-temp">°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="variable">
              Feels Like:
              <br />
              <span id="feels-like-value">20</span>°
            </div>
          </div>
          <div className="col">
            <div className="variable">
              Humidity:
              <br />
              <span id="humidity-value">80</span>%
            </div>
          </div>
          <div className="col">
            <div className="variable">
              Wind:
              <br />
              <span id="wind-value">4</span>
              km/h
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}