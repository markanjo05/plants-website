import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./pages";

const routing = (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
