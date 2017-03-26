var React = require("react");
var ReactDOM = require("react-dom");
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Main = require("./app/main.jsx");
var Errors = require("./app/404.jsx");
var Product = require("./product/product.jsx");
// require scss file for it to be rendered

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Product}/>
    </Route>
    <Route path="*" component={Errors}/>
  </Router>,
  document.getElementById("app")
);
