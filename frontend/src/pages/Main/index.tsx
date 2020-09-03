import React from 'react';

import InputWithSearchButton from '../../components/InputWithSearchButton/index';
import ProductBoard from '../../components/ProductBoard/index';

const Main: React.FC = () => (
  <>
      <InputWithSearchButton hasError={false}/>
      <ProductBoard />
  </>
);

export default Main;