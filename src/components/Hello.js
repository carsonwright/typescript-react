"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(react_router_1.Link, { to: '/user' }, "User"),
            "Hello, ",
            this.props.firstName,
            " ",
            this.props.lastName);
    };
    return Hello;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
