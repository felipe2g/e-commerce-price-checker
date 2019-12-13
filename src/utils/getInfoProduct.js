require('dotenv/config');
const axios = require('axios');

module.exports = async function(productId) {

  const productInfo = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${productId}`)

  return productInfo.data;

}