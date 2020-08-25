import { } from 'react';
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps{
  hasError: boolean;
}

export const ProductBoard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #FFF;
    border-right: 0px;
    ${(props) => props.hasError && 
    css`
    border-color: #c53030;
    `}
    &::placeholder{
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #FFF;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;