/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Col, Tabs, Tab } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';
import BasicInfo from './BasicInfo';

class Content extends React.Component {

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="基本信息">
            <BasicInfo />
          </Tab>
          <Tab eventKey={2} title="术前访视">
            <img src="/public/images/麻醉前访视单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={3} title="同意书">
            <img src="/public/images/麻醉知情同意书.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={4} title="风险评估">
            <img src="/public/images/手术风险评估单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={5} title="麻醉计划">
            <img src="/public/images/1.麻醉计划单——全身麻醉.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={6} title="手术安全核查单">
            <img src="/public/images/手术安全核查单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={7} title="麻醉纪录">
            <img src="/public/images/麻醉记录单（变化时间轴）_页面_1.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={8} title="麻醉总结">
            <img src="/public/images/麻醉总结报告单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={9} title="手术护理">
            <img src="/public/images/手术护理记录单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={10} title="镇痛">
            <img src="/public/images/术后镇痛记录单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={11} title="术后随访">
            <img src="/public/images/术后随访单.jpg" className="img-responsive center-block" />
          </Tab>
          <Tab eventKey={12} title="体外循环">
            <img src="/public/images/体外循环.png" className="img-responsive center-block" />
          </Tab>
        </Tabs>
      </Col>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
