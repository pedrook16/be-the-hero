import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { getStorage, clearStorage } from '~/utils/sessionStorage';
import { formatPrice } from '~/utils/format';

import api from '~/services/api';

import { Container, Header, Logo, ButtonBack, List, ListItem } from './styles';

export default function Profile() {
  const { OngName, OngId } = getStorage();
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadIncidents() {
      const response = await api.get('profile', {
        headers: { authentication: OngId },
      });

      const data = response.data.map(item => ({
        ...item,
        formatted: formatPrice(item.value),
      }));
      setIncidents(data);
    }
    loadIncidents();
  }, [OngId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: { authentication: OngId },
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
      toast.success('Incident successfully delected');
    } catch (err) {
      toast.error('Varify info');
    }
  }

  function handleLogout() {
    clearStorage();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <Logo />
        <span>Welcome, {OngName}</span>

        <ButtonBack>Register new case</ButtonBack>

        <button type="button" onClick={() => handleLogout()}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Cases registered</h1>

      <List>
        {incidents.map(item => (
          <ListItem key={item.id}>
            <strong>Case: </strong>
            <p>{item.title}</p>

            <strong>Descrição:</strong>
            <p>{item.description}</p>

            <strong>Valor:</strong>
            <p>{item.formatted}</p>

            <button type="button">
              <FiTrash2
                size={20}
                color="#FFF"
                onClick={() => handleDeleteIncident(item.id)}
              />
            </button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
