// 帮助中心 路由集合组件
import React from 'react';
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import FaqListPage from './FaqListPage';
import FaqSignPage from './FaqSignPage';
import FaqBindPage from './FaqBindPage';
import FaqPasswordPage from './FaqPasswordPage';
import FaqSafePage from './FaqSafePage';
import FaqRechargePage from './FaqRechargePage';
import FaqProjectInfoPage from './FaqProjectInfoPage';
import FaqBirdcoinPage from './FaqBirdcoinPage';
import FaqTicketPage from './FaqTicketPage';
import FaqPartnerPage from './FaqPartnerPage';
import FaqBondPage from './FaqBondPage';
import FaqPointsPage from './FaqPointsPage';
import FaqQianDaoPage from './FaqQianDaoPage';

const FaqRoutes = () => (
  <div className="faq-center-warp">
    <Switch >
      <Route exact path="/faq/list" component={FaqListPage} />
      <Route exact path="/faq/sign" component={FaqSignPage} />
      <Route exact path="/faq/bind" component={FaqBindPage} />
      <Route exact path="/faq/password" component={FaqPasswordPage} />
      <Route exact path="/faq/safe" component={FaqSafePage} />
      <Route exact path="/faq/recharge" component={FaqRechargePage} />
      <Route exact path="/faq/projectInfo" component={FaqProjectInfoPage} />
      <Route exact path="/faq/birdCoin" component={FaqBirdcoinPage} />
      <Route exact path="/faq/tickits" component={FaqTicketPage} />
      <Route exact path="/faq/partner" component={FaqPartnerPage} />
      <Route exact path="/faq/bond" component={FaqBondPage} />
      <Route exact path="/faq/points" component={FaqPointsPage} />
      <Route exact path="/faq/qiandao" component={FaqQianDaoPage} />
      <Redirect from="/faq" to="/faq/list" />
    </Switch>
  </div>
);

export default FaqRoutes;
