/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// UI
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/intraoperative_inspection/Content';

class IntraoperativeInspection extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Header message={this.props.message} />
        <Row>
          <Sidebar href="/intraoperative_inspection" />
          <Content breadcrumbs={this.props.breadcrumbs} />
        </Row>
      </Grid>
    );
  }

}

IntraoperativeInspection.propTypes = {
  message: PropTypes.object,
  breadcrumbs: PropTypes.array
};

function mapStateToProps(state) {
  const breadcrumbs = [
    { name: '首页', href: '/' },
    { name: '术中巡视' }
  ];

  return {
    message: state.message,
    breadcrumbs
  };
}

export default connect(
  mapStateToProps
)(IntraoperativeInspection);
