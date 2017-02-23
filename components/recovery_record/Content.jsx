/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this._renderBeds = this._renderBeds.bind(this);
    this._onDragStart = this._onDragStart.bind(this);
    this._onDrop = this._onDrop.bind(this);
  }

  render () {
    return (
      <Col md={10} mdOffset={2} className="main-content recovery-record">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
        <Row>
          <Col md={2}>
            <Panel header="苏醒列表">
              <ListGroup fill>
                <ListGroupItem draggable onDragStart={this._onDragStart}>张三</ListGroupItem>
                <ListGroupItem draggable onDragStart={this._onDragStart}>李四</ListGroupItem>
                <ListGroupItem draggable onDragStart={this._onDragStart}>王五</ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
          <Col md={10} className="beds">
            <Row>{this._renderBeds()}</Row>
          </Col>
        </Row>
      </Col>
    );
  }

  _renderBeds() {
    let beds = [];

    for (let i = 0; i < 10; i++) {
      beds.push(
        <Col key={`bedwrap-${i}`} md={2}>
          <Panel header={`床位${i + 1}`}>
            <div className="bed" onDragOver={this._onDragOver} onDrop={this._onDrop}><a href='/demo/report_fs.html' target='_blank'>空闲</a></div>
          </Panel>
        </Col>
      );
    }

    return beds;
  }

  _onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.textContent);
  }

  _onDragOver(event) {
    event.preventDefault();
  }

  _onDrop(event) {
    let data = event.dataTransfer.getData("text/plain");
    event.target.textContent = data;
    event.preventDefault();
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
