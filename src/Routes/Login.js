const express = require ("express");
const LoginCont = require("../Controllers/LoginController");

const LoginRoute = express.Router();




LoginRoute.post('/Login',LoginCont);

module.exports = LoginRoute;
