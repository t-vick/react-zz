/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Col, Jumbotron, Button } from 'react-bootstrap';

const Content = React.createClass({

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Jumbotron>
          <h1>DiGiHealth</h1>
          <p>迪聚海思是一家以临床信息系统和数字化医院整体解决方案为核心业务的专业化公司。我们为客户提供最专业的医疗软件解决方案，以提升中国医疗信息化水平为己任。</p>
          <p>“科技，健康，未来”是迪聚海思的美好远景，凭借资深的行业经验，强大的研发力量，丰富的医院信息化项目经验，着力打造迪聚海思成为医疗信息化行业的顶尖企业。</p>
        </Jumbotron>
      </Col>
    )
  }

});

export default Content;
