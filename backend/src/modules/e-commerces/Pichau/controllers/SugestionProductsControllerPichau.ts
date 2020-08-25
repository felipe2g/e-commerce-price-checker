import GetProductsSugestionPichau from '../services/GetProductsSugestionPichau';

class SugestionProductsControllerPichau {
  public async show(term: string) {
    const getProductsSugestionPichau = new GetProductsSugestionPichau();

    const sugestionProductsPichau = await getProductsSugestionPichau.execute(term);

    return sugestionProductsPichau;
  }
}

export default new SugestionProductsControllerPichau();