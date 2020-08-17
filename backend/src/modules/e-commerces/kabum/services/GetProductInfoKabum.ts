import axios from 'axios';

interface Response {
  description: string;
  disponibility: string;
  code: string;
  discountPrice: string;
  fullPrice: string;
  photos: [];
  sucess: boolean;
}

class GetProductInfoKabum {
  public async execute(id: string): Promise<Response>{
    const productInfo = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/descricao/v1/descricao/produto/${id}`);

    const selectedProduct = productInfo.data;

    const code = String(productInfo.data.nome).split("-");
    const productCode = code[code.length-1].trim();

    const product = {
      description: selectedProduct.nome,
      disponibility: selectedProduct.disponibilidade,
      code: productCode,
      discountPrice: selectedProduct.preco_desconto,
      fullPrice: selectedProduct.preco,
      photos: selectedProduct.fotos,
      sucess: true
    };

    return product;
  }
}

export default GetProductInfoKabum;