import React from "react";
import FormateDate from "./FormateDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormateDate date={props.data.date} />
        </li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.data.icon} size={65} />
            </div>
            <div>
              {" "}
              <WeatherUnit celsius={Math.round(props.data.temperature)} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
