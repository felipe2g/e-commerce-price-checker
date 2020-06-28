const fetch = require("node-fetch");
const cheerio = require("cheerio");

class Terabyte {
  
  async getProduct(id){

    fetch(`https://www.terabyteshop.com.br/produto/${id}/a`, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        if(response.status === 200) {
          const sucess = true;
          const html = response.data;
          var $ = cheerio.load(html, {xmlMode: true});
          
          let re1 = /(<script type="application\/ld\+json">)[\s\S]*?(<\/script>)/g;
          let re2 = /({)[\s\S]*(})/g;
        
          const string = ($("head").html()).replace(/@/g, "");
          // const priceProduct = ($("#valParc"))[1].children[0].data.replace(/R\$ /g, "").replace(",", ".");
        
          const scripts = (string.match(re1));
        
          const selectedProduct = JSON.parse(((scripts[0].match(re2))));
        
          const product = {
            description: selectedProduct.name,
            code: selectedProduct.mpn,
            discountPrice: Number(selectedProduct.offers.price),
            // fullPrice: Number(priceProduct),
            photos: selectedProduct.image,
            sucess
          };
        
          return product;
        }
      });
  }
}
module.exports = Terabyte;