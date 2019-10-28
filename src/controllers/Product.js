const axios = require('axios');


const getInfoProduct = require('../utils/getInfoProduct');

module.exports = {
    async index(req, res) {

        const url = 'https://www.kabum.com.br/produto/104920';
    
        const productsInfo = await getInfoProduct(94483);

        //memoria ram = 104920
        //processador = 87400
        //drone =
        //gabinete = 
        //ps4 =  

        res.send(productsInfo);

    }
}