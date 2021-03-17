import React from "react";
import "../styles/Weather.css";
import partlyCloudy from "../styles/WeatherLogo/partlyCloudy.png";
import cloudy from "../styles/WeatherLogo/cloudy.png";
import rainy from "../styles/WeatherLogo/rainy.png";
import storm from "../styles/WeatherLogo/storm.png";
import sunny from "../styles/WeatherLogo/sunny.png";

const findLogo = (min, max) => {
  if (min >= 30 && max < 40) {
    //30-40 sunny
    return sunny;
  } else if (min >= 25 && max < 35) {
    //25-35 partlyCloudy
    return partlyCloudy;
  } else if (min >= 15 && max < 25) {
    //15-25 cloudy
    return cloudy;
  } else if (min >= 10 && max < 15) {
    //10-15 rainy
    return rainy;
  } else if (min >= -5 && max < 10) {
    //-5-10 storm
    return storm;
  }
};

function addClassByWeather(src) {
  if (src === rainy) {
    return "rain";
  } else if (src === storm) {
    return "storm";
  } else if (src === sunny) {
    return "sun";
  } else if (src === partlyCloudy) {
    return "partlyCloudy";
  } else if (src === cloudy) {
    return "cloudy";
  }
}

function Weather({ day, low, high, className, location, current }) {
  function addStaff() {
    if (location && current) {
      return (
        <>
          <h3 className="current">{current}</h3>
          <h3 className="location">{location}</h3>
        </>
      );
    }
  }
  return (
    <div
      className={`weather ${addClassByWeather(findLogo(low, high))} ${
        className ? className : ""
      }`}
    >
      <h3 className="days">{day}</h3>
      {addStaff()}
      <img
        className="weatherlogo"
        src={findLogo(low, high)}
        alt="WeatherLogo"
      />
      {/* <p className="status">{addClassByWeather(findLogo(low, high))}</p> */}
      <div className="highlow">
        <h3 className="high">{`${high}° High`}</h3>

        <h3 className="low">{`${low}°  Low`}</h3>
      </div>
    </div>
  );
}

export default Weather;
