import axios from 'axios';

interface ProductsResponse {
  codigo: number;
  nome: string;
  caminho: string;
  imagem: string;
  avaliacao_count: number;
  avaliacao_nota: number;
  nome_fabricante: string;
  url_descricao: string;
}

interface Response {
  produtos: ProductsResponse[];
  sucesso: boolean;
  mensagem: string;
}

class GetProductsSugestionKabum {
  public async execute(searchTerm: string): Promise<Response>{
    try{
      const sugestionProduct = await axios.get(`https://servicespub.prod.api.aws.grupokabum.com.br/listagem/v1/autocomplete?string=${searchTerm}`);
      return sugestionProduct.data;
    } catch(e) {
      console.error("error" + e);
      throw new Error('Internal Server Error');
    }

  }
}

export default GetProductsSugestionKabum;