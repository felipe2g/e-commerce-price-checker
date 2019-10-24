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
    const productName = dom.window.document.querySelector(".titulo_det").textContent;
    const discountPrice = (dom.window.document.querySelector(".preco_desconto").textContent).replace(/[^\d\,]/g, "");
    const normalPrice = (dom.window.document.querySelector(".preco_normal").textContent).replace(/[^\d\,]/g, "");
    // const sections = (dom.window.document.querySelector(".links_det").textContent).replace(/[^\wÀ-ú^\>]/g, "");
    const sections = (dom.window.document.querySelector(".links_det").textContent).replace(/\s+/g, "");
    return sections;

}