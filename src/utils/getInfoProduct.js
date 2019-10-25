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
    const sectionsHtml = dom.window.document.querySelectorAll(".links_det li");

    const sectionArray = Array.from(sectionsHtml);

    let sections = [];

    for (var i = 0; i < sectionArray.length; i++){  
      sections.push(((sectionArray[i].textContent).replace(">", "")).trim());
    }

  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }

    const jsonReturn = {
      "name": productName,
      "discountPrice": discountPrice,
      "normalPrice": normalPrice,
      "sections": sections.filter(onlyUnique)
    }

    return JSON.stringify(jsonReturn);

}

