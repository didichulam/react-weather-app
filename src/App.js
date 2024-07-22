import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Chimdinma Egbuchulam and is{" "}
          <a href="https://github.com/didichulam/react-weather-app">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://dinma-react-weather-app.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
