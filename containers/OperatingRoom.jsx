/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// UI
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';

class OperatingRoom extends React.Component {

  render() {
    return (
      <Grid fluid>
        <Header message={this.props.message} />
      </Grid>
    );
  }

}

OperatingRoom.propTypes = {
  message: PropTypes.object,
  breadcrumbs: PropTypes.array
};

function mapStateToProps(state) {
  const breadcrumbs = [
    { name: '首页', href: '/' },
    { name: '手术室' }
  ];
  return {
    message: state.message,
    breadcrumbs
  };
}

export default OperatingRoom;
