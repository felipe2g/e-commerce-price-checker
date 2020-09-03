import React from 'react';

import { Board } from './styles';

import ProductCard from '../ProductCard/index';

const ProductBoard: React.FC = () => {
  return (
    <Board>
      <ProductCard 
      disponibility={false} 
      imgUrl="https://images5.kabum.com.br/produtos/fotos/94555/94555_1516707116_index_gg.jpg" 
      description="Mouse Gamer Redragon 10000DPI Chroma Cobra M711"/>
    </Board>
  );
};

export default ProductBoard;