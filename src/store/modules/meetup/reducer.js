/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  title: null,
  description: null,
  date: null,
  location: null,
  user_id: null,
  file_id: null,
};

export default function meetup(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/MEETUP_REQUEST': {
        // eslint-disable-next-line no-param-reassign
        draft.title = action.payload.title;
        draft.description = action.payload.description;
        draft.date = action.payload.date;
        draft.location = action.payload.location;
        draft.user_id = action.payload.user_id;
        draft.file_id = action.payload.file_id;
        break;
      }

      case '@meetup/MEETUP_DELETE': {
        // eslint-disable-next-line no-param-reassign
        draft.id = action.payload.id;

        break;
      }

      default:
    }
  });
}
