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

    let promotion = false

    const dom = new JSDOM(response.data, { includeNodeLocations: true });
    //Get the product name
    const productName = dom.window.document.querySelector(".titulo_det").textContent;


    let discountPrice = (dom.window.document.querySelector(".preco_desconto"));
    let normalPrice = (dom.window.document.querySelector(".preco_normal"));

    console.log("discountprice " + discountPrice)
    console.log("normalPrice " + normalPrice)
    console.log(!promotion)
    

    if(!discountPrice && !normalPrice) {
      discountPrice = (dom.window.document.querySelector(".preco_desconto-cm").textContent).replace(/[^\d\,]/g, "");
      normalPrice = (dom.window.document.querySelector(".preco_desconto_avista-cm").textContent).replace(/[^\d\,]/g, "");
      promotion = true;
    } else {
      discountPrice = (discountPrice.textContent).replace(/[^\d\,]/g, "");
      normalPrice = (normalPrice.textContent).replace(/[^\d\,]/g, "");
    }

    console.log(!promotion)

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

  if(!promotion) {
    const jsonReturn = {
      "sections": sections.filter(onlyUnique),
      productId,
      productName,
      discountPrice,
      normalPrice,
    }
    return JSON.stringify(jsonReturn);
   }else {
    const jsonReturn = {
      "sections": sections.filter(onlyUnique),
      productId,
      productName,
      discountPrice,
      normalPrice,
      promotion,
    }
    return JSON.stringify(jsonReturn);
  }
}