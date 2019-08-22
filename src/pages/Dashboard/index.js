import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import { MdAddCircle, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';
import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      console.log(response.data);

      const dados = response.data.map(dado => {
        return {
          id: dado.id,
          title: dado.title,
          date: format(dado.date, 'D [de] MMMM, [às] H[h]', { locale: pt }),
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
        <Link to="/novo">
          <button type="button">
            <MdAddCircle size={14} color="#fff" />
            <strong>Novo meetup</strong>
          </button>
        </Link>
      </header>

      <ul>
        {meetup.map(dado => (
          <Meetup>
            <h4>{dado.title}</h4>
            <span>{dado.date}</span>
            <Link to={{ pathname: '/details', search: `?id=${dado.id}` }}>
              <MdChevronRight color="fff" size={20} />
            </Link>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
