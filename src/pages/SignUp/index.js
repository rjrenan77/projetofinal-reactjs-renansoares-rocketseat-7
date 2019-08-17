import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.jpg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres!')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="MeetUp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome" />

        <Input name="email" type="email" placeholder="email" />

        <Input name="password" type="password" placeholder="senha" />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
