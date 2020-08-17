import GetKabumProductInfo from '../services/GetProductInfoKabum';

class ProductControllerKabum {
  public async show(id: string) {
    const getKabumProductInfo = new GetKabumProductInfo();

    const productKabum = await getKabumProductInfo.execute(id);

    return productKabum;
  }
}

export default new ProductControllerKabum();