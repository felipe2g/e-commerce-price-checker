import GetProductInfoTerabyteshop from '../services/GetProductInfoTerabyteshop';

class ProductControllerTerabyteshop {
  public async show(id: string) {

    const getProductInfoTerabyteshop = new GetProductInfoTerabyteshop();

    const product = await getProductInfoTerabyteshop.execute(id);

    return product;
  }
}

export default new ProductControllerTerabyteshop();