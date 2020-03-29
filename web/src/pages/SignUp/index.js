import React, { useState } from 'react';
import { FiArrowDownLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonSubmit from '~/components/SubmitButton';

import api from '~/services/api';

import { Container, Content, Section, Form, Logo, BackLink } from './styles';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/ongs', {
        name,
        email,
        whatsapp,
        city,
        uf,
      });

      toast.success(`Your access ID: ${response.data.id}`);
      history.push('/');

      setName('');
      setEmail('');
      setWhatsapp('');
      setCity('');
      setUf('');
    } catch (erro) {
      toast.error('Varify info');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Logo />
          <h1>Register</h1>
          <p>
            Register, enter the platform and help people find the cases of yours
            ONGs.
          </p>
          <BackLink>
            <FiArrowDownLeft size={16} color="#e02041" />I have an account
          </BackLink>
        </Section>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Form>
      </Content>
    </Container>
  );
}
