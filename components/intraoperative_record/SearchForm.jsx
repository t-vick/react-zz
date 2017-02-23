/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Panel, Input, ButtonInput, Button } from 'react-bootstrap';

class SearchForm extends React.Component {

  render() {
    return (
      <Panel className="clearfix">
        <form className="form-inline pull-left">
          <Input type="date" label="预约日期" />
          <Input type="text" label="姓名" />
          <Input type="text" label="住院号" />
          <Input type="select" label="病区">
            <option value="西二区">西二区</option>
            <option value='other'>...</option>
          </Input>
          <ButtonInput type="submit" value="查询" />
        </form>
        <Button className="pull-right" bsStyle="primary">刷新</Button>
      </Panel>
    );
  }

}

export default SearchForm;
