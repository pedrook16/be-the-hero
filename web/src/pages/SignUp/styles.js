import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '~/assets/logo.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 100%;
  padding: 96px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
    color: #fff;
  }

  p {
    font-size: 18px;
    color: #fff;
    line-height: 32px;
  }
`;
export const Logo = styled.img.attrs({
  src: logoImg,
})``;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }

  div {
    display: flex;

    input {
      :first-child {
        margin-right: 8px;
      }
    }
  }
`;

export const BackLink = styled(Link).attrs({
  to: '/',
})`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
