import React, { AllHTMLAttributes } from 'react';
import { RatingStar } from 'rating-star';

import Tag from '../Tag/index';

import { Container, TopCard, ProductImage, ProductInfo } from './styles';

interface  ProductCardProps extends AllHTMLAttributes<HTMLDivElement> {
  productId: string;
  disponibility: boolean;
  imgUrl: string;
  description: string;
  productPrice: string;
  oldPrice: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ disponibility, imgUrl, description, productPrice, productId, category, oldPrice}) => {

  const formatedDescription = (description.length > 28) ? `${description.slice(0, 28)}...` : description;

  const formatedProductInfo = {
    description: formatedDescription
  }

  const [rating, setRating] = React.useState(0);

  const onRatingChange = (score: number) => {
    setRating(score);
    console.log(score);
  };

return(
  <>
  <Container>
      <TopCard>
        {disponibility ? 
          <Tag icon="😍" message="Disponível" bgColor="#3FF54E"/>:
          <Tag icon="😭" message="Indisponível" bgColor="#FA0705" textColor="#FFF"/>}
      </TopCard>
      <ProductImage>
        <img src={imgUrl} alt={description} />
      </ProductImage>
      <ProductInfo>
        <h4>{category}</h4>
        <h1>{formatedProductInfo.description}</h1>
        <RatingStar
          clickable
          maxScore={5}
          id={productId}
          rating={rating}
          onRatingChange={onRatingChange}
        />
        <span><h5>{oldPrice}</h5><h2>{productPrice}</h2></span>
      </ProductInfo>
  </Container>
  </>
)
};

export default ProductCard;