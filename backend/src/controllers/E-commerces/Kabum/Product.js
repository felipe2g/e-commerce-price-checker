const axios = require("axios");

module.exports = {
  async show(req, res) {
    const productId = req.params.id;
    const productInfo = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${productId}`);
    
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
    
    res.json(product);
  }
};