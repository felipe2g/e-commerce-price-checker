const getInfoProduct = require('../../utils/getInfoProduct');

module.exports = {
    async show(req, res) {
    
        const productsInfo = await getInfoProduct(req.params.id);
        
        res.send(productsInfo);

    }
}