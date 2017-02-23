/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Row, Col, Input, PageHeader, Button } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';

class Content extends React.Component {

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
        <form className="form-horizontal">
          <Row>
            <Col md={6}>
              <h3>基本信息</h3>
              <hr />
              <Input type="text" label="姓名" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="年龄" labelClassName='col-md-2' wrapperClassName='col-md-2' />
              <div className="form-group">
                <label className="col-md-2 control-label">性别</label>
                <div className="col-md-10">
                  <label className="radio-inline">
                    <input type="radio" name="sex" /> 男
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="sex" /> 女
                  </label>
                </div>
              </div>
              <Input type="text" label="住院号" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="select" label="病区" labelClassName='col-md-2' wrapperClassName='col-md-3'>
                <option value="西二区">西二区</option>
                <option value="...">...</option>
              </Input>
              <Input type="select" label="科室" labelClassName='col-md-2' wrapperClassName='col-md-3'>
                <option value="1">1</option>
                <option value="...">...</option>
              </Input>
              <Input type="text" label="床号" labelClassName='col-md-2' wrapperClassName='col-md-3' defaultValue="123456" />
              <div className="form-group">
                <label className="col-md-2 control-label">费用类型</label>
                <div className="col-md-10">
                  <label className="radio-inline">
                    <input type="radio" name="fee" /> 公费
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="fee" /> 自费
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="fee" /> 医保
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 control-label">手术等级</label>
                <div className="col-md-10">
                  <label className="radio-inline">
                    <input type="radio" name="level" /> 一级
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="level" /> 二级
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="level" /> 三级
                  </label>
                  <label className="radio-inline">
                    <input type="radio" name="level" /> 四级
                  </label>
                </div>
              </div>
              <Input type="text" label="术前诊断" labelClassName='col-md-2' wrapperClassName='col-md-3' />
              <Input type="text" label="拟施手术" labelClassName='col-md-2' wrapperClassName='col-md-3' />
              <Input type="text" label="麻醉方式" labelClassName='col-md-2' wrapperClassName='col-md-3' />
            </Col>
            <Col md={6}>
              <h3>手术安排明细</h3>
              <hr />
              <Input type="date" label="手术日期" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="手术医生" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="select" label="开始时间" labelClassName='col-md-2' wrapperClassName='col-md-3'>
                <option value="8:00">8:00</option>
                <option value="...">...</option>
              </Input>
              <Input type="select" label="结束时间" labelClassName='col-md-2' wrapperClassName='col-md-3'>
                <option value="8:00">8:00</option>
                <option value="...">...</option>
              </Input>
              <Input type="select" label="手术室" labelClassName='col-md-2' wrapperClassName='col-md-3'>
                <option value="1">1</option>
                <option value="...">...</option>
              </Input>
              <Input type="select" label="手术台次" labelClassName='col-md-2' wrapperClassName='col-md-3'>
                <option value="1">1</option>
                <option value="...">...</option>
              </Input>
              <Input type="text" label="第一器械护士" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="第二器械护士" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="第一巡台护士" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="第二巡台护士" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="手术麻醉医生" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="巡台麻醉医生" labelClassName='col-md-2' wrapperClassName='col-md-5' />
              <Input type="text" label="灌注医生" labelClassName='col-md-2' wrapperClassName='col-md-5' />
            </Col>
            <Col md={12}>
              <hr />
              <Button bsStyle='primary'>提交</Button>
            </Col>
          </Row>
        </form>
      </Col>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
