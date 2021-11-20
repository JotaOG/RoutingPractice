import React from "react";
import { Router } from "@reach/router";
import { Home } from "./Components/Home";
import { Hello } from "./Components/Hello";
import { HelloBlueRed } from "./Components/HelloBlueRed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path="/home/:id" />
        <HelloBlueRed path="home/:id/:color1/:color2" />
      </Router>
    </div>
  );
}

export default App;
