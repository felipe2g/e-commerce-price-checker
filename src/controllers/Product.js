const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const getInfoProduct = require('../utils/getInfoProduct');

module.exports = {
    async index(req, res) {

        const url = 'https://www.kabum.com.br/produto/104920';
    
        const productsInfo = await getInfoProduct(104920);

        console.log(productsInfo);

    }
}