const utilKabum = require('../../../utils/E-commerces/Kabum');

module.exports = {
  async show(req, res) {

    const Kabum = new utilKabum;

    const product = await Kabum.getProduct(req.params.id);

    res.send(product);
  }
};