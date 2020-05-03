###Produtos

Todos os JSON desenvolvidos como retorno de produtos devem ter a mesma estrutura de modo a facilitar a integração nos controllers de comparação.

Abaixo segue a estrutura necessária:

| Field | Type | Required | content |
|------------|------------|------------|
| description | string | **yes**  | Nome do produto no site. |
| code | string  | **yes** | Código do fabricante do produto.|
| discountPrice | number  | **yes** | Preço do produto à vista. |
| fullPrice | number | **yes** | Preço do produto à prazo.|
| photos | string| no | Foto(s) do produto. |
| sucess | boolean | **yes** | Validação do retorno da requisição. |

###Resultado de buscas

