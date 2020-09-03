import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  min-width: 300px;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow:  20px 20px 50px #d9d9d9, 
              -20px -20px 50px #ffffff;
  transition: all 0.25s;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  
  #productRate{
    margin-top: 8px;
    padding: 0;
  }

`;

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0px 8px;
  img {
    width: 160px;
  }
`;

export const ProductInfo = styled.div`
  padding-top: 32px;
  h1 {
    font-size: 21px;
  }

  > span {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 16px;

    h2 {
      font-weight: 700;
    }

    h5 {
      text-decoration: line-through;
    }
  }

  h4 {
    color: #F27A54;
    font-weight: 600;
    text-transform: uppercase;
  }

`;