import pup from "puppeteer";

class Terabyte {
  public async execute(id: string): Promise<any>{
    
  const browser = await pup.launch({
    headless: false,
    defaultViewport: null, 
    args: ['--start-maximized']
  });

  const page = await browser.newPage();
  await page.goto(`https://www.terabyteshop.com.br/produto/${id}/lorem-ipsum`);

  // await page.waitForNavigation();

  const result = await page.evaluate((document)=> {

    const code = document.getElementById("partnumber").innerText;
    const description = document.getElementsByClassName("tit-prod")[0].innerText;
    const discountPrice = document.getElementById("valVista").innerText.replace(/R\$ /g, "");
    const fullPrice = document.querySelector(".pull-left #valParc").innerText.replace(/R\$ /g, "");
    const sucess = true;

    return {
      code,
      description,
      discountPrice,
      fullPrice,
      sucess
    };
  });

  await browser.close();

  return result;
  }
}

export default Terabyte;