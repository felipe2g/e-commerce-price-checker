const getInfoProduct = require('../utils/getInfoProduct');

module.exports = {
    async index(req, res) {
    
        const productsInfo = await getInfoProduct(87400);

        res.send(productsInfo);

    }
}