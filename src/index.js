/* eslint-disable linebreak-style */
import React from "react";

import ReactDOM from "react-dom";

import "./global.css";
import Header from "./pages/Header";
import Dissatisfied from "./pages/Dissatisfied";
import Solution from "./pages/Solution";
import Demonstracion from "./pages/Demonstracion";
import KnowHow from "./pages/KnowHow";
import Teach from "./pages/Teach";
import ColorsAvailable from "./pages/ColorsAvailable";
import Wound from "./pages/Wound";
import Buynow from "./pages/Buynow";
import Characteristics from "./pages/Characteristics";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Dissatisfied />
    <Solution />
    <Demonstracion />
    <KnowHow />
    {/* <Teach /> */}
    <ColorsAvailable />
    <Wound />
    <Buynow />
    <Characteristics />
  </React.StrictMode>,

  document.getElementById("root")
);
