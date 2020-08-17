import pup, {} from "puppeteer";

class Terabyte {
  public async execute(id: string): Promise<any>{
    
  const browser = await pup.launch({
    headless: true,
    defaultViewport: null, 
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  await page.goto(`https://www.terabyteshop.com.br/produto/${id}/lorem-ipsum`);

  const result = await page.evaluate(() => {
    const code = (document.getElementById("partnumber") as HTMLElement).innerText;
    const disponibility = null;
    const description = (document.getElementsByClassName("tit-prod")[0]as HTMLElement).innerText;
    const discountPrice = (document.getElementById("valVista") as HTMLElement).innerText.replace(/R\$ /g, "");
    const fullPrice = (document.querySelector(".pull-left #valParc") as HTMLElement).innerText.replace(/R\$ /g, "");
    const photos = null;
    const sucess = true;

    return {
      code,
      disponibility,
      description,
      discountPrice,
      fullPrice,
      photos,
      sucess
    }

  })

  await browser.close();

  return result;
  }
}

export default Terabyte;