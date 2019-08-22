import React from 'react';
import { useDispatch } from 'react-redux';
import { MdAddCircle } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { meetupRequest } from '~/store/modules/meetup/actions';
import BannerInput from './Banner';

export default function Novo() {
  const dispatch = useDispatch();

  // eslint-disable-next-line camelcase
  function handleSubmit({ title, description, date, location, file }) {
    dispatch(meetupRequest(title, description, date, location, file));
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="file" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" />
        <Input
          name="date"
          placeholder="Data do Meetup (no padrão 2019-08-18T19:00:00-03:00)"
        />
        <Input name="location" placeholder="Location do Meetup" />

        <button type="submit">
          <MdAddCircle size={16} color="#fff" /> Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
