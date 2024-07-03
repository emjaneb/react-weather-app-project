import React from "react";
import "./Weather.css";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <h1>Melbourne</h1>
      <div className="day-time">Tuesday 14:00</div>

      <div className="row">
        <div className="col-6">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="broken clouds"
          />
          <div className="current-temp">12°</div>
        </div>
        <div className="col-6">
          <h4>Broken Clouds</h4>
          <ul>
            <li>Humidity:</li>
            <li>Wind:</li>
            <li>Precipitation:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
