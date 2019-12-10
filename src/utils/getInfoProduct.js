require('dotenv/config');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

module.exports = async function(productId) {

    const { window } = await JSDOM.fromURL(`https://www.kabum.com.br/produto/${productId}`, {
      runScripts: 'dangerously',
      scripts: [
        'setup.js'
    ]
  });
    
    const { dataLayer } = window;
    return JSON.stringify(dataLayer);
}