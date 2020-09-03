import React from 'react';

import { Form } from './styles';

interface InputWithSearchButtonProps{
    hasError: boolean;
  }

const InputWithSearchButton: React.FC<InputWithSearchButtonProps> = (props) => {
  return (
    <Form 
      hasError={props.hasError}
      // onSubmit={handleAddRepository}
    >
      <input
        // value= {newRepo}
        // onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o produto"
      />
      <button type="submit">Economizar</button>
    </Form>
  );
};

export default InputWithSearchButton;