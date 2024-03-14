import React from "react";
import "./App.css";
import logo from "../public/assets/logo.svg";
import swc from "../public/assets/swc.svg";
import webpack from "../public/assets/webpack.svg";
import docker from "../public/assets/docker.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          A simple React Boiler plate app built using SWC(Speedy web compiler),
          Webpack and Docker.
        </p>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={swc} className="App-logo" alt="swc" />
          <img src={webpack} className="App-logo" alt="webpack" />
          <img src={docker} className="App-logo" alt="docker" />
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
