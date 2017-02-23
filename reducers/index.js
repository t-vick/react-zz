/**
 * DiGiHealth
 */

import { combineReducers } from 'redux';
import message from './message';
import surgicalApplication from './surgicalApplication';
import preoperativeVisit from './preoperativeVisit';
import intraoperativeRecord from './intraoperativeRecord';

export default combineReducers({
  message,
  surgicalApplication,
  preoperativeVisit,
  intraoperativeRecord
});
