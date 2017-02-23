/**
 * DiGiHealth
 */

import { combineReducers } from 'redux';
import { GET_INTRAOPERATIVE_RECORD } from '../actions/intraoperativeRecord';

function surgeries(state = [], action) {
  switch (action.type) {
    case GET_INTRAOPERATIVE_RECORD:
      console.log(action.surgeries);
      return action.surgeries;
    default:
      return state;
  }
}

export default combineReducers({
  surgeries
});
