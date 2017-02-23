/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Col } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';

class Content extends React.Component {

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
          <div>

            <div className="portlet-body">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab_1_1" data-toggle="tab">用户管理</a>
                </li>
                <li className="">
                  <a href="#tab_1_2" data-toggle="tab">用户组管理</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade active in" id="tab_1_1">
                <div className="table-toolbar">
                <span>用户名:</span>
                <input type="text" />
                <span>姓名：</span>
                <input type="text" />
                <span>岗位：</span>
                <select id="job">
                    <option value="1">麻醉医师</option>
                    <option value="2">护士</option>
                    <option value="3">灌注医师</option>
               </select>
               <span>用户组：</span>
                <select id="job">
                    <option value="1">麻醉医师组</option>
                    <option value="2">护士组</option>
                    <option value="3">管理员组</option>
               </select>
                <div className="btn-group pull-right">
                  <button id="sample_editable_1_new" className="btn btn-midum">
                  <span>查询<i className="fa fa-plus"></i></span>
                  </button>
                </div>
              </div>
              <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
              <thead>
              <tr>
                <th>
                  用户名
                </th>
                <th>
                  姓名
                </th>
                <th>
                  岗位
                </th>
                <th>
                  职称
                </th>
                <th>
                  行政级别
                </th>
                <th>
                  用户组
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>userzhang</td>
                <td>张三</td>
                <td>麻醉医师</td>
                <td>主任医师</td>
                <td>麻醉医师</td>
                <td>麻醉医师组</td>
              </tr>
              <tr>
                <td>userzhang</td>
                <td>张三</td>
                <td>麻醉医师</td>
                <td>主任医师</td>
                <td>麻醉医师</td>
                <td>麻醉医师组</td>
              </tr>
              <tr>
                <td>userzhang</td>
                <td>张三</td>
                <td>麻醉医师</td>
                <td>主任医师</td>
                <td>麻醉医师</td>
                <td>麻醉医师组</td>
              </tr>
              <tr>
                <td>userzhang</td>
                <td>张三</td>
                <td>麻醉医师</td>
                <td>主任医师</td>
                <td>麻醉医师</td>
                <td>麻醉医师组</td>
              </tr>
              <tr>
                <td>userzhang</td>
                <td>张三</td>
                <td>麻醉医师</td>
                <td>主任医师</td>
                <td>麻醉医师</td>
                <td>麻醉医师组</td>
              </tr>
              <tr>
                <td>userzhang</td>
                <td>张三</td>
                <td>麻醉医师</td>
                <td>主任医师</td>
                <td>麻醉医师</td>
                <td>麻醉医师组</td>
              </tr>
              </tbody>
              </table>
                </div>
                <div className="tab-pane fade" id="tab_1_2">
                  <div className="table-toolbar">
                <div className="btn-group">
                  <button id="sample_editable_1_new" className="btn default">
                  <span>添加用户组<i className="fa fa-plus"></i></span>
                  </button>
                </div>
              </div>
              <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
              <thead>
              <tr>
                <th>
                  用户组名称
                </th>
                <th>
                  操作
                </th>

              </tr>
              </thead>
              <tbody>
              <tr>
                <td>麻醉医师组</td>
                <td>
                   <a href="javascript:">编辑</a>
                   <a href="javascript:">删除</a>
                </td>
              </tr>
              <tr>
                <td>麻醉医师组</td>
                <td>
                   <a href="javascript:">编辑</a>
                   <a href="javascript:">删除</a>
                </td>
              </tr>
              <tr>
                <td>麻醉医师组</td>
                <td>
                   <a href="javascript:">编辑</a>
                   <a href="javascript:">删除</a>
                </td>
              </tr>
              <tr>
                <td>麻醉医师组</td>
                <td>
                   <a href="javascript:">编辑</a>
                   <a href="javascript:">删除</a>
                </td>
              </tr>
              <tr>
                <td>麻醉医师组</td>
                <td>
                   <a href="javascript:">编辑</a>
                   <a href="javascript:">删除</a>
                </td>
              </tr>
              <tr>
                <td>麻醉医师组</td>
                <td>
                   <a href="javascript:">编辑</a>
                   <a href="javascript:">删除</a>
                </td>
              </tr>
              </tbody>
              </table>
                </div>
              </div>
            </div>
          </div>
      </Col>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
