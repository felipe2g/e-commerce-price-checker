const axios = require('axios');

module.exports = async function(term) {
    try{
      const sugestionProduct = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/listagem/v1/autocomplete?string=${term}`)
      return sugestionProduct.data;
    } catch(e) {
      console.error('error' + e)
      return null
    }

}