import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Birmingham" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://www.chimdinma.com/">Chimdinma Egbuchulam</a> and is{" "}
        <a
          href="https://github.com/didichulam/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dinma-react-weather-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
