import styled from 'styled-components';

export const Board = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 36px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;