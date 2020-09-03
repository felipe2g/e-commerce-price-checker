import styled from 'styled-components';
import { shade } from 'polished';

import { TagType } from './Tag';

export const Container = styled.div<TagType>`
  --bg-color: ${(props) => props.bgColor};
  --bg-color-hover: ${(props) => shade('0.1', String(props.bgColor))};
  --text-color: ${(props) => props.textColor};

  display: flex;

  background-color: var(--bg-color);
  color: var(--text-color);

  border-radius: 8px;
  padding: 0px 2px;
  margin-bottom: 32px;

  transition: 0.4s all;

  :hover{
    background-color: var(--bg-color-hover);
  }

  span {
    font-size: 12px;
    margin: 4px;
  }
`;