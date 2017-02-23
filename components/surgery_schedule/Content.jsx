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
          <div id="div1">
            <button>前一天</button>
            <button>后一天</button>
            <p id="p1"><span>2015/08/21 </span>未排程：<span>12</span> 已排

              程:<span>1</span> 已完成:<span>1</span></p>
              <button>自动排班</button>
            </div>
            <div className="tabbable table1">
              <ul className="nav nav-tabs tab-color-blue background-blue"
              id="myTab4">
              <li className="active">
                <a data-toggle="tab" href="#home4">1-6号手术室</a>
              </li>

              <li>
                <a data-toggle="tab" href="#home5">7-12号手术室</a>
              </li>

              <li>
                <a data-toggle="tab" href="#home6">13-18号手术室</a>
              </li>
            </ul>

            <div className="tab-content">
              <div id="home4" className="tab-pane in active">
                <div>
                  <table className="table table-bordered table2">
                    <tr>
                      <td style={{width: 51}}></td>
                      <td>
                        第一手术间
                      </td>
                      <td>
                        第二手术间
                      </td>
                      <td>
                        第三手术间
                      </td>
                      <td>
                        第四手术间
                      </td>
                      <td>
                        第五手术间
                      </td>
                      <td>
                        第六手术间
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="div4">
                  <table className="table table-bordered">
                    <tr style={{height: 80}} id="1">
                      <td>
                        08:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="2">
                      <td>
                        10:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="3">
                      <td>
                        12:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="4">
                      <td>
                        14:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="5">
                      <td>
                        16:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="6">
                      <td>
                        18:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="7">
                      <td>
                        20:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="8">
                      <td>
                        22:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="9">
                      <td>
                        24:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="10">
                      <td>
                        02:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="11">
                      <td>
                        04:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                    <tr className="trname" id="12">
                      <td>
                        06:00
                      </td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                      <td className="type"

                      ></td>
                    </tr>
                  </table>
                </div>
              </div>

              <div id="home5" className="tab-pane">
                <div>
                  <table className="table table-bordered" style={{width: 783,textAlign:'center',marginBottom: 0}}>
                  <tr>
                    <td style={{width: 51}}></td>
                    <td>
                      第七手术间
                    </td>
                    <td>
                      第八手术间
                    </td>
                    <td>
                      第九手术间
                    </td>
                    <td>
                      第十手术间
                    </td>
                    <td>
                      第十一手术间
                    </td>
                    <td>
                      第十二手术间
                    </td>
                  </tr>
                </table>
              </div>
              <div className="div4">
                <table className="table table-bordered">
                  <tr className="trname" id="1">
                    <td>
                      08:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="2">
                    <td>
                      10:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="3">
                    <td>
                      12:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="4">
                    <td>
                      14:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="5">
                    <td>
                      16:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="6">
                    <td>
                      18:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="7">
                    <td>
                      20:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="8">
                    <td>
                      22:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="9">
                    <td>
                      24:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="10">
                    <td>
                      02:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="11">
                    <td>
                      04:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="12">
                    <td>
                      06:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                </table>
              </div>
            </div>

            <div id="home6" className="tab-pane">
              <div>
                <table className="table table-bordered table2" >
                  <tr>
                    <td style={{width: 51}}></td>
                    <td>
                      第十三手术间
                    </td>
                    <td>
                      第十四手术间
                    </td>
                    <td>
                      第十五手术间
                    </td>
                    <td>
                      第十六手术间
                    </td>
                    <td>
                      第十七手术间
                    </td>
                    <td>
                      第十八手术间
                    </td>
                  </tr>
                </table>
              </div>
              <div className="div4">
                <table className="table table-bordered">
                  <tr className="trname" id="1">
                    <td>
                      08:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="2">
                    <td>
                      10:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="3">
                    <td>
                      12:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="4">
                    <td>
                      14:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="5">
                    <td>
                      16:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="6">
                    <td>
                      18:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="7">
                    <td>
                      20:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="8">
                    <td>
                      22:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="9">
                    <td>
                      24:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="10">
                    <td>
                      02:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="11">
                    <td>
                      04:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                  <tr className="trname" id="12">
                    <td>
                      06:00
                    </td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                    <td className="type"

                    ></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="div3">
          <div>
            <div><strong style={{fontSize: 15}}>待排病人</strong><input type="text"

              style={{float:'right'}} /></div>
              <div id="pat">
                <table className="table table-bordered" style={{textAlign: 'center'}}>
                  <tr>
                    <td>
                      <span id="pat1">2015001<br />张三</span>
                    </td>
                    <td>
                      <span id="pat2">2015002<br />李四</span>
                    </td>
                    <td>
                      <span id="pat3">2015003<br />王五</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="pat4">2015004<br />张三</span>
                    </td>
                    <td>
                      <span id="pat5">2015005<br />李四</span>
                    </td>
                    <td>
                      <span id="pat6">2015006<br />王五</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="pat7">2015007<br />张三</span>
                    </td>
                    <td>
                      <span id="pat8">2015008<br />李四</span>
                    </td>
                    <td>
                      <span id="pat9">2015009<br />王五</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="pat10">20150010<br />张三</span>
                    </td>
                    <td>
                      <span id="pat11">2015011<br />李四</span>
                    </td>
                    <td>
                      <span id="pat12">2015012<br />王五</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="pat13">2015013<br />张三</span>
                    </td>
                    <td>
                      <span id="pat14">2015014<br />李四</span>
                    </td>
                    <td>
                      <span id="pat15">2015015<br />王五</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="tabbable">
              <ul className="nav nav-tabs padding-12 tab-color-blue background-blue"
              id="myTab4">
              <li className="active">
                <a data-toggle="tab" href="#doc1">麻醉医生</a>
              </li>

              <li>
                <a data-toggle="tab" href="#doc2">巡回医生</a>
              </li>
            </ul>

            <div className="tab-content" style={{padding:0}}>
              <div id="doc1" className="tab-pane in active">
                <table className="table table-bordered" style={{textAlign: 'center'}}>
                  <tr>
                    <td>
                      <span id="ad1">王宝泉</span>
                    </td>
                    <td>
                      <span id="ad2">李帅</span>
                    </td>
                    <td>
                      <span id="ad3">刘备</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="ad4">王刚</span>
                    </td>
                    <td>
                      <span id="ad5">李密</span>
                    </td>
                    <td>
                      <span id="ad6">李文博</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="ad7">赵三</span>
                    </td>
                    <td>
                      <span id="ad8">白举纲</span>
                    </td>
                    <td>
                      <span id="ad9">刘峰</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="ad10">周志彬</span>
                    </td>
                    <td>
                      <span id="ad11">刘东东</span>
                    </td>
                    <td>
                      <span id="ad12">刘米峰</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span id="ad13">易文斌</span>
                    </td>
                    <td>
                      <span id="ad14">陈启东</span>
                    </td>
                    <td>
                      <span id="ad15">尚可</span>
                    </td>
                  </tr>
                </table>
              </div>

              <div id="doc2" className="tab-pane">
                <table className="table table-bordered" style={{textAlign: 'center'}}>
                <tr>
                  <td>
                    <span id="td1">王宝泉</span>
                  </td>
                  <td>
                    <span id="td2">李帅</span>
                  </td>
                  <td>
                    <span id="td3">刘备</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="td4">王刚</span>
                  </td>
                  <td>
                    <span id="td5">李密</span>
                  </td>
                  <td>
                    <span id="td6">李文博</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="td7">赵三</span>
                  </td>
                  <td>
                    <span id="td8">白举纲</span>
                  </td>
                  <td>
                    <span id="td9">刘峰</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="td10">周志彬</span>
                  </td>
                  <td>
                    <span id="td11">刘东东</span>
                  </td>
                  <td>
                    <span id="td12">刘米峰</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="td13">易文斌</span>
                  </td>
                  <td>
                    <span id="td14">陈启东</span>
                  </td>
                  <td>
                    <span id="td15">尚可</span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="tabbable">
          <ul className="nav nav-tabs padding-12 tab-color-blue background-blue"
          id="myTab4">
          <li className="active">
            <a data-toggle="tab" href="#hur1">器械护士</a>
          </li>

          <li>
            <a data-toggle="tab" href="#hur2">巡回护士</a>
          </li>
        </ul>

        <div className="tab-content" style={{padding:0}}>
          <div id="hur1" className="tab-pane in active">
            <table className="table table-bordered" style={{textAlign: 'center'}}>
            <tr>
              <td>
                <span id="ih1">王宝泉</span>
              </td>
              <td>
                <span id="ih2">李帅</span>
              </td>
              <td>
                <span id="ih3">刘备</span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="ih4">王刚</span>
              </td>
              <td>
                <span id="ih5">李密</span>
              </td>
              <td>
                <span id="ih6">李文博</span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="ih7">赵三</span>
              </td>
              <td>
                <span id="ih8">白举纲</span>
              </td>
              <td>
                <span id="ih9">刘峰</span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="ih10">周志彬</span>
              </td>
              <td>
                <span id="ih11">刘东东</span>
              </td>
              <td>
                <span id="ih12">刘米峰</span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="ih13">易文斌</span>
              </td>
              <td>
                <span id="ih14">陈启东</span>
              </td>
              <td>
                <span id="ih15">尚可</span>
              </td>
            </tr>
          </table>
        </div>

        <div id="hur2" className="tab-pane">
          <table className="table table-bordered" style={{textAlign: 'center'}}>
          <tr>
            <td>
              <span id="th1">王宝泉</span>
            </td>
            <td>
              <span id="th2">李帅</span>
            </td>
            <td>
              <span id="th3">刘备</span>
            </td>
          </tr>
          <tr>
            <td>
              <span id="th4">王刚</span>
            </td>
            <td>
              <span id="th5">李密</span>
            </td>
            <td>
              <span id="th6">李文博</span>
            </td>
          </tr>
          <tr>
            <td>
              <span id="th7">赵三</span>
            </td>
            <td>
              <span id="th8">白举纲</span>
            </td>
            <td>
              <span id="th9">刘峰</span>
            </td>
          </tr>
          <tr>
            <td>
              <span id="th10">周志彬</span>
            </td>
            <td>
              <span id="th11">刘东东</span>
            </td>
            <td>
              <span id="th12">刘米峰</span>
            </td>
          </tr>
          <tr>
            <td>
              <span id="th13">易文斌</span>
            </td>
            <td>
              <span id="th14">陈启东</span>
            </td>
            <td>
              <span id="th15">尚可</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  </div>
      </Col>
    );
  }

}

Content.propTypes = {
  breadcrumbs: PropTypes.array
};

export default Content;
