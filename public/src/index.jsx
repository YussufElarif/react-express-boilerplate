import React from "react";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory } from "react-router";

import Main from "./components/main.jsx";
import Errors from "./components/errors/errors.jsx";
import Product from "./components/product/product.jsx";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Product} />
    </Route>
    <Route path="*" component={Errors} />
  </Router>,
  document.getElementById("app")
);
