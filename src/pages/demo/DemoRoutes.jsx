// 登录、注册、忘记密码、企业注册  模块路由
import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import DemoListPage from './DemoListPage';
import Base64Page from './Base64Page';
import NativeAppApiPage from './NativeAppApiPage';

const DemoRoutes = () => (
  <Switch>
    <Route path="/demo/list" component={DemoListPage} />
    <Route path="/demo/base" component={Base64Page} />
    <Route path="/demo/appapi" component={NativeAppApiPage} />
    <Redirect form="/demo" to="/demo/list" />
  </Switch>
);

export default DemoRoutes;
