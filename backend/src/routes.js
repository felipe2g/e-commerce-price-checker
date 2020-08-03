const express = require("express");

const routes = express.Router();

//TERABYTESHOP
const terabyteProduct = require("./controllers/E-commerces/Terabyteshop/Product");


//KABUM
const kabumProduct = require("./controllers/E-commerces/Kabum/Product");
const kabumSugestion = require("./controllers/E-commerces/Kabum/Sugestions");

//Administration
const User = require("./controllers/User/User");
const Data = require("./controllers/User/Data");

//Administration
routes.post("/register", User.store);
routes.post("/customer", Data.store);

//KABUM
routes.get("/kabum/:id", kabumProduct.show);
routes.get("/kabum/autofill/:term", kabumSugestion.index);

//TERABYTESHOP
/* Terabyte has implemented a anti-DDoS by cloudflare, 
and we can not return the HTML page for parse the products*/
routes.get("/terabyteshop/:id", terabyteProduct.show);

module.exports = routes;