import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowDownLeft } from 'react-icons/fi';
import ButtonSubmit from '~/components/SubmitButton';

import { getStorage } from '~/utils/sessionStorage';

import api from '~/services/api';

import { Container, Content, Section, Form, Logo, BackLink } from './styles';

export default function NewIncidents() {
  const { OngId } = getStorage();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  async function handleSubmit() {
    try {
      api.post(
        'incidents',
        { title, description, value },
        { headers: { authentication: OngId } }
      );
      history.push('/profile');
      toast.success('Incident successfully registed');
    } catch (err) {
      toast.error('Varify info');
    }
  }

  return (
    <Container>
      <Content>
        <Section>
          <Logo />
          <h1>Register new case</h1>
          <p>Describe the case in detail to find a hero to solve that</p>
          <BackLink>
            <FiArrowDownLeft size={16} color="#e02041" />
            back for home
          </BackLink>
        </Section>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title of case"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Value in Dólar"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <ButtonSubmit type="submit">Register</ButtonSubmit>
        </Form>
      </Content>
    </Container>
  );
}
