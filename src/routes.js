const express = require('express');

const routes = express.Router();

const Product = require('./controllers/Products/Product');
const Sugestion = require('./controllers/Sugestions/Sugestions');


routes.get('/kabum/:id', Product.index);
routes.get('/kabum/autofill/:term', Sugestion.index);

module.exports = routes;