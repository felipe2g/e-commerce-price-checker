const express = require('express');

const app = express();

app.use(express.json());

app.use('/', require('./src/routes'));

app.listen('3000');