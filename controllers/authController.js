var express = require("express"),
  User = require("../models/user"),
  config = require("../config.js"),
  jwt = require("jwt-simple");

exports.login = function (req, res) {
  console.log("Logged In");
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      console.log("Error Happened In auth /token Route");
    } else {
      var payload = {
        id: user.id,
        expire: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
      };
      var token = jwt.encode(payload, config.jwtSecret);
      res.json({
        token: token,
      });
    }
  });
};
exports.register = function (req, res) {
  User.register(
    new User({ name: req.body.name, username: req.body.username }),
    req.body.password,
    function (err, msg) {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: "Successful" });
      }
    }
  );
};
