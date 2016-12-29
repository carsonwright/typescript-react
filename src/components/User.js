"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super.apply(this, arguments) || this;
    }
    User.prototype.render = function () {
        return React.createElement("div", null,
            "Hello, ",
            this.props.firstName,
            " ",
            this.props.lastName);
    };
    return User;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
