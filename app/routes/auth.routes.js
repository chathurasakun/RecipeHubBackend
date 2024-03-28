module.exports = (app) => {
  const user = require("../controllers/login.controller.js");
  var auth = require("express").Router();

  // Login
  auth.post("/login", user.findOne);

  app.use("api/auth", auth);
};
