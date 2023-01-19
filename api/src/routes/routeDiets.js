const { Router }= require("express");
const { listDiets } = require("../handlers/handlersDiets.js")

const dietsRoute = Router();

dietsRoute.get("/",listDiets);


module.exports = dietsRoute;
