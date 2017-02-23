/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class TableTr extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._handleView = this._handleView.bind(this);
  }

  render() {
    const tr = this.props.tr;

    return (
      <tr>
        <td className="text-center"><input type="checkbox" checked={tr.select} onChange={this._onChange} /></td>
        <td>{tr.date}</td>
        <td>{tr.reservation}</td>
        <td>{tr.name}</td>
        <td>{tr.age}</td>
        <td>{tr.sex}</td>
        <td>{tr.sections}</td>
        <td>{tr.ward}</td>
        <td>{tr.bedId}</td>
        <td>{tr.surgery}</td>
        <td>{tr.doctor}</td>
        <td>{tr.hocus}</td>
        <td>{tr.type}</td>
        <td>
          <a>拒绝</a>
          {' '}
          <Link to={`/patient/${tr.id}`}>查看</Link>
        </td>
      </tr>
    )
  }

  _onChange() {
    this.props.select(this.props.tr.id);
  }

  _handleView() {

  }

}

TableTr.propTypes = {
  tr: PropTypes.object,
  select: PropTypes.func
};

export default TableTr;
