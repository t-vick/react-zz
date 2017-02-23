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
          <div className="col-md-12">
             <div >

               <div className="portlet-body">
                 <ul className="nav nav-tabs">
                   <li className="active">
                     <a href="#tab_1_1" data-toggle="tab">入库管理</a>
                   </li>
                   <li className="">
                     <a href="#tab_1_2" data-toggle="tab">出库管理</a>
                   </li>
                   <li className="">
                     <a href="#tab_1_3" data-toggle="tab">库存盘点</a>
                   </li>
                 </ul>
                 <div className="tab-content">
                   <div className="tab-pane fade active in" id="tab_1_1">
                   <div className="table-toolbar">
                   <span>入库流水号:</span>
                   <input type="text" />
                   <span>发票号：</span>
                   <input type="text" />
                   <span>入库方式：</span>
                   <select id="job">
                       <option value="1">批量入库</option>
                       <option value="2">综合退还</option>
                  </select>
                  <span>入库时间：</span>
                 <input type="text" name="from" />
                   <span>到</span>
                   <input type="text" name="to" />
                   <div className="btn-group pull-right">
                     <button id="sample_editable_1_new" className="btn">
                     <span>查询<i className="fa fa-plus"></i></span>
                     </button>
                   </div>
                 </div>
                 <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
                 <thead>
                 <tr>
                   <th>
                     物资名称
                   </th>
                   <th>
                     批号
                   </th>
                   <th>
                     入库业务流水号
                   </th>
                   <th>
                     发票号
                   </th>
                   <th>
                     入库方式
                   </th>
                   <th>
                     单位
                   </th>
                   <th>
                     入库价
                   </th>
                   <th>
                     入库金额
                   </th>
                   <th>
                     经办人
                   </th>
                   <th>
                     经办科室
                   </th>
                   <th>
                     入库时间
                   </th>
                   <th>
                     操作
                   </th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <td>耗材1</td>
                   <td>27</td>
                   <td>E98110</td>
                   <td>2015982012</td>
                   <td>批量入库</td>
                   <td>盒</td>
                   <td>118.9</td>
                   <td>10000</td>
                   <td>张三</td>
                   <td>麻醉科</td>
                   <td>2015-09-01</td>
                   <td>
                     <a href="javascript:">编辑</a>
                     <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                   <td>耗材1</td>
                   <td>27</td>
                   <td>E98110</td>
                   <td>2015982012</td>
                   <td>批量入库</td>
                   <td>盒</td>
                   <td>118.9</td>
                   <td>10000</td>
                   <td>张三</td>
                   <td>麻醉科</td>
                   <td>2015-09-01</td>
                   <td>
                     <a href="javascript:">编辑</a>
                     <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                   <td>耗材1</td>
                   <td>27</td>
                   <td>E98110</td>
                   <td>2015982012</td>
                   <td>批量入库</td>
                   <td>盒</td>
                   <td>118.9</td>
                   <td>10000</td>
                   <td>张三</td>
                   <td>麻醉科</td>
                   <td>2015-09-01</td>
                   <td>
                     <a href="javascript:">编辑</a>
                     <a href="javascript:">删除</a>
                   </td>
                 </tr><tr>
                   <td>耗材1</td>
                   <td>27</td>
                   <td>E98110</td>
                   <td>2015982012</td>
                   <td>批量入库</td>
                   <td>盒</td>
                   <td>118.9</td>
                   <td>10000</td>
                   <td>张三</td>
                   <td>麻醉科</td>
                   <td>2015-09-01</td>
                   <td>
                     <a href="javascript:">编辑</a>
                     <a href="javascript:">删除</a>
                   </td>
                 </tr><tr>
                   <td>耗材1</td>
                   <td>27</td>
                   <td>E98110</td>
                   <td>2015982012</td>
                   <td>批量入库</td>
                   <td>盒</td>
                   <td>118.9</td>
                   <td>10000</td>
                   <td>张三</td>
                   <td>麻醉科</td>
                   <td>2015-09-01</td>
                   <td>
                     <a href="javascript:">编辑</a>
                     <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 </tbody>
                 </table>
                   </div>
                   <div className="tab-pane fade" id="tab_1_2">
                     <div className="table-toolbar">
                     <span>物资名称:</span>
                   <input type="text" />
                   <span>批号：</span>
                   <input type="text" />
                   <span>出库方式：</span>
                   <select id="job">
                       <option value="1">发放出库</option>
                       <option value="2">废弃出库</option>
                  </select>
                  <span>出库时间：</span>
                 <input type="text" name="from" />
                   <span>到</span>
                   <input type="text" name="to" />
                   <div className="btn-group pull-right">
                     <button id="sample_editable_1_new" className="btn">
                     <span>查询<i className="fa fa-plus"></i></span>
                     </button>
                   </div>
                 </div>
                 <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
                 <thead>
                 <tr>
                   <th>
                     物资名称
                   </th>
                   <th>
                     批号
                   </th>
                   <th>
                     出库方式
                   </th>
                   <th>
                     出库数量
                   </th>
                   <th>
                     单位
                   </th>
                   <th>
                     经办人
                   </th>
                   <th>
                     经办人科室
                   </th>
                   <th>
                     出库时间
                   </th>
                   <th>
                     操作
                   </th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>E918220</td>
                   <td>发放出库</td>
                   <td>121</td>
                   <td>盒</td>
                   <td>张三</td>
                   <td>手术室</td>
                   <td>2014-01-23</td>
                   <td>
                      <a href="javascript:">编辑</a>
                      <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                    <td>手术特殊用药</td>
                   <td>E918220</td>
                   <td>发放出库</td>
                   <td>121</td>
                   <td>盒</td>
                   <td>张三</td>
                   <td>手术室</td>
                   <td>2014-01-23</td>
                   <td>
                      <a href="javascript:">编辑</a>
                      <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>E918220</td>
                   <td>发放出库</td>
                   <td>121</td>
                   <td>盒</td>
                   <td>张三</td>
                   <td>手术室</td>
                   <td>2014-01-23</td>
                   <td>
                      <a href="javascript:">编辑</a>
                      <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>E918220</td>
                   <td>发放出库</td>
                   <td>121</td>
                   <td>盒</td>
                   <td>张三</td>
                   <td>手术室</td>
                   <td>2014-01-23</td>
                   <td>
                      <a href="javascript:">编辑</a>
                      <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>E918220</td>
                   <td>发放出库</td>
                   <td>121</td>
                   <td>盒</td>
                   <td>张三</td>
                   <td>手术室</td>
                   <td>2014-01-23</td>
                   <td>
                      <a href="javascript:">编辑</a>
                      <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 <tr>
                    <td>手术特殊用药</td>
                   <td>E918220</td>
                   <td>发放出库</td>
                   <td>121</td>
                   <td>盒</td>
                   <td>张三</td>
                   <td>手术室</td>
                   <td>2014-01-23</td>
                   <td>
                      <a href="javascript:">编辑</a>
                      <a href="javascript:">删除</a>
                   </td>
                 </tr>
                 </tbody>
                 </table>
                   </div>
                   <div className="tab-pane fade" id="tab_1_3">
                     <div className="table-toolbar">
                     <span>物资名称:</span>
                   <input type="text" />

                   <div className="btn-group pull-right">
                     <button id="sample_editable_1_new" className="btn">
                     <span>查询<i className="fa fa-plus"></i></span>
                     </button>
                   </div>
                 </div>
                 <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
                 <thead>
                 <tr>
                   <th>
                     物资名称
                   </th>
                   <th>
                     零售价格
                   </th>
                   <th>
                     单位
                   </th>
                   <th>
                     库存数量
                   </th>

                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>123.0</td>
                   <td>盒</td>
                   <td>121</td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>123.0</td>
                   <td>盒</td>
                   <td>121</td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>123.0</td>
                   <td>盒</td>
                   <td>121</td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>123.0</td>
                   <td>盒</td>
                   <td>121</td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>123.0</td>
                   <td>盒</td>
                   <td>121</td>
                 </tr>
                 <tr>
                   <td>手术特殊用药</td>
                   <td>123.0</td>
                   <td>盒</td>
                   <td>121</td>
                 </tr>
                 </tbody>
                 </table>
                   </div>
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
