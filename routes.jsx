/**
 * DiGiHealth
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';
// UI
import App from './containers/App';
import Login from './containers/Login';
import Home from './containers/Home';
import SurgicalApplication from './containers/SurgicalApplication';
import SurgerySchedule from './containers/SurgerySchedule';
import PreoperativeVisit from './containers/PreoperativeVisit';
import IntraoperativeRecord from './containers/IntraoperativeRecord';
import RecoveryRecord from './containers/RecoveryRecord';
import OperatingRoom from './containers/OperatingRoom';
import PostoperativeVisits from './containers/PostoperativeVisits';
import PersonnelManagement from './containers/PersonnelManagement';
import IntraoperativeInspection from './containers/IntraoperativeInspection';
import SuppliesManagement from './containers/SuppliesManagement';
import CostStatistics from './containers/CostStatistics';
import ScientificInquiry from './containers/ScientificInquiry';
import StatisticalInquiry from './containers/StatisticalInquiry';
import Surgery from './containers/Surgery';
import Patient from './containers/Patient';

export default (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="login" path="/login" handler={Login} />
    <Route name="surgical_application" path="/surgical_application" handler={SurgicalApplication} />
    <Route name="surgery_schedule" path="/surgery_schedule" handler={SurgerySchedule} />
    <Route name="preoperative_visit" path="/preoperative_visit" handler={PreoperativeVisit} />
    <Route name="intraoperative_record" path="/intraoperative_record" handler={IntraoperativeRecord} />
    <Route name="recovery_record" path="/recovery_record" handler={RecoveryRecord} />
    {/* 麻醉记录单 */}
    {/*} <Route name="operating_room" path="/operating_room" handler={OperatingRoom} /> */}
    <Route name="postoperative_visits" path="/postoperative_visits" handler={PostoperativeVisits} />
    <Route name="personnel_management" path="/personnel_management" handler={PersonnelManagement} />
    <Route name="intraoperative_inspection" path="/intraoperative_inspection" handler={IntraoperativeInspection} />
    <Route name="supplies_management" path="/supplies_management" handler={SuppliesManagement} />
    <Route name="cost_statistics" path="/cost_statistics" handler={CostStatistics} />
    <Route name="scientific_inquiry" path="/scientific_inquiry" handler={ScientificInquiry} />
    <Route name="statistical_inquiry" path="/statistical_inquiry" handler={StatisticalInquiry} />
    <Route name="patient" path="/patient/:id" handler={Patient} />
    <Route name="surgery" path="/surgery/:id" handler={Surgery} />
  </Route>
);
