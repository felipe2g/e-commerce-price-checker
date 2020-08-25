import styled from 'styled-components'

export const Container = styled.div`
  width: 330px;
  height: 400px;
  border-radius: 6px;
  /* background-color: #3C444D; */
  background-color: #FFF;
  transition: all 0.25s;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 16px 0px 16px;
  padding-top: 8px;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  img {
    width: 270px;
  }
`;

export const ProductInfo = styled.div`

h1 {
  font-size: 26px;
}

`;