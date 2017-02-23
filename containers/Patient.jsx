/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// UI
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/patient/Content';

class Patient extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Header message={this.props.message} />
        <Row>
          <Sidebar />
          <Content breadcrumbs={this.props.breadcrumbs} />
        </Row>
      </Grid>
    );
  }

}

Patient.propTypes = {
  message: PropTypes.object,
  breadcrumbs: PropTypes.array
};

function mapStateToProps(state) {
  const breadcrumbs = [
    { name: '首页', href: '/' },
    { name: '患者详情' }
  ];
  return {
    message: state.message,
    breadcrumbs
  };
}

export default connect(
  mapStateToProps
)(Patient);
