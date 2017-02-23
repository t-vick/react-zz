/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Col, Panel, Table, Pagination, ButtonToolbar, Button } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';
import TableTr from './TableTr';
import PanelHeader from './PanelHeader';

const Content = React.createClass({

  propTypes: {
    breadcrumbs: PropTypes.array,
    surgery: PropTypes.array,
    pagination: PropTypes.object,
    select: PropTypes.func,
    selectAll: PropTypes.func,
    paginationChange: PropTypes.func
  },

  getDefaultProps() {
    return {
      thead: ['预约日期', '住院号', '姓名', '年龄', '性别', '科室', '病区', '床号', '拟施手术', '手术医生', '麻醉医生', '手术类型', '操作（查看／取消）']
    };
  },

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
        <Panel className="clearfix">
          <ButtonToolbar className="pull-left">
            <Button bsStyle='danger'>手动录入</Button>
            <Button bsStyle='primary'>刷新</Button>
            <Button>批准手术</Button>
          </ButtonToolbar>
          <ButtonToolbar className="pull-right">
            <Button>普通手术</Button>
            <Button>紧急手术</Button>
          </ButtonToolbar>
        </Panel>
        <Panel header={<PanelHeader />}>
          <Table fill striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">
                  <input type="checkbox" checked={this._isAllSelect()} onChange={this._onChange} />
                </th>
                {this._renderTh()}
              </tr>
            </thead>
            <tbody>
              {this._renderTr()}
            </tbody>
          </Table>
        </Panel>
        <div className="clearfix">
          <div className="pull-right">
            <Pagination
              prev
              next
              first
              last
              ellipsis
              items={this.props.pagination.pages}
              maxButtons={5}
              activePage={this.props.pagination.page}
              onSelect={this._onSelect}
            />
          </div>
        </div>
      </Col>
    )
  },

  _renderTh() {
    return this.props.thead.map((th, index) => {
      return <th key={`th-${index}`}>{th}</th>
    });
  },

  _renderTr() {
    return this.props.surgery.map((tr, index) => {
      return (
        <TableTr
          key={`tr-${index}`}
          tr={tr}
          select={this.props.select}
        />
      );
    });
  },

  _onChange() {
    this.props.selectAll();
  },

  _onSelect(event, selectedEvent) {
    this.props.paginationChange(selectedEvent.eventKey);
  },

  _isAllSelect() {
    return this.props.surgery.every(surgery =>
      surgery.select
    );
  }

});

export default Content;
