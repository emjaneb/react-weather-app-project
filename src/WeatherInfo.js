import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="city">{props.data.city}</div>
      <FormattedDate date={props.data.date} />
      <div className="description text-capitalize">
        {props.data.description}
      </div>

      <div className="current-weather">
        <div className="row">
          <div className="col-6">
            <div className="current-container">
              <WeatherIcon code={props.data.icon} />
              <div className="current-temp">
                <span className="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="celsius">°C</span>
                <span className="break">|</span>
                <span className="fahrenheit ">°F</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <span className="title">Humidity:</span> {props.data.humidity}%
              </li>
              <li>
                <span className="title">Wind:</span>{" "}
                {Math.round(props.data.wind)}km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
