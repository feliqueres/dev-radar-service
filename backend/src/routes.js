const { Router } = require("express");
const DevController = require("./Controllers/DevController");
const SearchController = require("./Controllers/SearchController");

const routes = Router();

routes.post("/devs/", DevController.store);
routes.get("/devs/", DevController.index);
routes.delete("/devs/:id", DevController.destroy);
routes.get("/devs/:id", DevController.find);

routes.get("/search/", SearchController.index);

module.exports = routes;
