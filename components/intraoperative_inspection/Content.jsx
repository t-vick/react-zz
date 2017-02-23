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
          <div className="row">
          <div className="col-md-12">
            <div className="portlet">
              <div className="portlet-title">
                <div className="caption">
                  <i className="fa fa-reorder"></i>术中巡视
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

                  <span>病区：</span>
                  <select id="job">
                      <option value="1">第一病区</option>
                      <option value="2">第二病区</option>
                 </select>
                 <span>科室：</span>
                  <select id="job">
                      <option value="1">麻醉科</option>
                      <option value="2">外科</option>
                 </select>
                  <div className="btn-group ">
                    <button id="sample_editable_1_new" className="btn btn-sm">
                    <span>查询<i className="fa fa-plus"></i></span>
                    </button>
                  </div>
                </div>
                  <div className="col-md-4">

                      <div className="portlet-body">
                        <table className="table table-bordered table-hover" id="Overview">
                  <thead>
                    <tr>
                      <td colSpan="6" align="center" style={{fontSize: 20, color: 'white', backgroundColor: '#4D90FE'}}>
                        <span id="scope">第一手术室</span>
                      </td>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="25%" bgColor="#eaf3f8">姓名</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="name">张三</span></td>
                      <td width="15%" bgColor="#eaf3f8">性别</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >男</span></td>
                      <td width="15%" bgColor="#eaf3f8">年龄</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >61</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术名称</td>
                      <td bgColor="#f4f8fb" colSpan="5" align="center"><span id="address">胰腺肿瘤（银夹）定位术</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">麻醉方式</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="pagecount">全麻（喉罩）</span></td>

                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术时间</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="count">2015-09-01 16:30:00</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术医生</td>
                      <td bgColor="#f4f8fb"><span id="hdp">李四</span></td>
                      <td bgColor="#eaf3f8" colSpan="2">麻醉医生</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="acm" >王五</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">心率</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>69</span>bpm</td>
                      <td bgColor="#eaf3f8">血压</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>74/135</span>mmHg</td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">呼吸</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>39</span>BrPM</td>
                      <td bgColor="#eaf3f8">血氧</td>
                      <td bgColor="#f4f8fb"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>23%</span></td>
                      <td bgColor="#eaf3f8">体温</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'blue'}}>37.9</span>℃</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
                  </div>
                  <div className="col-md-4">

                      <div className="portlet-body">
                        <table className="table table-bordered table-hover" id="Overview">
                  <thead>
                    <tr>
                      <td colSpan="6" align="center" style={{fontSize: 20, color: 'white', backgroundColor: '#4D90FE'}}>
                        <span id="scope">第二手术室</span>
                      </td>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="25%" bgColor="#eaf3f8">姓名</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="name">张三</span></td>
                      <td width="15%" bgColor="#eaf3f8">性别</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >男</span></td>
                      <td width="15%" bgColor="#eaf3f8">年龄</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >61</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术名称</td>
                      <td bgColor="#f4f8fb" colSpan="5" align="center"><span id="address">胰腺肿瘤（银夹）定位术</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">麻醉方式</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="pagecount">全麻（喉罩）</span></td>

                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术时间</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="count">2015-09-01 16:30:00</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术医生</td>
                      <td bgColor="#f4f8fb"><span id="hdp">李四</span></td>
                      <td bgColor="#eaf3f8" colSpan="2">麻醉医生</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="acm" >王五</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">心率</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>69</span>bpm</td>
                      <td bgColor="#eaf3f8">血压</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>74/135</span>mmHg</td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">呼吸</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>39</span>BrPM</td>
                      <td bgColor="#eaf3f8">血氧</td>
                      <td bgColor="#f4f8fb"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>23%</span></td>
                      <td bgColor="#eaf3f8">体温</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'blue'}}>37.9</span>℃</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
                  </div>
                  <div className="col-md-4">

                      <div className="portlet-body">
                        <table className="table table-bordered table-hover" id="Overview">
                  <thead>
                    <tr>
                      <td colSpan="6" align="center" style={{fontSize: 20, color: 'white', backgroundColor: '#4D90FE'}}>
                        <span id="scope">第三手术室</span>
                      </td>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="25%" bgColor="#eaf3f8">姓名</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="name">张三</span></td>
                      <td width="15%" bgColor="#eaf3f8">性别</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >男</span></td>
                      <td width="15%" bgColor="#eaf3f8">年龄</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >61</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术名称</td>
                      <td bgColor="#f4f8fb" colSpan="5" align="center"><span id="address">胰腺肿瘤（银夹）定位术</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">麻醉方式</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="pagecount">全麻（喉罩）</span></td>

                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术时间</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="count">2015-09-01 16:30:00</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术医生</td>
                      <td bgColor="#f4f8fb"><span id="hdp">李四</span></td>
                      <td bgColor="#eaf3f8" colSpan="2">麻醉医生</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="acm" >王五</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">心率</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>69</span>bpm</td>
                      <td bgColor="#eaf3f8">血压</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>74/135</span>mmHg</td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">呼吸</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>39</span>BrPM</td>
                      <td bgColor="#eaf3f8">血氧</td>
                      <td bgColor="#f4f8fb"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>23%</span></td>
                      <td bgColor="#eaf3f8">体温</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'blue'}}>37.9</span>℃</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
                  </div>
                  <div className="col-md-4">

                      <div className="portlet-body">
                        <table className="table table-bordered table-hover" id="Overview">
                  <thead>
                    <tr>
                      <td colSpan="6" align="center" style={{fontSize: 20, color: 'white', backgroundColor: '#4D90FE'}}>
                        <span id="scope">第四手术室</span>
                      </td>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="25%" bgColor="#eaf3f8">姓名</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="name">张三</span></td>
                      <td width="15%" bgColor="#eaf3f8">性别</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >男</span></td>
                      <td width="15%" bgColor="#eaf3f8">年龄</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >61</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术名称</td>
                      <td bgColor="#f4f8fb" colSpan="5" align="center"><span id="address">胰腺肿瘤（银夹）定位术</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">麻醉方式</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="pagecount">全麻（喉罩）</span></td>

                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术时间</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="count">2015-09-01 16:30:00</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术医生</td>
                      <td bgColor="#f4f8fb"><span id="hdp">李四</span></td>
                      <td bgColor="#eaf3f8" colSpan="2">麻醉医生</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="acm" >王五</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">心率</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>69</span>bpm</td>
                      <td bgColor="#eaf3f8">血压</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>74/135</span>mmHg</td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">呼吸</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>39</span>BrPM</td>
                      <td bgColor="#eaf3f8">血氧</td>
                      <td bgColor="#f4f8fb"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>23%</span></td>
                      <td bgColor="#eaf3f8">体温</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'blue'}}>37.9</span>℃</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
                  </div>
                  <div className="col-md-4">

                      <div className="portlet-body">
                        <table className="table table-bordered table-hover" id="Overview">
                  <thead>
                    <tr>
                      <td colSpan="6" align="center" style={{fontSize: 20, color: 'white', backgroundColor: '#4D90FE'}}>
                        <span id="scope">第五手术室</span>
                      </td>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="25%" bgColor="#eaf3f8">姓名</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="name">张三</span></td>
                      <td width="15%" bgColor="#eaf3f8">性别</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >男</span></td>
                      <td width="15%" bgColor="#eaf3f8">年龄</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >61</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术名称</td>
                      <td bgColor="#f4f8fb" colSpan="5" align="center"><span id="address">胰腺肿瘤（银夹）定位术</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">麻醉方式</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="pagecount">全麻（喉罩）</span></td>

                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术时间</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="count">2015-09-01 16:30:00</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术医生</td>
                      <td bgColor="#f4f8fb"><span id="hdp">李四</span></td>
                      <td bgColor="#eaf3f8" colSpan="2">麻醉医生</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="acm" >王五</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">心率</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>69</span>bpm</td>
                      <td bgColor="#eaf3f8">血压</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>74/135</span>mmHg</td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">呼吸</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>39</span>BrPM</td>
                      <td bgColor="#eaf3f8">血氧</td>
                      <td bgColor="#f4f8fb"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>23%</span></td>
                      <td bgColor="#eaf3f8">体温</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'blue'}}>37.9</span>℃</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
                  </div>
                  <div className="col-md-4">

                      <div className="portlet-body">
                        <table className="table table-bordered table-hover" id="Overview">
                  <thead>
                    <tr>
                      <td colSpan="6" align="center" style={{fontSize: 20, color: 'white', backgroundColor: '#4D90FE'}}>
                        <span id="scope">第六手术室</span>
                      </td>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td width="25%" bgColor="#eaf3f8">姓名</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="name">张三</span></td>
                      <td width="15%" bgColor="#eaf3f8">性别</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >男</span></td>
                      <td width="15%" bgColor="#eaf3f8">年龄</td>
                      <td width="15%" bgColor="#f4f8fb"><span id="ip" >61</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术名称</td>
                      <td bgColor="#f4f8fb" colSpan="5" align="center"><span id="address">胰腺肿瘤（银夹）定位术</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">麻醉方式</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="pagecount">全麻（喉罩）</span></td>

                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术时间</td>
                      <td bgColor="#f4f8fb" colSpan="5"><span id="count">2015-09-01 16:30:00</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">手术医生</td>
                      <td bgColor="#f4f8fb"><span id="hdp">李四</span></td>
                      <td bgColor="#eaf3f8" colSpan="2">麻醉医生</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="acm" >王五</span></td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">心率</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>69</span>bpm</td>
                      <td bgColor="#eaf3f8">血压</td>
                      <td bgColor="#f4f8fb" colSpan="2"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>74/135</span>mmHg</td>
                    </tr>
                    <tr>
                      <td bgColor="#eaf3f8">呼吸</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'red'}}>39</span>BrPM</td>
                      <td bgColor="#eaf3f8">血氧</td>
                      <td bgColor="#f4f8fb"><span id="name" style={{fontWeight: 'bold', color: 'green'}}>23%</span></td>
                      <td bgColor="#eaf3f8">体温</td>
                      <td bgColor="#f4f8fb"><span id="ip" style={{fontWeight: 'bold', color: 'blue'}}>37.9</span>℃</td>
                    </tr>
                  </tbody>
                </table>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
          <nav className="clearfix">
            <ul className="pagination">
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
}

export default Content;
