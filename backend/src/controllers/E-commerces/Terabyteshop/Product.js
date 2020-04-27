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
          let re3 = /([0-9])/;

          const string = $("head").html();
          // const priceProduct = ($("#valParc").html()).match(re3);

          // console.log(priceProduct);

          const scripts = string.match(re1);

          const selectedProduct = JSON.parse((scripts[0].match(re2)));

          delete selectedProduct.brand;
          delete selectedProduct.sku;
          delete selectedProduct.description;
          delete selectedProduct.review;
          
          // selectedProduct.fullPrice = priceProduct;

          // res.send(selectedProduct);

        }
      });
  }
};