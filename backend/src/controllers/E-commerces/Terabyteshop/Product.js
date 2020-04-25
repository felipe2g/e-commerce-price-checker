const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
  async show(req, res) {
    const productId = req.params.id;

    axios.get(`https://www.terabyteshop.com.br/produto/${productId}/a`)
      .then((response) => {
        if(response.status === 200) {
          const html = response.data;
          var $ = cheerio.load(html, {xmlMode: true});
          
          let re1 = /(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/g;
          let re2 = /({)[\s\S]*(})/g;

          const string = $("head").html();

          const scripts = string.match(re1);

          const selectedProduct = (scripts[0].match(re2));

          res.send(JSON.stringify(selectedProduct));

          // const productInfo = JSON.parse(string.match(re));

          // res.send(productInfo);

        }
      });
  }
};