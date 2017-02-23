/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
// UI
import { Collapse } from 'react-bootstrap';

class SubCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this._renderSub = this._renderSub.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.sub) {
      nextProps.sub.links.some(item => {
        if (item.href === nextProps.href) {
          this.setState({ open: true });
          return true;
        }
        return false;
      });
    }
  }

  render() {
    const sub = this.props.sub;

    return (
      <li>
        <a onClick={this._onClick}>{sub.name}</a>
        <Collapse in={this.state.open}>
          <ul className="nav nav-pills nav-stacked">
            {this._renderSub()}
          </ul>
        </Collapse>
      </li>
    );
  }

  _onClick() {
    this.setState({
      open: !this.state.open
    });
  }

  _renderSub() {
    return this.props.sub.links.map((item, index) => {
      return (
        <li
          key={`sub-${index}`}
          className={classNames({
            'active': this.props.href === item.href
          })}
        >
          <Link to={item.href}>{item.name}</Link>
        </li>
      );
    });
  }

}

SubCategory.propTypes = {
  sub: PropTypes.object,
  href: PropTypes.string
};

export default SubCategory;
