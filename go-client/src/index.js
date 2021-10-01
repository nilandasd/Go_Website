import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App";
import NotFound from "./components/NotFound";



document.body.style.margin = "0";
document.body.style.padding = "0";

const appRouting = (
  <React.StrictMode>
      <Provider store={store}>
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
      </Provider>
  </React.StrictMode>
);

ReactDOM.render(appRouting, document.getElementById("root"));
