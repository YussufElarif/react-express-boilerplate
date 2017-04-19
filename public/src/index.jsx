var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Main = require("./components/main.jsx");
var Errors = require("./components/error/error.jsx");
var Product = require("./components/product/product.jsx");

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Product}/>
    </Route>
    <Route path="*" component={Errors}/>
  </Router>,
  document.getElementById("app")
);
