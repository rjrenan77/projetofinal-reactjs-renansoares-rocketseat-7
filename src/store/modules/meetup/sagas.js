import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

export function* meetupCadastra({ payload }) {
  try {
    // eslint-disable-next-line camelcase
    const { title, description, date, location, file_id, user_id } = payload;

    yield call(api.post, 'meetups', {
      title,
      description,
      date,
      location,
      file_id,
      user_id,
    });

    toast.success('Meetp cadastrado com sucesso');
  } catch (err) {
    toast.error('Falaha no cadastro!');
  }
}

export function* meetupDelete({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`, {});

    toast.success('Meetup deletado com sucesso');

    history.push('dashboard');
  } catch (err) {
    toast.error('Falha no processo!');
  }
}

export default all([
  takeLatest('@meeetup/MEETUP_REQUEST', meetupCadastra),
  takeLatest('@meeetup/MEETUP_DELETE', meetupDelete),
]);
