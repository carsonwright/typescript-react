import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'

import Hello from "./components/Hello";
import User from "./components/User";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}></Route>
    <Route path="/user" component={User}></Route>
  </Router>,
  document.getElementById("root")
);
