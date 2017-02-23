/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Breadcrumb = React.createClass({

  propTypes: {
    breadcrumbs: PropTypes.array
  },

  render() {
    return (
      <ol className="breadcrumb">
        {this.props.breadcrumbs.map((breadcrumb, index, breadcrumbs) => {
          if (index === breadcrumbs.length - 1) {
            return (
              <li
                key={`breadcrumb-${index}`}
                className="active"
              >{breadcrumb.name}</li>
            );
          } else {
            return (
              <li key={`breadcrumb-${index}`}>
                <Link to={breadcrumb.href}>{breadcrumb.name}</Link>
              </li>
            );
          }
        })}
      </ol>
    )
  }

});

export default Breadcrumb;
