/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = { profile: null };

export default function user(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.profile = action.payload.user;
        break;
      }

      case '@user/UPDATE_PROFILE_SUCCESS': {
        // eslint-disable-next-line no-param-reassign
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        // eslint-disable-next-line no-param-reassign

        draft.profile = null;
        break;
      }

      default:
    }
  });
}
