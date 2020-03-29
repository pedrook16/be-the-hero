import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import logoImg from '~/assets/logo.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
    color: #fff;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    color: #fff;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 4px;
    border: 1px solid #999;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #666;
    }
  }
`;
export const Logo = styled.img.attrs({
  src: logoImg,
})`
  height: 64px;
`;

export const ButtonBack = styled(Link).attrs({
  to: '/incidents/new',
})`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;

  &:hover {
    background: ${darken(0.03, '#e02041')};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;
export const ListItem = styled.li`
  background: #666;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #fff;
  }

  p + strong {
    margin-top: 32px;
  }

  p {
    color: #ddd;
    line-height: 21px;
    font-size: 16px;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.8;
    }
  }
`;
