import React from "react";
import "./WeatherIcon.css";


export default function WeatherIcon(props) {

  let source = `http://openweathermap.org/img/wn/${props.code}@2x.png`;

return (
  
<div className="WeatherIcon">
 <img
        src={source} className="icon" alt={props.code} width="200"/>
</div>
);
}
