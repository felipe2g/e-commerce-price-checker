import GetProductsSugestionKabum from '../services/GetProductsSugestionKabum';

class SugestionProductsControllerKabum {
  public async show(term: string) {
    const getSugestionKabumProducts = new GetProductsSugestionKabum();

    const sugestionProductsKabum = await getSugestionKabumProducts.execute(term);

    return sugestionProductsKabum;
  }
}

export default new SugestionProductsControllerKabum();