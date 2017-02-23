/**
 * DiGiHealth
 */

import { combineReducers } from 'redux';
import { GET_PREOPERATIVE_VISIT } from '../actions/preoperativeVisit';

function patients(state = [], action) {
  switch (action.type) {
    case GET_PREOPERATIVE_VISIT:
      return action.patients;
    default:
      return state;
  }
}

export default combineReducers({
  patients
});
