/**
 * DiGiHealth
 */

import { GET_ALL_MESSAGE } from './message';

export const GET_INTRAOPERATIVE_RECORD = 'GET_INTRAOPERATIVE_RECORD';

export function loadData() {
  return (dispatch, getState) => {
    const data = {
      message: {
        mail: 5,
        info: 3
      },
      intraoperativeRecord: [
        { id: 1, name: '路人甲', age: 23, sex: '男', surgery: '肺病手术', weight: 58, height: 178, time: 'Sat Sep 05 2015 09:34:51 GMT+0800 (CST)' },
        { id: 1, name: '路人乙', age: 23, sex: '男', surgery: '肺病手术', weight: 58, height: 178, time: 'Sat Sep 05 2015 09:34:51 GMT+0800 (CST)' },
        { id: 1, name: '路人丙', age: 23, sex: '男', surgery: '肺病手术', weight: 58, height: 178, time: 'Sat Sep 05 2015 09:34:51 GMT+0800 (CST)' },
        { id: 1, name: '路人丁', age: 23, sex: '男', surgery: '肺病手术', weight: 58, height: 178, time: 'Sat Sep 05 2015 09:34:51 GMT+0800 (CST)' }
      ]
    };

    dispatch({
      type: GET_ALL_MESSAGE,
      message: data.message
    });
    dispatch({
      type: GET_INTRAOPERATIVE_RECORD,
      surgeries: data.intraoperativeRecord
    });
  }
}
