import React, { useState, useEffect } from 'react';
import {
  MdPlace,
  MdPermContactCalendar,
  MdModeEdit,
  MdDelete,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import logo from '~/assets/banner.jpg';
import { Container } from './styles';
import api from '~/services/api';
import { meetupDelete } from '~/store/modules/meetup/actions';

export default function Detalhes() {
  const dispatch = useDispatch();

  const [meetupSelected, setMeetupSelected] = useState([]);
  const id = window.location.search.replace('?id=', '');
  console.log(id);

  function handleDelete() {
    dispatch(meetupDelete(id));
  }

  useEffect(() => {
    async function loadMeetupSelected() {
      const response = await api.get(`meetups/${id}`);

      console.log(response.data);

      const dados = response.data;

      setMeetupSelected(dados);
    }
    loadMeetupSelected();
  }, []);

  return (
    <Container>
      <header>
        <h1>{meetupSelected.title}</h1>
        <div className="button1">
          <Link to="/novo">
            <button type="button">
              <MdModeEdit size={16} color="#fff" /> Editar
            </button>
          </Link>
        </div>
        <div className="button2">
          <button type="button" onClick={handleDelete}>
            <MdDelete size={16} color="#fff" /> Cancelar
          </button>
        </div>
      </header>
      <img src={logo} alt="" />
      <h4>{meetupSelected.description}</h4>
      <h3>
        <MdPermContactCalendar size={16} color="#fff" />{' '}
        {format(meetupSelected.date, 'D [de] MMMM, [às] H[h]', { locale: pt })}
      </h3>
      <h3>
        {' '}
        <MdPlace size={16} color="#fff" /> {meetupSelected.location}
      </h3>
    </Container>
  );
}
