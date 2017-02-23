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
          <div>
          <div className="panel panel-default">
            <div className="panel-heading clearfix form-group">
              <div className="form-group">
                <span className="col-md-1">报表名称:</span>
                <select id="seltype">
                      <option value="1">麻醉例数统计</option>
                      <option value="2">科室-麻醉方法例数统计</option>
                      <option value="3">麻醉医师-麻醉方法例数统计</option>
                      <option value="4">ASA统计</option>
                      <option value="5">手术等级统计</option>
                      <option value="6">修改痕迹统计</option>
                      <option value="7">麻醉岗位安检统计</option>
                      <option value="8">在岗提醒统计</option>
                      <option value="9">工作量计分统计</option>
                      <option value="10">工作时常统计</option>
                      <option value="11">术前术后诊断差异统计</option>
                      <option value="12">术后镇痛统计</option>
                      <option value="13">体外循环统计</option>
                      <option value="14">进入麻醉复苏室例数统计</option>
                      <option value="15">非逾期的意识障碍例数统计</option>
                 </select>
              </div>
              <div className="form-group">
                <span className="col-md-1">日期范围:</span>
                <div className="date-picker input-daterange" data-date="2015-09-02" data-date-format="yyyy-mm-dd">
                <input type="text"name="from" />
                  <span>到</span>
                  <input type="text" name="to" />
                </div>
                <br/>
                <span className="col-md-2"><input type="checkbox" value="1" name="service"/>当月统计</span>
                <br/>
              </div>
              <div className="form-group">
                 <span className="col-md-3">麻醉医师：<input type="text"/></span>
              </div>
              <br/>
              <div className="form-group">
                <button className="btn btn-xs pull-left col-md-1">查询</button>
              </div>

            </div>
            <div>

            <div className="portlet-body">
              <ul className="nav nav-tabs">
                <li className="active">
                  <a href="#tab_1_1" data-toggle="tab">详细数据</a>
                </li>
                <li className="">
                  <a href="#tab_1_2" data-toggle="tab">图形数据</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade active in" id="tab_1_1">
               
              <div className="table-scrollable">
                  <table className="table table-striped table-bordered table-hover " id="table1">
                  <thead>
                  <tr>
                    <th scope="col" style={{width:450}}>
                      时间
                    </th>
                    <th scope="col">
                      全身麻醉
                    </th>
                    <th scope="col">
                      单纯静脉麻醉
                    </th>
                    <th scope="col">
                      全凭静脉麻醉
                    </th>
                    <th scope="col">
                      吸入麻醉
                    </th>
                    <th scope="col">
                      静吸复合麻醉
                    </th>
                    <th scope="col">
                      小儿全麻
                    </th>
                    <th scope="col">
                      椎管内麻醉
                    </th>
                    <th scope="col">
                      蛛网膜下腔阻滞麻醉
                    </th>
                    <th scope="col">
                      硬膜外阻滞麻醉
                    </th>
                    <th scope="col">
                      骶管阻滞麻醉
                    </th>
                    <th scope="col">
                      腰麻硬膜外联合阻滞麻醉
                    </th>
                    <th scope="col">
                      神经阻滞麻醉
                    </th>
                    <th scope="col">
                      颈丛神经阻滞麻醉
                    </th>
                    <th scope="col">
                      臂丛神经阻滞麻醉
                    </th>
                    <th scope="col">
                      腰丛神经阻滞麻醉
                    </th>
                    <th scope="col">
                      骶丛神经阻滞麻醉
                    </th>
                    <th scope="col">
                      坐骨神经阻滞麻醉
                    </th>
                    <th scope="col">
                      股神经阻滞麻醉
                    </th>
                    <th scope="col">
                      闭孔神经阻滞麻醉
                    </th>
                    <th scope="col">
                      上肢神经阻滞麻醉
                    </th>
                    <th scope="col">
                      测试麻醉
                    </th>
                    <th scope="col">
                     下肢神经阻滞麻醉
                    </th>
                    <th scope="col">
                      正中神经阻滞麻醉
                    </th>
                    <th scope="col">
                      尺神经阻滞麻醉
                    </th>
                    <th scope="col">
                      桡神经阻滞麻醉
                    </th>
                    <th scope="col">
                      会阴神经阻滞麻醉
                    </th>
                    <th scope="col">
                      局部麻醉
                    </th>
                    <th scope="col">
                      基础麻醉
                    </th>
                    <th scope="col">
                      表面麻醉
                    </th>
                    <th scope="col">
                      针刺麻醉
                    </th>
                    <th scope="col">
                      中药麻醉
                    </th>
                    <th scope="col">
                      低温麻醉 - 冰袋
                    </th>

                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td >
                      2015-09
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    </tr>
                    <tr>
                    <td >
                      2015-09
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    </tr>
                    <tr>
                    <td >
                      2015-09
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    </tr>
                    <tr>
                    <td >
                      2015-09
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    </tr>
                    <tr>
                    <td >
                      2015-09
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    <td scope="col">
                      0例
                    </td>
                    </tr>
                  </tbody>
                  </table>
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
                </div>
              <div className="tab-pane fade" id="tab_1_2">
              <img src="/public/images/统计查询.png" />
                </div>
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
