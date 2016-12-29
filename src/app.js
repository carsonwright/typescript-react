"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var Hello_1 = require("./components/Hello");
var User_1 = require("./components/User");
ReactDOM.render(React.createElement(react_router_1.Router, { history: react_router_1.browserHistory },
    React.createElement(react_router_1.Route, { path: "/", component: Hello_1.default }),
    React.createElement(react_router_1.Route, { path: "/user", component: User_1.default })), document.getElementById("root"));
