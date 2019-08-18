import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Perfil() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" placeholder="Seu email" />
        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha antiga"
        />
        <Input name="paassword" type="password" placeholder="Sua senha nova" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit"> Atualizar Perfil</button>
      </Form>
    </Container>
  );
}
