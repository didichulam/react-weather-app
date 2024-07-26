import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherDailyForecast from "./WeatherDailyForecast";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherDailyForecast data={forecast.daily[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fc07ae9o4bd8db7562f510t9323275bb";
    let city = props.data.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
