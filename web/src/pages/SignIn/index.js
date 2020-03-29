import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import ButtonSubmit from '~/components/SubmitButton';

import { setStorage } from '~/utils/sessionStorage';

import api from '~/services/api';

import {
  Container,
  Content,
  Form,
  Logo,
  LiknSignUp,
  ImageHero,
} from './styles';

export default function SignIn() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('session', { id });
      const { name } = response.data;
      setStorage(id, name);
      history.push('/profile');
      toast.success(`Welcome ${response.data.name}`);
    } catch (erro) {
      toast.error('Login failed, check your data.');
    }
  }

  return (
    <Container>
      <Content>
        <Logo />

        <Form onSubmit={handleSubmit}>
          <h1>Log in</h1>

          <input
            placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <ButtonSubmit type="submit">Log in</ButtonSubmit>
        </Form>

        <LiknSignUp>
          <FiLogIn size={16} color="#e02041" />I don't have an account
        </LiknSignUp>
      </Content>

      <ImageHero />
    </Container>
  );
}
