/**
 * DiGiHealth
 */

import React, { PropTypes } from 'react';
// UI
import { Col } from 'react-bootstrap';
import Breadcrumb from '../Breadcrumb';

class Content extends React.Component {

  render() {
    return (
      <Col md={10} mdOffset={2} className="main-content">
        <Breadcrumb breadcrumbs={this.props.breadcrumbs} />
          <div className="row">
              <div className="col-md-12">
              <ul className="page-breadcrumb breadcrumb">
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  患者
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
            <ul className="dropdown-menu">
              <li className="dropdown-submenu">
                <a href="javascript:;">性别</a>
                <ul className="dropdown-menu pull-right">
                  <li>
                    <label>
                          <input type="radio" name="sex" value="1"/>
                          男 </label>
                          <label>
                          <input type="radio" name="sex" value="2"/>
                          女 </label>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">年龄</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">岁</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">岁</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">身高</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">cm</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">cm</span>
                    </div>
                  </li>
                </ul>
              </li>
                <li className="dropdown-submenu">
                <a href="javascript:;">体重</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">kg</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">kg</span>
                    </div>
                  </li>
                </ul>
              </li>
                  <li className="dropdown-submenu">
                    <a href="#">患者病史</a>
                    <ul className="dropdown-menu pull-right" style={{width:800}}>
                  <li>
                    <div className="col-md-4 ">
                    <span className="pull-right">循环系统（心血管）：</span>
                    </div>
                    <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>胸痛
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>心悸
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>瓣膜病变
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>杂音
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>高血压
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>心梗
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>易疲劳
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>气急
                      </label>
                      </div>
                      <div className="col-md-4">
                    <span className="pull-right">呼吸系统（肺活呼吸）：</span>
                    </div>
                    <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>COPD
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>肺炎
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>咳嗽
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>咳痰
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>气管炎
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>哮喘
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>皮质激素
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>TB
                      </label>
                      </div>
                      <div className="col-md-4 ">
                    <span className="pull-right">泌尿系统（泌尿生殖）：</span>
                    </div>
                    <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>尿毒症
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>血尿
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>肾功不全
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>月经
                      </label>
                      </div>
                      <div className="col-md-4">
                    <span className="pull-right">消化系统（消化）：</span>
                    </div>
                    <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>肝病
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>反流
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>胃潴留
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>溃疡
                      </label>
                      </div>
                      <div className="col-md-4">
                      <span className="pull-right">内分泌系统（内分泌/代谢）：</span>
                      </div>
                      <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>糖尿病
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>甲亢/低能
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>胰岛素
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>皮质
                      </label>
                      </div>

                      <div className="col-md-4">
                      <span  className="pull-right">过敏史 ：</span>
                      </div>
                      <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>药物过敏
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>食物过敏
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>手术
                      </label>
                      </div>
                      <div className="col-md-4">
                      <span  className="pull-right">全身情况 ：</span>
                      </div>
                      <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>差
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>一般
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>好
                      </label>
                      </div>
                      <div className="col-md-4">
                      <span  className="pull-right">气道通畅度 ：</span>
                      </div>
                      <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>头后仰受限
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>小下颌
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>气管位移
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>器官压迫
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>气管肿瘤
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>口内肿瘤
                      </label>
                      </div>
                      <div className="col-md-4">
                      <span  className="pull-right">心电图 ：</span>
                      </div>
                      <div className="col-md-8">
                    <label>
                          <input type="checkbox" value="1" name="service"/>窦性心律
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>窦性心动过速
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>窦性心动过缓
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>窦性心律偶见室早
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>频发房早
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>房颤
                      </label>
                      </div>
                  </li>
                </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a href="#">检验检查</a>
                    <ul className="dropdown-menu pull-right" style={{width:800}}>
                  <li>
                    <div className="col-md-2 ">
                    <span className="pull-right">项目：</span>
                    </div>
                    <div className="col-md-10">
                    <label>
                          <input type="checkbox" value="1" name="service"/>血清钙
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>血清钾
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>瓣膜病变
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>血清钠
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>血清蛋白
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>红细胞比积
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>葡萄糖
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>血色素
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>术中经食管超动心电图
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>术中B超
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>红细胞比积
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>血气分析
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>凝血全项
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>大生化全项
                      </label>
                      <label>
                          <input type="checkbox" value="1" name="service"/>ACT
                      </label>
                      </div>
                      <div className="col-md-2">
                    <span className="pull-right">Hb/Hct：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">g/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">g/L</span>
                    </div>
                      </div>
                      <div className="col-md-2">
                    <span className="pull-right">WBC：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">10^9/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">10^9/L</span>
                    </div>
                      </div>
                      <div className="col-md-2">
                    <span className="pull-right">PLT：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">10^9/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">10^9/L</span>
                    </div>
                      </div>
                      <div className="col-md-2">
                    <span className="pull-right">K+：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmol/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmol/L</span>
                    </div>
                      </div>

                      <div className="col-md-2">
                    <span className="pull-right">Na+：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmol/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmol/L</span>
                    </div>
                      </div>
                      <div className="col-md-2">
                    <span className="pull-right">Cl-：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmol/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmol/L</span>
                    </div>
                      </div>
                    <div className="col-md-2">
                    <span className="pull-right">GLU：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmol/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmol/L</span>
                    </div>
                      </div>
                      <div className="col-md-2">
                    <span className="pull-right">SGPT：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">IU/dl</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">IU/dl</span>
                    </div>
                      </div>
                        <div className="col-md-2">
                    <span className="pull-right">BUN：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmol/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmol/L</span>
                    </div>
                      </div>
                        <div className="col-md-2">
                    <span className="pull-right">Cr：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">umol/L</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">umol/L</span>
                    </div>
                      </div>
                        <div className="col-md-2">
                    <span className="pull-right">PT：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">s</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">s</span>
                    </div>
                      </div>
                        <div className="col-md-2">
                    <span className="pull-right">APTT：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">s</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">s</span>
                    </div>
                      </div>
                        <div className="col-md-2">
                    <span className="pull-right">PaO2：</span>
                    </div>
                    <div className="col-md-10">
                         <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmHg</span>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmHg</span>
                    </div>
                      </div>
                  </li>
                </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn  dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  手术
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">手术日期</a>
                  </li>
                  <li className="dropdown-submenu">
                <a href="javascript:;">手术类型</a>
                <ul className="dropdown-menu pull-right">
                  <li>
                    <label>
                          <input type="radio" name="sex" value="1"/>
                          急诊手术</label>
                          <label>
                          <input type="radio" name="sex" value="2"/>
                          择期手术</label>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">手术方法</a>
                <ul className="dropdown-menu" style={{width:280}}>
                  <li>
                    <div className="col-md-5">
                       <span className="pull-right">拟施手术：</span>
                    </div>
                    <div className="col-md-7">
                       <input type="text" className="pull-right" id="inputWarning"/>
                    </div>
                    <div className="col-md-5">
                       <span className="pull-right">手术方法：</span>
                    </div>
                    <div className="col-md-7">
                       <input type="text" className="pull-right" id="inputWarning"/>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">诊断</a>
                <ul className="dropdown-menu" style={{width:280}}>
                  <li>
                    <div className="col-md-5">
                       <span className="pull-right">术前诊断：</span>
                    </div>
                    <div className="col-md-7">
                       <input type="text" className="pull-right" id="inputWarning"/>
                    </div>
                    <div className="col-md-5">
                       <span className="pull-right">手术诊断：</span>
                    </div>
                    <div className="col-md-7">
                       <input type="text" className="pull-right" id="inputWarning"/>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">手术时长</a>
                <ul className="dropdown-menu" style={{width:680}}>
                  <li>
                    <div className="col-sm-2">
                       <input type="text" className="pull-left" placeholder="小时"id="inputWarning"/>
                    </div>
                    <div className="col-sm-2">
                       <input type="text" placeholder="分" id="inputWarning"/>
                    </div>
                    <div className="col-sm-2"><label className="pull-right">~</label></div>
                    <div className="col-sm-2">
                       <input type="text" className="pull-left" placeholder="小时"id="inputWarning"/>
                    </div>
                    <div className="col-sm-2">
                       <input type="text" placeholder="分" id="inputWarning"/>
                    </div>
                  </li>
                </ul>
              </li>
                  <li className="dropdown-submenu">
                <a href="javascript:;">恢复时长</a>
                <ul className="dropdown-menu" style={{width:680}}>
                  <li>
                    <div className="col-sm-2">
                       <input type="text" className="pull-left" placeholder="小时"id="inputWarning"/>
                    </div>
                    <div className="col-sm-2">
                       <input type="text" placeholder="分" id="inputWarning"/>
                    </div>
                    <div className="col-sm-2"><label className="pull-right">~</label></div>
                    <div className="col-sm-2">
                       <input type="text" className="pull-left" placeholder="小时"id="inputWarning"/>
                    </div>
                    <div className="col-sm-2">
                       <input type="text" placeholder="分" id="inputWarning"/>
                    </div>
                  </li>
                </ul>
              </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  麻醉
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-submenu">
                <a href="javascript:;">麻醉方法</a>
                <ul className="dropdown-menu" style={{width:400}}>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/>低温麻袋-冰袋
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>低温麻袋-冰水浴
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>单纯静脉麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>全凭静脉麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>吸入麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>静吸复合麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>小儿全麻
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>椎管内麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>硬膜外阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>蛛网膜下腔阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>腰麻硬膜外联合阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>颈丛神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>臂丛神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>要丛神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>坐骨神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>股神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>闭孔神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>上至神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>下至神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>正中神经阻滞麻醉
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>尺神经阻滞麻醉
                      </label>

                  </li>
                 </ul>
                 </li>
                  <li>
                    <a href="#">麻醉小节</a>
                  </li>
                  <li className="dropdown-submenu">
                <a href="javascript:;">麻醉事件</a>
                <ul className="dropdown-menu" style={{width:680}}>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/>深静脉置管
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>左桡动脉置管LART
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>桡动脉置管
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>右桡动脉置管LART
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>左足背动脉置管LAFT
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>右足背动脉置管RAFT
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>左颈内静脉置管LCVP
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>右颈内静脉置管RCVP
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>除颤CH
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>单肺通气OLV
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>双肺通气DLV
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>控制降压JY
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>控制降温DW
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>高频通气HJY
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>体外循环CPB
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>心肺复苏
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>中止手术
                      </label>
                  </li>
                </ul>
              </li>
                  <li className="dropdown-submenu">
                <a href="javascript:;">麻醉时长</a>
                <ul className="dropdown-menu" style={{width:680}}>
                  <li>
                    <div className="col-sm-2">
                       <input type="text" className="pull-left" placeholder="小时"id="inputWarning"/>
                    </div>
                    <div className="col-sm-2">
                       <input type="text" placeholder="分" id="inputWarning"/>
                    </div>
                    <div className="col-sm-2"><label className="pull-right">~</label></div>
                    <div className="col-sm-2">
                       <input type="text" className="pull-left" placeholder="小时"id="inputWarning"/>
                    </div>
                    <div className="col-sm-2">
                       <input type="text" placeholder="分" id="inputWarning"/>
                    </div>
                  </li>
                </ul>
              </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  护理
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                   <li className="dropdown-submenu">
                <a href="javascript:;">器械</a>
                <ul className="dropdown-menu" style={{width:300}}>
                  <li>
                      <input type="text" className="pull-left" id="inputWarning"/>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">手术体位</a>
                <ul className="dropdown-menu" style={{width:400}}>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/>仰卧位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>去枕仰卧位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>垂头仰卧位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>左侧卧位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>右侧卧位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>坐位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>半坐位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>俯卧位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>头低位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>头高位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>截石位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>左肾切除位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>右肾切除位
                      </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>牵引位
                      </label>

                  </li>
                </ul>
              </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  体征
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li className="dropdown-submenu">
                <a href="javascript:;">舒张压</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">mmHg</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">mmHg</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">收缩压</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">kg</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">kg</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">脉搏</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">次/min</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-2">
                      <span className="pull-left">次/min</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">呼吸</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">次/min</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-2">
                      <span className="pull-left">次/min</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">体温</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">℃</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">℃</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">潮气量</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">ml</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">ml</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">麻醉深度</a>
                <ul className="dropdown-menu" style={{width:480}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                  </li>
                </ul>
              </li>
               <li className="dropdown-submenu">
                <a href="javascript:;">中心静脉压</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-2">
                       <span className="pull-left">cmH2O</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-2">
                      <span className="pull-left">cmH2O</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">SPO2</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <div className="col-md-3">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">%</span>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                    <div className="col-md-1">
                      <span className="pull-left">%</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">EKG</a>
                <ul className="dropdown-menu" style={{width:580}}>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/>SR
                    </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>房颤
                    </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>房早
                    </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>室早
                    </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>窦速
                    </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>窦缓
                    </label>
                    <label>
                          <input type="checkbox" value="1" name="service"/>室上速
                    </label>
                  </li>
                </ul>
              </li>
              <li className="dropdown-submenu">
                <a href="javascript:;">PETC02</a>
                <ul className="dropdown-menu" style={{width:500}}>
                  <li>
                    <div className="col-md-4">
                       <input type="text" className="pull-left" id="inputWarning"/>
                    </div>
                    <div className="col-md-1">
                       <span className="pull-left">~</span>
                    </div>
                    <div className="col-md-4">
                      <input type="text" className="pull-left" id="inputWarning2"/>
                    </div>
                  </li>
                </ul>
              </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  镇痛
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">镇痛方法</a>
                  </li>
                  <li>
                    <a href="#">镇痛用药</a>
                  </li>
                  <li>
                    <a href="#">负荷量</a>
                  </li>
                  <li>
                    <a href="#">流速</a>
                  </li>
                  <li>
                    <a href="#">bolus量</a>
                  </li>
                  <li>
                    <a href="#">锁定时间</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  药品
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                      <label>
                          <input type="checkbox" value="1" name="service"/> 术前用药
                      </label>
                  </li>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/> 麻醉用药
                      </label>
                  </li>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/> 治疗用药
                      </label>
                  </li>
                  <li>
                    <label>
                          <input type="checkbox" value="1" name="service"/>镇痛药品
                      </label>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  出入量
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">入量</a>
                  </li>
                  <li>
                    <a href="#">出量</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  评分
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">ASA分级</a>
                  </li>
                  <li>
                    <a href="#">手术等级</a>
                  </li>
                  <li>
                    <a href="#">切口等级</a>
                  </li>
                  <li>
                    <a href="#">诊断</a>
                  </li>
                  <li>
                    <a href="#">PAMESAY镇静评分</a>
                  </li>
                  <li>
                    <a href="#">呕吐评分</a>
                  </li>
                  <li>
                    <a href="#">恶心评分</a>
                  </li>
                  <li>
                    <a href="#">疼痛评分</a>
                  </li>
                  <li>
                    <a href="#">运动阻滞评分</a>
                  </li>
                  <li>
                    <a href="#">steward评分</a>
                  </li>
                  </ul>
              </li>
              <li className="dropdown">
                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="true">
                <span>
                  不良事件与并发症
                </span>
                <i className="fa fa-angle-down"></i>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">手术不良事件</a>
                  </li>
                  <li>
                    <a href="#">麻醉并发症</a>
                  </li>
                </ul>
              </li>
            </ul>
              </div>
          </div>
          <div >
            <textarea className="col-md-8 select2">
            </textarea>
            <button type="button" className="btn">查询</button>
            <button type="button" className="btn">查询条件</button>
          </div>
          <div><br/></div>
          <div >
          <div className="panel panel-default">
            <div className="panel-heading clearfix">
                <a href="#" className="btn btn-default">提取模版</a>
                <a href="#" className="btn btn-default">保存模版</a>
                <a href="#" className="btn btn-default">查询记录</a>
                <a href="#" className="btn btn-default">全部导出</a>
                <a href="#" className="btn btn-default">课题</a>
            </div>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>手术日期</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>年龄</th>
                  <th>住院号</th>
                  <th>病区</th>
                  <th>科室</th>
                  <th>床号</th>
                  <th>手术名称</th>
                  <th>麻醉方法</th>
                  <th>文书</th>
                  <th>操作（查看／取消）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="success">
                  <td>2015-09-01</td>
                  <td>小明明</td>
                  <td>男</td>
                  <td>20</td>
                  <td>456789</td>
                  <td>西二病区</td>
                  <td>外科一</td>
                  <td>20</td>
                  <td>微创</td>
                  <td>局部麻醉</td>
                  <td><a href="#">查看</a></td>
                  <td>
                    <a href="#">查看</a>
                  </td>
                </tr>
                <tr>
                  <td>2015-09-01</td>
                  <td>小明明</td>
                  <td>男</td>
                  <td>20</td>
                  <td>456789</td>
                  <td>西二病区</td>
                  <td>外科一</td>
                  <td>20</td>
                  <td>微创</td>
                  <td>局部麻醉</td>
                  <td><a href="#">查看</a></td>
                  <td>
                    <a href="#">查看</a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2015-09-01</td>
                  <td>小明明</td>
                  <td>男</td>
                  <td>20</td>
                  <td>456789</td>
                  <td>西二病区</td>
                  <td>外科一</td>
                  <td>20</td>
                  <td>微创</td>
                  <td>局部麻醉</td>
                  <td><a href="#">查看</a></td>
                  <td>
                    <a href="#">查看</a>
                  </td>
                </tr>
                <tr>
                  <td>2015-09-01</td>
                  <td>小明明</td>
                  <td>男</td>
                  <td>20</td>
                  <td>456789</td>
                  <td>西二病区</td>
                  <td>外科一</td>
                  <td>20</td>
                  <td>微创</td>
                  <td>局部麻醉</td>
                  <td><a href="#">查看</a></td>
                  <td>
                    <a href="#">查看</a>
                  </td>
                </tr>
                <tr className="success">
                  <td>2015-09-01</td>
                  <td>小明明</td>
                  <td>男</td>
                  <td>20</td>
                  <td>456789</td>
                  <td>西二病区</td>
                  <td>外科一</td>
                  <td>20</td>
                  <td>微创</td>
                  <td>局部麻醉</td>
                  <td><a href="#">查看</a></td>
                  <td>
                    <a href="#">查看</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav className="clearfix">
            <ul className="pagination pull-right">
              <li className="disabled"><span>上一页</span></li>
              <li className="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><span>...</span></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">下一页</a></li>
            </ul>
          </nav>
        </div>
      </Col>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
