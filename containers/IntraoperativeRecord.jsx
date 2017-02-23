/**
 * DiGiHealth
 */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// actions
import { loadData } from '../actions/intraoperativeRecord';
// UI
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/intraoperative_record/Content';

class IntraoperativeRecord extends Component {

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        <Header message={this.props.message} />
        <Grid fluid>
          <Row>
            <Sidebar href="/intraoperative_record" />
            <Content
              breadcrumbs={this.props.breadcrumbs}
              surgeries={this.props.surgeries}
            />
          </Row>
        </Grid>
      </div>
    )
  }

}

IntraoperativeRecord.propTypes = {
  breadcrumbs: PropTypes.array,
  message: PropTypes.object,
  surgeries: PropTypes.array
};

function mapStateToProps(state) {
  const breadcrumbs = [
    { name: '首页', href: '/' },
    { name: '术中记录' }
  ];
  const {
    message,
    intraoperativeRecord: {
      surgeries
    }
  } = state;

  return {
    message: state.message,
    surgeries,
    breadcrumbs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntraoperativeRecord);
