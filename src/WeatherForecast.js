import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {

  const WeatherComponent = (props) => {
  return (
    <div>
     <i className="wi wi-thunderstorm"></i>
    </div>
  )
}

  return (
    <div className="WeatherForecast">
    <div className="row">
   <div className="col-2">
<div className="day"> 
Monday
</div>
  <br/>
  < div className="icon">
<WeatherComponent />
</div>
<div className="row">
  <div className="col-6">
      <span className="max">
        <strong>
          36° 
        </strong>
      </span>
    </div>
    <div className="col-6">
      <span className="min">
        22°
      </span>
    </div>
    </div>
</div>
</div>
</div>
  )
}