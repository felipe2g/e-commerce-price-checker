const fetch = require("node-fetch");
const cheerio = require("cheerio");
const pup = require("puppeteer");

class Terabyte {
  
  async getProduct(id){const browser = await pup.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(`https://www.terabyteshop.com.br/produto/${id}/lorem-ipsum`);

  const result = await page.evaluate(()=> {
    const code = document.getElementById('partnumber').innerText;
    const description = document.getElementsByClassName('tit-prod')[0].innerText;
    const discountPrice = document.getElementById('valVista').innerText.replace(/R\$ /g, "");
    const fullPrice = document.querySelector(".pull-left #valParc").innerText.replace(/R\$ /g, "");
    const sucess = true;

    return {
      code,
      description,
      discountPrice,
      fullPrice,
      sucess
    };
  })

  await browser.close()

  return result
  }
}
module.exports = Terabyte;