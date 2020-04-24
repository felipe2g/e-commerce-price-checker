const axios = require('axios');

module.exports = {
  async index(req, res){

    const term = req.params.term;

    try{
      const sugestionProduct = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/listagem/v1/autocomplete?string=${term}`)
      res.json(sugestionProduct.data);
    } catch(e) {
      console.error('error' + e)
      res.error(404);
    }

  }
}