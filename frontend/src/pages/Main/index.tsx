import React from 'react';

import ProductCard from '../../components/ProductCard/index';

import { ProductBoard, Form } from './styles';

const Main: React.FC = () => (
  <>
    <h1>Hello World!</h1>
    <Form 
        hasError={!!inputError}
        // onSubmit={handleAddRepository}
        >
          <input
            // value= {newRepo}
            // onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Digite o nome do repositório"
          />
          <button type="submit">Pesquisar</button>
        </Form>
      <ProductBoard>
      <ProductCard disponibility={false} imgUrl="https://images5.kabum.com.br/produtos/fotos/94555/94555_1516707116_index_gg.jpg" description="Mouse Gamer Redragon 10000DPI Chroma Cobra M711"/>
      {/* <ProductCard disponibility={true}/> */}
    </ProductBoard>
  </>
);

export default Main;