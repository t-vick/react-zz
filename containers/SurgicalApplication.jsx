/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import {
  loadData,
  select,
  selectAll,
  paginationChange
} from '../actions/surgicalApplication';
// UI
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/surgical_application/Content';

class SurgicalApplication extends React.Component {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        <Header message={this.props.message} />
        <Grid fluid>
          <Row>
            <Sidebar href={'/surgical_application'} />
            <Content
              breadcrumbs={this.props.breadcrumbs}
              surgery={this.props.surgery}
              pagination={this.props.pagination}
              select={this.props.select}
              selectAll={this.props.selectAll}
              paginationChange={this.props.paginationChange}
            />
          </Row>
        </Grid>
      </div>
    )
  }

}

SurgicalApplication.propTypes = {
  message: PropTypes.object,
  surgery: PropTypes.array,
  pagination: PropTypes.object,
  breadcrumbs: PropTypes.array,
  loadData: PropTypes.func,
  select: PropTypes.func,
  selectAll: PropTypes.func,
  paginationChange: PropTypes.func
};

function mapStateToProps(state) {
  const {
    message,
    surgicalApplication: {
      surgery,
      pagination
    }
  } = state;
  const breadcrumbs = [
    { name: '首页', href: '/' },
    { name: '手术申请' }
  ];

  return {
    message,
    surgery,
    pagination,
    breadcrumbs
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadData,
    select,
    selectAll,
    paginationChange
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgicalApplication);
