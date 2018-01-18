// 协议相关路由
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import ProtocolPage from './ProtocolPage';

const ProtocolRoutes = () => (
  <Switch>
    <Route exact path="/protocol/:type" component={ProtocolPage} />
  </Switch>
);

export default ProtocolRoutes;
