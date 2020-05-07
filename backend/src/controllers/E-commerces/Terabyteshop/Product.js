const utilTerabyte = require('../../../utils/E-commerces/Terabyte');

module.exports = {
  async show(req, res) {
    
    const Terabyte = new utilTerabyte;

    const product = await Terabyte.getProduct(req.params.id);

    res.send(product);

  }
};