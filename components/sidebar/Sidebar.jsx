/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
// UI
import { Col } from 'react-bootstrap';
import SubCategory from './SubCategory';

class Sidebar extends React.Component {

  render() {
    return (
      <Col
        md={2}
        className="sidebar"
      >
        <ul className="nav nav-pills nav-stacked nav-sidebar">
          {this._renderList()}
        </ul>
      </Col>
    );
  }

  _renderList() {
    return this.props.list.map((item, index) => {
      if (item.links) {
        return (
          <SubCategory key={`list-${index}`} sub={item} href={this.props.href} />
        );
      }

      return (
        <li
          key={`list-${index}`}
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

Sidebar.propTypes = {
  href: PropTypes.string,
  list: PropTypes.array
};

Sidebar.defaultProps = {
  link: 0,
  list: [
    { name: '手术申请', href: '/surgical_application' },
    { name: '手术排程', href: '/surgery_schedule' },
    { name: '术前访视', href: '/preoperative_visit' },
    { name: '术中记录', href: '/intraoperative_record' },
    { name: '复苏记录', href: '/recovery_record' },
    { name: '术后访视', href: '/postoperative_visits' },
    {
      name: '科研管理',
      links: [
        { name: '科研查询', href: '/scientific_inquiry' }
      ]
    },
    {
      name: '科室管理',
      links: [
        { name: '人员管理', href: '/personnel_management' },
        { name: '术中巡视', href: '/intraoperative_inspection' },
        { name: '耗材管理', href: '/supplies_management' },
        { name: '费用统计', href: '/cost_statistics' },
        { name: '统计查询', href: '/statistical_inquiry' }
      ]
    }
  ]
};

export default Sidebar;
