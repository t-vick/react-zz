/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';

const Login = React.createClass({

  render () {
    return (
      <div className="home container-fluid">
        {/* HEADER */}
        <div className="row">
          <div className="head col-md-12">
            <h1 className="head-title col-md-6 col-md-offset-3 text-center">手术麻醉管理信息系统</h1>
          </div>
        </div>
        {/* BODY */}
        <div className="body row">
          <div className="col-md-10 col-md-offset-1">
            <div className="link-box col-md-4">
              <a href="/#/" className="text-center">
                <span>
                  <i className="iconfont icon-yisheng text-success"></i>主任工作站
                </span>
              </a>
            </div>
            <div className="link-box col-md-4">
              <a href="/" className="text-center">
                <span>
                  <i className="iconfont icon-yisheng text-primary"></i>医生工作站
                </span>
              </a>
            </div>
            <div className="link-box col-md-4">
              <a href="#" className="text-center">
                <span>
                  <i className="iconfont icon-hushi text-warning"></i>护士工作站
                </span>
              </a>
            </div>
            <div className="link-box col-md-4 col-md-offset-2">
              <a href="#" className="text-center">
                <span>
                  <i className="iconfont icon-ordinaryjiahao text-danger"></i>手术间
                </span>
              </a>
            </div>
            <div className="link-box col-md-4">
              <a href="#" className="text-center">
                <span>
                  <i className="iconfont icon-clipboard text-muted"></i>复苏室
                </span>
              </a>
            </div>
          </div>
          <div className="help col-md-10 col-md-offset-1">
            <h2 className="h3 col-md-12">使用帮助</h2>
            <ol className="clearfix">
              <li className="col-md-6">本系统用于查询当日的手术安排</li>
              <li className="col-md-6">请点击相应按钮进入下一级界面</li>
              <li className="col-md-6">如果您知道所在的手术间，请点击“手术间”按钮</li>
              <li className="col-md-6">您也可以通过工作人员进行选择</li>
            </ol>
          </div>
        </div>
        {/* FOOTER */}
        <div className="footer row">
          <div className="col-md-12 text-center text-muted">&copy; 深圳迪聚海思科技有限公司(Digihealth) 2015 版权所有。</div>
        </div>
      </div>
    )
  }

});

export default Login;
