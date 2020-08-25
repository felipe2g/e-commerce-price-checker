import pup from "puppeteer";

interface List {
  products: Product[];
}

interface Product {
  name: string;
  fullPrice: [number, number];
  discountPrice: [number];
  disponibility: boolean;
}

class Pichau {
  public async execute(term: string): Promise<any>{
    
  const browser = await pup.launch({
    headless: true,
    defaultViewport: null, 
    args: ['--start-maximized']
  });

  const page = await browser.newPage();

  await page.goto(`https://www.pichau.com.br/catalogsearch/result/?q=${term}&product_list_limit=48`);

  await page.waitFor('div.results > div.products-grid > ol.product-items > li');

  const result = await page.evaluate(() => {
    const products = (document.querySelectorAll("div.results > div.products-grid > ol.product-items > li")) as NodeList;

    products.forEach(product => {
      console.log(
        ((product as Document).querySelector("div > div > strong > a") as HTMLElement).innerText
        );
    })

    console.log(products);
    return null;

  })
  
  
  await browser.close();

  // return result;
  return null;
  }
}

export default Pichau;