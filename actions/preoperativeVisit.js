/**
 * DiGiHealth
 */

import { GET_ALL_MESSAGE } from '../actions/message';

export const GET_PREOPERATIVE_VISIT = 'GET_PREOPERATIVE_VISIT';

export function loadData() {
  return (dispatch, getState) => {
    const data = {
      message: {
        mail: 10,
        info: 15
      },
      preoperativeVisit: {
        patients: [
          { id: 1, reservation: 123456, name: '小明明', sex: '男', age: 20, hospitalNum: 456789, ward: '西二区', bedId: '西20', type: '普通', level: '三级', surgery: '阑尾切割术', anesthesia: '局部麻醉', doctor: '张三', date: '2015/01/01', state: '等待' },
          { id: 2, reservation: 123456, name: '小明明', sex: '男', age: 20, hospitalNum: 456789, ward: '西二区', bedId: '西20', type: '普通', level: '三级', surgery: '阑尾切割术', anesthesia: '局部麻醉', doctor: '张三', date: '2015/01/01', state: '等待' },
          { id: 3, reservation: 123456, name: '小明明', sex: '男', age: 20, hospitalNum: 456789, ward: '西二区', bedId: '西20', type: '普通', level: '三级', surgery: '阑尾切割术', anesthesia: '局部麻醉', doctor: '张三', date: '2015/01/01', state: '等待' },
          { id: 4, reservation: 123456, name: '小明明', sex: '男', age: 20, hospitalNum: 456789, ward: '西二区', bedId: '西20', type: '普通', level: '三级', surgery: '阑尾切割术', anesthesia: '局部麻醉', doctor: '张三', date: '2015/01/01', state: '等待' },
          { id: 5, reservation: 123456, name: '小明明', sex: '男', age: 20, hospitalNum: 456789, ward: '西二区', bedId: '西20', type: '普通', level: '三级', surgery: '阑尾切割术', anesthesia: '局部麻醉', doctor: '张三', date: '2015/01/01', state: '等待' }
        ]
      }
    };

    dispatch({
      type: GET_ALL_MESSAGE,
      message: data.message
    });
    dispatch({
      type: GET_PREOPERATIVE_VISIT,
      patients: data.preoperativeVisit.patients
    });
  }
}
