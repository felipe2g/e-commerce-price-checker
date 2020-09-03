import React from 'react';

import InputWithSearchButton from '../../components/InputWithSearchButton/index';
import ProductBoard from '../../components/ProductBoard/index';

import Tag from '../../components/Tag/index';

const Main: React.FC = () => (
  <>
      <InputWithSearchButton hasError={false}/>
      <ProductBoard />
  </>
);

export default Main;