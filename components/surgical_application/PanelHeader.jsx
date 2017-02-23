/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
import { Input, ButtonInput } from 'react-bootstrap';

const PanelHeader = React.createClass({

  render() {
    return (
      <div className="clearfix">
        {/* 左边搜索框 */}
        <form className="form-inline pull-left">
          <Input type="date" label="预约日期" />
          <Input type="text" label="姓名" />
          <Input type="select" label="病区">
            <option value="西二区">西二区</option>
            <option value='other'>...</option>
          </Input>
          <ButtonInput type="submit" value="查询" />
        </form>
      </div>
    )
  }

});

export default PanelHeader;
