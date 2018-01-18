// 帮助中心 路由集合组件
import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import SafeEnsurePage from './SafeEnsurePage';
import InvestSuccessPage from './InvestSuccessPage';
import PartnerAdvancePage from './PartnerAdvancePage';
import PlatIntroductionPage from './PlatIntroductionPage';

const StaticRoutes = () => (
  <div className="static-page-wrap">
    <Switch>
      <Route path="/static/safe" component={SafeEnsurePage} />
      <Route path="/static/investsuccess" component={InvestSuccessPage} />
      <Route path="/static/partneradvance/:key" component={PartnerAdvancePage} />
      <Route path="/static/plantinfo" component={PlatIntroductionPage} />
      <Redirect from="/static/partneradvance" to="/static/partneradvance/1" />
    </Switch>
  </div>
);

export default StaticRoutes;
