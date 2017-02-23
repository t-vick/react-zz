/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/sidebar/Sidebar';
import Content from '../components/home/Content';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header message={this.props.message} />
        <Grid fluid>
          <Row>
            <Sidebar />
            <Content />
          </Row>
        </Grid>
      </div>
    );
  }

}

Home.propTypes = {
  message: PropTypes.object
};

function mapStateToProps(state) {
  return {
    message: state.message
  }
}

export default connect(
  mapStateToProps
)(Home);
