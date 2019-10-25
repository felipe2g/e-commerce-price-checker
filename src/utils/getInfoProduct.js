const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = async function(productId) {
    const response = await axios.request({
        method: 'GET',
        url: `https://www.kabum.com.br/produto/${productId}`,
        responseType: 'arraybuffer',
        responseEncoding: 'binary'
      });

    const dom = new JSDOM(response.data);
    //Get the product name
    const productName = dom.window.document.querySelector(".titulo_det").textContent;

    //Get discount price
    const discountPrice = (dom.window.document.querySelector(".preco_desconto").textContent).replace(/[^\d\,]/g, "");

    //Get the normal price
    const normalPrice = (dom.window.document.querySelector(".preco_normal").textContent).replace(/[^\d\,]/g, "");

    //Get the sections
    const sections = (dom.window.document.querySelectorAll(".links_det li"));

    const sectionArray = Array.from(sections);
    const jsonReturn = {

      "name": productName,
      "discountPrice": discountPrice,
      "normalPrice": normalPrice,
      "sections": sections
    }

    // return JSON.stringify(jsonReturn);
    return sectionArray;


    
}