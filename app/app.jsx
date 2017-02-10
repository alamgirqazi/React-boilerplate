var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, hashHistory, IndexRoute} = require("react-router");
var Main = require("Main");


//load foundation

require('style!css!foundation-sites/dist/foundation.min.css')

// app.scss

require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  //Props passed
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById("app")
);
