import { Router, Request, Response } from 'express';

import ProductControllerTerabyteshop from '../modules/e-commerces/Terabyteshop/controllers/ProductControllerTerabyteshop';

const terabyteshopRouter = Router();

terabyteshopRouter.get('/:id', async(req: Request, res: Response) => {
  const id = req.params.id;

  const productTerabyteshop = await ProductControllerTerabyteshop.show(id);

  res.send(productTerabyteshop);
})

export default terabyteshopRouter;