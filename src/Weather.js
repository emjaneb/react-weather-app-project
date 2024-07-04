import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <div className="city">Melbourne</div>
      <div className="day-time">Tuesday 14:00</div>
      <div className="description">Broken Clouds</div>

      <div className="current-weather">
        <div className="row">
          <div className="col-6">
            <div className="current-container">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
                alt="broken clouds"
                className="current-img"
              />
              <div className="current-temp">
                <span className="temperature">12</span>
                <span className="celsius">°C</span>
                <span className="break">|</span>
                <span className="fahrenheit ">F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <span class="title">Humidity:</span> 97%
              </li>
              <li>
                <span class="title">Wind:</span> 3km/h
              </li>
              <li>
                <span class="title">Precipitation:</span> 3%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
