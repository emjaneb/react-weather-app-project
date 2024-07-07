import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      currentIcon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="city">{weatherData.city}</div>
        <FormattedDate date={weatherData.date} />
        <div className="description text-capitalize">
          {weatherData.description}
        </div>

        <div className="current-weather">
          <div className="row">
            <div className="col-6">
              <div className="current-container">
                <img
                  src={weatherData.currentIcon}
                  alt={weatherData.description}
                  className="current-img"
                />
                <div className="current-temp">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="celsius">°C</span>
                  <span className="break">|</span>
                  <span className="fahrenheit ">F</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <span className="title">Humidity:</span>{" "}
                  {weatherData.humidity}%
                </li>
                <li>
                  <span className="title">Wind:</span>{" "}
                  {Math.round(weatherData.wind)}km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "a6946fa02tb383o83fefbda1f7e7863a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
