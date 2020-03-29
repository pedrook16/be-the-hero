import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;

  &:hover {
    background: ${darken(0.03, '#e02041')};
  }
`;
