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
          <div><br/></div>
          <div >
          <div className="portlet box blue">
              <div className="portlet-title box blue">
                <div className="caption">
                  <span><i className="fa fa-edit"></i>病人列表</span>
                </div>
              </div>
              <div className="portlet-body">
                <div className="table-toolbar">
                  <span>姓名:</span>
                  <input type="text" />
                  <span>住院号：</span>
                  <input type="text" />
                  <span>手术日期：</span>
                  <input type="text" />
                  <div className="btn-group">
                    <button id="sample_editable_1_new" className="btn btn-sm">
                    <span>查询<i className="fa fa-plus"></i></span>
                    </button>
                  </div>
                </div>
                <table className="table table-striped table-hover table-bordered" id="sample_editable_1">
                <thead>
                <tr>
                  <th>
                    姓名
                  </th>
                  <th>
                    性别
                  </th>
                  <th>
                    年龄
                  </th>
                  <th>
                    住院号
                  </th>
                  <th>
                    术前诊断
                  </th>
                  <th>
                    拟施手术
                  </th>
                  <th>
                    手术日期
                  </th>
                  <th>
                    操作
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>张三</td>
                  <td>男</td>
                  <td>20</td>
                  <td>10092</td>
                  <td>尺骨骨折</td>
                  <td>手法助产术</td>
                  <td>2013-09-22</td>
                  <td><a className="edit" href="javascript:;">删除</a></td>
                </tr>
                <tr>
                  <td>张三</td>
                  <td>男</td>
                  <td>20</td>
                  <td>10092</td>
                  <td>尺骨骨折</td>
                  <td>手法助产术</td>
                  <td>2013-09-22</td>
                  <td><a className="edit" href="javascript:;">删除</a></td>
                </tr><tr>
                  <td>张三</td>
                  <td>男</td>
                  <td>20</td>
                  <td>10092</td>
                  <td>尺骨骨折</td>
                  <td>手法助产术</td>
                  <td>2013-09-22</td>
                  <td><a className="edit" href="javascript:;">删除</a></td>
                </tr><tr>
                  <td>张三</td>
                  <td>男</td>
                  <td>20</td>
                  <td>10092</td>
                  <td>尺骨骨折</td>
                  <td>手法助产术</td>
                  <td>2013-09-22</td>
                  <td><a className="edit" href="javascript:;">删除</a></td>
                </tr><tr>
                  <td>张三</td>
                  <td>男</td>
                  <td>20</td>
                  <td>10092</td>
                  <td>尺骨骨折</td>
                  <td>手法助产术</td>
                  <td>2013-09-22</td>
                  <td><a className="edit" href="javascript:;">删除</a></td>
                </tr><tr>
                  <td>张三</td>
                  <td>男</td>
                  <td>20</td>
                  <td>10092</td>
                  <td>尺骨骨折</td>
                  <td>手法助产术</td>
                  <td>2013-09-22</td>
                  <td><a className="edit" href="javascript:;">删除</a></td>
                </tr>
                </tbody>
                </table>
              </div>
            </div>
          <nav className="clearfix">
            <ul className="pagination pull-right">
              <li className="disabled"><span>上一页</span></li>
              <li className="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><span>...</span></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">下一页</a></li>
            </ul>
          </nav>
        </div>
      </Col>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
