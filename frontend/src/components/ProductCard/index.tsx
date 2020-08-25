import React, { AllHTMLAttributes, useState, useCallback } from 'react';
import { FiX, FiCheck, FiMoreHorizontal } from 'react-icons/fi'
import { RatingStar } from "rating-star";

import { Container, TopCard, ProductImage, ProductInfo } from './styles';

interface  ProductCardProps extends AllHTMLAttributes<HTMLDivElement> {
  disponibility: boolean;
  imgUrl: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ disponibility, imgUrl, description }) => {

  const formatedDescription = (description.length > 23) ? `${description.slice(0, 23)}...` : description;

  const formatedProductInfo = {
    description: formatedDescription
  }

  const [rating, setRating] = React.useState(0);

  const onRatingChange = (score: number) => {
    setRating(score);
    console.log(score);
  };

return(
  <Container>
      <TopCard>
        {disponibility ? <FiX size={40} color="#CF6F8A"/> :  <FiCheck size={40} color="#6FCF97"/>}
        <FiMoreHorizontal size={40} color="#CBCFD4"/>
      </TopCard>
      <ProductImage>
        <img src={imgUrl} alt={description} />
      </ProductImage>
      <ProductInfo>
        <h1>{formatedProductInfo.description}</h1>
        <RatingStar
        clickable
        maxScore={5}
        id="productRate"
        rating={rating}
        onRatingChange={onRatingChange}
        />
      </ProductInfo>
  </Container>
)
};

export default ProductCard;