/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
// actions
import { loadData } from '../actions/preoperativeVisit';
// components
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/preoperative_visit/Content';

const PreoperativeVisit = React.createClass({

  propTypes: {
    message: PropTypes.object,
    patients: PropTypes.array
  },

  getDefaultProps() {
    return {
      breadcrumbs: [
        { name: '首页', href: '/' },
        { name: '术前访视' }
      ]
    };
  },

  componentWillMount() {
    this.props.loadData();
  },

  render() {
    return (
      <div>
        <Header message={this.props.message} />
        <Grid fluid>
          <Row>
            <Sidebar href="/preoperative_visit" />
            <Content
              breadcrumbs={this.props.breadcrumbs}
              patients={this.props.patients}
            />
          </Row>
        </Grid>
      </div>
    )
  }

});

function mapStateToProps(state) {
  const {
    message,
    preoperativeVisit: {
      patients
    }
  } = state;

  return {
    message,
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
)(PreoperativeVisit);
