import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Payment from "./pages/Paymentmethod";

function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" />
      <Route component={Payment} path="formadepagamento" />
    </BrowserRouter>
  );
}

export default Routes;
