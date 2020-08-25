import { Router, Request, Response } from 'express';

import SugestionProductsControllerPichau from '../modules/e-commerces/Pichau/controllers/SugestionProductsControllerPichau';

const PichauRouter = Router();

// PichauRouter.get('/:id', async(req: Request, res: Response) => {
//   const id = req.params.id;

//   const productPichau = await ProductControllerPichau.show(id);

//   res.send(productPichau);
// })

PichauRouter.get('/search/:term', async (req, res) => {
  const term = req.params.term;

  const sugestionProducts = await SugestionProductsControllerPichau.show(term);

  res.send(sugestionProducts);

})

export default PichauRouter;