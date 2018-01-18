// 理财模块路由
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import FinanceDetailController from './controllers/FinanceDetailController';
import ProjectDetailController from './controllers/ProjectDetailController';
import VipFinanceController from './controllers/VipFinanceController';
import VipFinanceSelectController from './controllers/VipFinanceSelectController';
import VipSuccessPageController from './controllers/VipSuccessPageController';

const FinanceRoutes = () => (
  <Switch>
    <Route exact path="/finance/:productId" component={FinanceDetailController} />
    <Route exact path="/finance/vip/:productId" component={VipFinanceController} />
    <Route exact path="/finance/vipselect/:productId" component={VipFinanceSelectController} />
    <Route exact path="/finance/project/:productId" component={ProjectDetailController} />
    <Route exact path="/finance/vipSuccess/:productId" component={VipSuccessPageController} />
  </Switch>
);

export default FinanceRoutes;
