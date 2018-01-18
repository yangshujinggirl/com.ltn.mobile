// 项目入口文件
/* eslint react/no-children-prop: 0 */
// 处理移动端点击延迟
import 'babel-polyfill';
import FastClick from 'fastclick';
import React from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Util from './Util';

// 导入通用样式
import './common/style/common.scss';
import './common/style/normalize.css';
import './common/style/animate.scss';

// 最新的页面配置方式
import {
  HomeRoutesLoader,
  WakeUpAppRoutesLoader,
  FaqRoutesLoader,
  DemoRoutesLoader,
  StaticRoutesLoader,
  ProtocolRoutesLoader,
  OperateRoutesLoader,
  SignInRoutesLoader,
  FinanceRoutesLoader,
  IntegralRoutesLoader,
  LoanerInfoRoutesLoader
} from './pages/PageLoader';

// 设置fastclick
FastClick.attach(document.body, {});

const RoutesWrap = () => (
  <Router history={history}>
    <Route
      children={({ location }) => {
        Util.updatePageTitle(location);
        return (
          <Switch>
            <Route exact path="/" component={HomeRoutesLoader} />
            <Route path="/faq" component={FaqRoutesLoader} />
            <Route path="/protocol" component={ProtocolRoutesLoader} />
            <Route path="/static" component={StaticRoutesLoader} />
            <Route path="/finance" component={FinanceRoutesLoader} />
            <Route path="/operate" component={OperateRoutesLoader} />
            <Route path="/signin" component={SignInRoutesLoader} />
            <Route path="/wakeupapp" component={WakeUpAppRoutesLoader} />
            <Route path="/demo" component={DemoRoutesLoader} />
            <Route path="/integral" component={IntegralRoutesLoader} />
            <Route path="/loanerinfo" component={LoanerInfoRoutesLoader} />
          </Switch>
        );
      }}
    />
  </Router>
);

ReactDom.render(
  <RoutesWrap />,
    document.getElementById('app')
);
