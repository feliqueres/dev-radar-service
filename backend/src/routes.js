const { Router } = require("express");
const DevController = require('./Controllers/DevController');

const routes = Router();

routes.post("/devs/", DevController.store);

module.exports = routes;
