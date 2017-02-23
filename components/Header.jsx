/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

const Header = React.createClass({

  propTypes: {
    message: PropTypes.object
  },

  render() {
    const { mail, info } = this.props.message;

    return (
      <Navbar
        brand={<Link to="home">DiGiHealth</Link>}
        staticTop
        fixedTop
        fluid
      >
        <Nav navbar right>
          <NavItem>信息 <Badge>{info}</Badge></NavItem>
          <NavItem>
            <img src="/public/images/avatar.png" className="img-circle" style={{width: 20}} />
            用户
          </NavItem>
        </Nav>
      </Navbar>
    );
  }

});

export default Header;
