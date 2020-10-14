"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get('/', function (req, res) {
    res.send({
        "message": "File exits"
    });
});
app.listen(5000, function () {
    console.log("Server has started at http://localhost:5000");
});
