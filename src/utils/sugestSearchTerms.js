const jsdom = require('jsdom');
const {JSDOM} = jsdom;

module.exports = async function(term) {
    // const dom = await JSDOM.fromURL(`https://www.kabum.com.br/cgi-local/site/busca/autocomplete.cgi?string=${term}`, { includeNodeLocations: true });

    // console.log(dom.window.document.querySelector("img").getAttribute('src');

    // return JSON.stringify(dom.window)

    JSDOM.fromURL(`https://www.kabum.com.br/cgi-local/site/busca/autocomplete.cgi?string=${term}`).then(dom => {
    
        // console.log(dom.serialize())
        // return dom.serialize();

        let table = dom.window.document.querySelectorAll('#table2 td')[2].getAttribute('href');

        console.log(table)

    });
}