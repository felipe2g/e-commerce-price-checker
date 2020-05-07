const axios = require("axios");

class Kabum {
  
  async getProduct(id){
    const productInfo = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${id}`);

    const selectedProduct = productInfo.data;

    const code = String(productInfo.data.nome).split("-");
    const productCode = code[code.length-1].trim();

    const product = {
      description: selectedProduct.nome,
      code: productCode,
      discountPrice: selectedProduct.preco_desconto,
      fullPrice: selectedProduct.preco,
      photos: selectedProduct.fotos,
      sucess: true
    }

    return product;
  }

}

module.exports = Kabum;