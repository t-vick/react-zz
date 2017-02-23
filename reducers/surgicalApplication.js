/**
 * DiGiHealth
 */

import { combineReducers } from 'redux';
import {
  GET_SURGICAL_APPLICATION_SURGERY,
  GET_SURGICAL_APPLICATION_PAGINATION,
  SURGICAL_TOGGLE_SELECT,
  SURGICAL_SELECT_ALL,
  SURGICAL_PAGINATION_CHANGE
} from '../actions/surgicalApplication';

function surgery(state = [], action) {
  switch (action.type) {
    case GET_SURGICAL_APPLICATION_SURGERY:
      return action.surgery;
    case SURGICAL_TOGGLE_SELECT:
      return state.map(surgery =>
        surgery.id === action.id ?
          Object.assign({}, surgery, { select: !surgery.select }) :
          surgery
      );
    case SURGICAL_SELECT_ALL:
      const allSelect = state.every(surgery => surgery.select);
      return state.map(surgery =>
        Object.assign({}, surgery, { select: !allSelect })
      );
    default:
      return state;
  }
}

function pagination(state = { page: 0, pages: 0 }, action) {
  switch (action.type) {
    case GET_SURGICAL_APPLICATION_PAGINATION:
      return action.pagination;
    case SURGICAL_PAGINATION_CHANGE:
      return Object.assign({}, state, {
        page: action.page
      });
    default:
      return state;
  }
}

export default combineReducers({
  surgery,
  pagination
});
