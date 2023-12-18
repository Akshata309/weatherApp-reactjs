import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
   Developed by{" "}
   <a target="_blank" rel="noreferrer" href="https://github.com/Akshata309">
     Akshata Khadake
   </a>
   {" "} | Weather data provided by{" "}
   <a target="_blank" rel="noreferrer" href="https://openweathermap.org/">
     OpenWeatherMap
   </a>
</div>
    </React.Fragment>
  );
}

export default App;
