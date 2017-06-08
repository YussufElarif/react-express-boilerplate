import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Router, Route } from 'react-router-dom';

import Main from "./components/main.jsx";
import Errors from "./components/errors/errors.jsx";
import Product from "./components/product/product.jsx";

render(
  <BrowserRouter>
    <Main>
      <Route exact path="/" component={Product} />
    </Main>
  </BrowserRouter>,
  document.getElementById("app")
);
