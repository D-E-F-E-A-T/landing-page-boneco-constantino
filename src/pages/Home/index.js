/* eslint-disable linebreak-style */
import React from "react";

import Header from "./components/Header";
import Dissatisfied from "./components/Dissatisfied";
import Solution from "./components/Solution";
import Demonstracion from "./components/Demonstracion";
import KnowHow from "./components/KnowHow";
import Teach from "./components/Teach";
import ColorsAvailable from "./components/ColorsAvailable";
import Wound from "./components/Wound";
import Buynow from "./components/Buynow";
import Characteristics from "./components/Characteristics";
import ShippingWays from "./components/ShippingWays";
import Clients from "./components/Clients";
import Buy from "./components/Buy";
import BuyFunctions from "./components/BuyFunctions";
import Asks from "./components/Asks";
import WhatTheySaiyng from "./components/WhatTheySaiyng";

function Home() {
  return (
    <div>
      <Header />
      <Dissatisfied />
      <Solution />
      <Demonstracion />
      <KnowHow />
      <Teach />
      <ColorsAvailable />
      <Wound />
      <Buynow />
      <Characteristics />
      <ShippingWays />
      {/* <WhatTheySaiyng /> */}
      <Clients />
      <Buy />
      <BuyFunctions />
      <Asks />
    </div>
  );
}

export default Home;
