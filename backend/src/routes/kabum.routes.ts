import { Router, Request, Response } from 'express';

import ProductControllerKabum from '../modules/e-commerces/kabum/controllers/ProductControllerKabum';
import SugestionProductsControllerKabum from '../modules/e-commerces/kabum/controllers/SugestionProductsControllerKabum';

const kabumRouter = Router();

kabumRouter.get('/:id', async(req: Request, res: Response) => {
  const id = req.params.id;

  const productKabum = await ProductControllerKabum.show(id);

  res.send(productKabum);
})

kabumRouter.get('/search/:term', async (req, res) => {
  const term = req.params.term;

  const sugestionProducts = await SugestionProductsControllerKabum.show(term);

  res.send(sugestionProducts);

})

export default kabumRouter;