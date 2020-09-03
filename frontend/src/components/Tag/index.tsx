import React from 'react';
import emoji from 'react-easy-emoji';

import { Container } from './styles';

import { TagType } from './Tag';

const Tag: React.FC<TagType> = (props) => {
return (
  <Container {...props}>
    <span>{emoji(props.icon)}</span>
    <span>{props.message}</span>
  </Container>
  );
};

export default Tag;
