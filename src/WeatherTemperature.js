import React, { useState } from "react";

export default function WeatherTemperature(props) {

  const [units,setUnits] = useState("celsius");

  function displayFahrenheit (event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function displayCelsius (event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {

  return (
    <div className="WeatherTemperature col-6" id="current-temp-wrapper">
                <span className="temperature"> 
                {Math.round(props.celsius)}
                </span>
                <span className="units">
                  <button variant="link" className="disabled"> °C </button>
                  <span>|</span>
                  <button variant="link" className="active" onClick={displayFahrenheit}> °F </button>
                </span>
              </div>

  );
} else {
  let fahrenheitTemp = (props.celsius *9/5)+32
  return (
    <div className="WeatherTemperature col-6" id="current-temp-wrapper">
                <span className="temperature"> 
                {fahrenheitTemp}
                </span>
                <span className="units">
                  <button variant="link" className="active" onClick={displayCelsius}> °C </button>
                  <span>|</span>
                  <button variant="link" className="disabled"> °F </button>
                </span>
              </div>

  );
}
}