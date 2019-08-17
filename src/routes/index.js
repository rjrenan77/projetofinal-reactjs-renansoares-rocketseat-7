import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import DashBoard from '../pages/Dashboard';
import Detalhes from '../pages/Detalhes';
import Editar from '../pages/Editar';
import Perfil from '../pages/Perfil';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={DashBoard} isPrivate />

      <Route path="/details" component={Detalhes} isPrivate />

      <Route path="/edit" component={Editar} isPrivate />

      <Route path="/profile" component={Perfil} isPrivate />
    </Switch>
  );
}
