import express from 'express';

import kabumRouter from './kabum.routes';
import terabyteshopRouter from './terabyteshop.routes';
import pichauRouter from './pichau.routes';

const routes = express.Router();

routes.use('/kabum', kabumRouter);
routes.use('/terabyteshop', terabyteshopRouter);
routes.use('/pichau', pichauRouter);

export default routes;