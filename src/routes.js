const express = require('express');

const routes = express.Router();

const Product = require('./controllers/Product');

routes.get('/', Product.index);

module.exports = routes;