/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';
import SearchForm from './SearchForm';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this._renderSurgery = this._renderSurgery.bind(this);
  }

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content intraoperative-record">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
        <SearchForm />
        <h1 className="text-center">**科室**手术间**年**月**日手术安排</h1>
        {this._renderSurgery()}
      </Col>
    );
  }

  _renderSurgery() {
    let time;

    return (
      <Row>
        {this.props.surgeries.map((surgery, index) => {
          time = new Date(surgery.time);
          time = `${time.getFullYear()}年${time.getHours()}:${time.getMinutes()}`
          return (
            <Col key={`surgery-${index}`} md={3} className="surgery">
              <div className="wrap">
                <div className="name">
                  <p>{surgery.surgery}</p>
                  <p>{time}</p>
                </div>
                <div className="patient">{surgery.name}</div>
                <div className="item">{surgery.age}岁</div>
                <div className="item">{surgery.sex}</div>
                <div className="item">{surgery.weight}kg</div>
                <div className="item">{surgery.height}cm</div>
                <div className="entry">
                  <Button bsStyle='info' href='/demo/report.html' target='_blank' block>进入手术间</Button>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array,
  surgeries: PropTypes.array
};

export default Content;
