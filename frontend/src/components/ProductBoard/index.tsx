import React from 'react';

import { Board } from './styles';

import ProductCard from '../ProductCard/index';

const ProductBoard: React.FC = () => {
  return (
    <Board>
      <ProductCard
        productId="1"
        category="Hardware"
        disponibility={false} 
        imgUrl="https://images5.kabum.com.br/produtos/fotos/94555/94555_1516707116_index_gg.jpg" 
        description="Mouse Gamer Redragon 10000DPI Chroma Cobra M711"
        productPrice="R$150,00"
        oldPrice="R$200,00" 
      />
      <ProductCard
        productId="2"
        category="Telefonia"
        disponibility={true} 
        imgUrl="https://images5.kabum.com.br/produtos/fotos/104735/iphone-11-branco-64gb-mwlu2_iphone-11-branco-64gb-mwlu2_1569854102_gg.jpg" 
        description="iPhone 11 Branco, 64GB - MWLU2"
        productPrice="R$4599,00"
        oldPrice="R$5000,00"
      />
    </Board>
  );
};

export default ProductBoard;