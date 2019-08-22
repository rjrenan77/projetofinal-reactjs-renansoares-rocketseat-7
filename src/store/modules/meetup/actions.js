// eslint-disable-next-line camelcase
export function meetupRequest(title, description, date, location) {
  return {
    type: '@meeetup/MEETUP_REQUEST',
    // test mock
    payload: { title, description, date, location, user_id: 4, file_id: 10 },
  };
}

export function meetupDelete(id) {
  return {
    type: '@meeetup/MEETUP_DELETE',
    payload: { id },
  };
}
