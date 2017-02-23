/**
 * DiGiHealth
 */

import { GET_ALL_MESSAGE } from './message';

export const GET_SURGICAL_APPLICATION_SURGERY = 'GET_SURGICAL_APPLICATION_SURGERY';

export function loadData() {
  return (dispatch, getState) => {
    const data = {
      message: {
        mail: 20,
        info: 10
      },
      surgicalApplication: {
        surgery: [
          { id: 1, reservation: 123456, name: '张三', sex: '男', age: 20, sections: '心外科', ward: '10病区', bedId: '1', type: '紧急手术', surgery: '阑尾切割术', doctor: '张三', hocus: '华佗', date: '2015/01/01', select: false },
          { id: 2, reservation: 123456, name: '李四', sex: '男', age: 20, sections: '心外科', ward: '11病区', bedId: '2', type: '普通手术', surgery: '阑尾切割术', doctor: '张三', hocus: '华佗', date: '2015/01/01', select: false },
          { id: 3, reservation: 123456, name: '王五', sex: '男', age: 20, sections: '心外科', ward: '12病区', bedId: '13', type: '普通手术', surgery: '阑尾切割术', doctor: '张三', hocus: '华佗', date: '2015/01/01', select: false },
          { id: 4, reservation: 123456, name: '四七', sex: '男', age: 20, sections: '心外科', ward: '13病区', bedId: '43', type: '紧急手术', surgery: '阑尾切割术', doctor: '张三', hocus: '华佗', date: '2015/01/01', select: false },
          { id: 5, reservation: 123456, name: '钱八', sex: '男', age: 20, sections: '心外科', ward: '14病区', bedId: '5', type: '紧急手术', surgery: '阑尾切割术', doctor: '张三', hocus: '华佗', date: '2015/01/01', select: false }
        ],
        pagination: {
          page: 1,
          pages: 20
        }
      }
    };

    dispatch({
      type: GET_SURGICAL_APPLICATION_SURGERY,
      surgery: data.surgicalApplication.surgery
    });
    dispatch({
      type: GET_SURGICAL_APPLICATION_PAGINATION,
      pagination: data.surgicalApplication.pagination
    });
    dispatch({
      type: GET_ALL_MESSAGE,
      message: data.message
    });
  }
}

export const SURGICAL_TOGGLE_SELECT = 'SURGICAL_TOGGLE_SELECT';

export function select(id) {
  return {
    type: SURGICAL_TOGGLE_SELECT,
    id
  };
}

export const SURGICAL_SELECT_ALL = 'SURGICAL_SELECT_ALL';

export function selectAll() {
  return {
    type: SURGICAL_SELECT_ALL
  };
}

export const GET_SURGICAL_APPLICATION_PAGINATION = 'GET_SURGICAL_APPLICATION_PAGINATION';
export const SURGICAL_PAGINATION_CHANGE = 'SURGICAL_PAGINATION_CHANGE';

export function paginationChange(page) {
  return {
    type: SURGICAL_PAGINATION_CHANGE,
    page
  }
}
