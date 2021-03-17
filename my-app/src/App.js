import React from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const week = [
    { day: "Sunday", low: "33", high: "38" },
    { day: "Monday", low: "26", high: "34" },
    { day: "Tuesday", low: "18", high: "24" },
    { day: "Wednesday", low: "15", high: "20" },
    { day: "Thursday", low: "12", high: "14" },
    { day: "Friday", low: "12", high: "14" },
    { day: "Saturday", low: "-4", high: "8" },
  ];
  const renderWeek = function () {
    const array = [];
    for (let i = 0; i < week.length; i++) {
      let weather = (
        <Weather day={week[i].day} low={week[i].low} high={week[i].high} />
      );
      if (today() === week[i].day) {
        weather = (
          <Weather
            current={"Today"}
            location={"Rishon Lezion"}
            day={week[i].day}
            low={week[i].low}
            high={week[i].high}
            className={"main"}
          />
        );
      }
      array.push(weather);
    }
    return array;
  };
  return (
    <div className="app">
      <div className="container">
        <h1>WELCOME BACK!</h1>
        <h2 className="location">Note: All degrees in ℃</h2>
        {/* <h2 className="location">Choose a day to see the weather</h2> */}
        <h2>Have a nice day!</h2>
      </div>
      <div className="divWeather">{renderWeek()}</div>
    </div>
  );
}
export default App;

function today() {
  var a = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var r = weekdays[a.getDay()];
  return r;
}
