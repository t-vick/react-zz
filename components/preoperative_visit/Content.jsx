/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// UI
import { Col, Table } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';

const Content = React.createClass({

  propTypes: {
    breadcrumbs: PropTypes.array,
    patients: PropTypes.array
  },

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
        {this._renderTable()}
      </Col>
    )
  },

  _renderTable() {
    const ths = ['预约单号', '姓名', '性别', '年龄', '住院号', '病区', '床号', '手术类型', '手术等级', '拟施手术', '建议麻醉方式', '手术医生', '预约日期', '状态', '操作（查看／取消）'];

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {ths.map((th, index) => {
              return <th key={`th-${index}`}>{th}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.patients.map((patient, index) => {
            return (
              <tr key={`tr-${index}`}>
                <td>{patient.reservation}</td>
                <td>{patient.name}</td>
                <td>{patient.sex}</td>
                <td>{patient.age}</td>
                <td>{patient.hospitalNum}</td>
                <td>{patient.ward}</td>
                <td>{patient.bedId}</td>
                <td>{patient.type}</td>
                <td>{patient.level}</td>
                <td>{patient.surgery}</td>
                <td>{patient.anesthesia}</td>
                <td>{patient.doctor}</td>
                <td>{patient.date}</td>
                <td>{patient.state}</td>
                <td>
                  <Link to={`/surgery/${patient.reservation}`}>查看</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

});

export default Content;
