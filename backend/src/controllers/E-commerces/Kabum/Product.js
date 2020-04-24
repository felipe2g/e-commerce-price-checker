const axios = require("axios");

module.exports = {
  async show(req, res) {
    const productId = req.params.id;
    const productInfo = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${productId}`);
    res.json(productInfo.data);
  }
};