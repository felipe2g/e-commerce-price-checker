const axios = require("axios");

module.exports = {
  async show(req, res) {
    const productId = req.params.id;

    const productInfo = await axios.get(`https://www.terabyteshop.com.br/produto/${productId}/a`);
    
    

    res.json(productInfo.data);
  }
};