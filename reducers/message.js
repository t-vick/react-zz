/**
 * DiGiHealth
 */

import { GET_ALL_MESSAGE } from '../actions/message';

const initialState = {
  mail: 0,
  info: 0
};

export default function message(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MESSAGE:
      return Object.assign({}, state, action.message);
    default:
      return state;
  }
}
