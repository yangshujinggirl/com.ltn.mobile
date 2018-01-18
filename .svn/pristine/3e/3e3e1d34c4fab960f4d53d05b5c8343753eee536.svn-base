// 唤醒app，路由
import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import WakeUpAppPage from './WakeUpAppPage';

const DemoRoutes = () => (
  <Switch>
    <Route path="/wakeupapp/detail/:type/:params" component={WakeUpAppPage} />
    <Route path="/wakeupapp/detail/:type" component={WakeUpAppPage} />
    <Redirect form="/wakeupapp" to="/wakeupapp/list" />
  </Switch>
);

export default DemoRoutes;
