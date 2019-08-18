import React, { useState, useEffect } from 'react';

import { MdAddCircle, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const dados = response.data.map(dado => {
        return {
          title: dado.title,
        };
      });

      setMeetup(dados);
    }
    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="button">
          <MdAddCircle size={14} color="#fff" />
          <strong>Novo meetup</strong>
        </button>
      </header>

      <ul>
        {meetup.map(dado => (
          <Meetup>
            <h4>{dado.title}</h4>
            <span>24 de Junho, às 20h</span>
            <a>
              <MdChevronRight color="fff" size={20} />
            </a>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
