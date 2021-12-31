const express = require("express");
const { route } = require("express/lib/application");
const routes = express.Router();
const insert = require("./../insert/insert");

routes.post("/post", insert.post);
routes.get("/get/:id", insert.get);
routes.delete("/delete/:id", insert.delete);
routes.put("/put/:id", insert.put);

module.exports = routes;
