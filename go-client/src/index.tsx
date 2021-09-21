import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./components/App";
import NotFound from "./components/NotFound";

document.body.style.margin = "0";
document.body.style.padding = "0";

const appRouting = (
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));
