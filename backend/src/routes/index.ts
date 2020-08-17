import express from 'express';

import kabumRouter from './kabum.routes';
import terabyteshopRouter from './terabyteshop.routes';

const routes = express.Router();

routes.use('/kabum', kabumRouter);
routes.use('/terabyteshop', terabyteshopRouter);

export default routes;