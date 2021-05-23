import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastDay(props) {

  function day() {
    let date = new Date (props.data.dt*1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
<div className="WeatherForecastDay">
  <div className="day"> 
{day()}
</div>
  <br/>
  <WeatherIcon code={props.data.weather[0].icon} desc="{props.data.weather[0].icon}" />
<div className="row">
  <div className="col-6">
      <span className="max">
        <strong>
        {Math.round(props.data.temp.max)}°
        </strong>
      </span>
    </div>
    <div className="col-6">
      <span className="min">
      {Math.round(props.data.temp.min)}°
      </span>
    </div>
    </div>
</div>
  );
}