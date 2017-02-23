/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// actions
import { loadData } from '../actions/preoperativeVisit';
// UI
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/preoperative_visit/Content';

class PostoperativeVisits extends React.Component {

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      <Grid fluid>
        <Header message={this.props.message} />
        <Row>
          <Sidebar href="/postoperative_visits" />
          <Content
            breadcrumbs={this.props.breadcrumbs}
            patients={this.props.patients}
          />
        </Row>
      </Grid>
    )
  }

}

PostoperativeVisits.propTypes = {
  message: PropTypes.object,
  breadcrumbs: PropTypes.array
};

function mapStateToProps(state) {
  const breadcrumbs = [
    { name: '首页', href: '/' },
    { name: '术后访视' }
  ];
  const {
    message,
    preoperativeVisit: {
      patients
    }
  } = state;

  return {
    message,
    breadcrumbs,
    patients
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadData
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostoperativeVisits);
