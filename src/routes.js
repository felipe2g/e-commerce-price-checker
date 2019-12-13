const express = require('express');

const routes = express.Router();

const Product = require('./controllers/Products/Product');
const Sugestion = require('./controllers/Sugestions/Sugestions');
const User = require('./controllers/User/User');

routes.post('/register', User.store);

routes.get('/kabum/:id', Product.show);
routes.get('/kabum/autofill/:term', Sugestion.index);

module.exports = routes;