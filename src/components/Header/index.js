import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.jpg';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            {' '}
            <img src={logo} alt="Meetup" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
          </Profile>
          <button type="button" onClick={handleSignOut}>
            {' '}
            Sair{' '}
          </button>
        </aside>
      </Content>
    </Container>
  );
}
