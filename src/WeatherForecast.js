import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div classname="WeatherForecast-day">Thur</div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather-description"
          />{" "}
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperatures-max">19°</span>
            <span className="WeatherForecast-temperatures-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
