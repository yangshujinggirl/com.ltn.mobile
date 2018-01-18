/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-webpack-loader-syntax: 0 */
/* eslint import/extensions: 0 */
/* eslint import/first: 0 */
/* eslint import/no-unresolved: 0 */
import React from 'react';
import ModLoader from './ModLoader';
import WakeUpAppRoutes from 'bundle-loader?lazy&name=[name]!./wakeupapp/WakeUpAppRoutes';
import FaqRoutes from 'bundle-loader?lazy&name=[name]!./faq/FaqRoutes';
import StaticRoutes from 'bundle-loader?lazy&name=[name]!./static/StaticRoutes';
import ProtocolRoutes from 'bundle-loader?lazy&name=[name]!./protocol/ProtocolRoutes';
import OperateRoutes from 'bundle-loader?lazy&name=[name]!./operate/OperateRoutes';
import HomeRoutes from 'bundle-loader?lazy&name=[name]!./home/HomeRoutes';
import SignInRoutes from 'bundle-loader?lazy&name=[name]!./signIn/SignInRoutes';
import FinanceRoutes from 'bundle-loader?lazy&name=[name]!./finance/FinanceRoutes';
import DemoRoutes from 'bundle-loader?lazy&name=[name]!./demo/DemoRoutes';
import IntegralRoutes from 'bundle-loader?lazy&name=[name]!./integral/IntegralRoutes';
import LoanerInfoRoutes from 'bundle-loader?lazy&name=[name]!./loanerInfo/LoanerInfoRoutes';

export const WakeUpAppRoutesLoader = () => (
  <ModLoader mod={WakeUpAppRoutes} />
);
export const FaqRoutesLoader = () => (
  <ModLoader mod={FaqRoutes} />
);
export const StaticRoutesLoader = () => (
  <ModLoader mod={StaticRoutes} />
);
export const ProtocolRoutesLoader = () => (
  <ModLoader mod={ProtocolRoutes} />
);
export const OperateRoutesLoader = () => (
  <ModLoader mod={OperateRoutes} />
);
export const HomeRoutesLoader = () => (
  <ModLoader mod={HomeRoutes} />
);
export const SignInRoutesLoader = () => (
  <ModLoader mod={SignInRoutes} />
);
export const FinanceRoutesLoader = () => (
  <ModLoader mod={FinanceRoutes} />
);
export const IntegralRoutesLoader = () => (
  <ModLoader mod={IntegralRoutes} />
);
export const LoanerInfoRoutesLoader = () => (
  <ModLoader mod={LoanerInfoRoutes} />
);

export const DemoRoutesLoader = () => {
  if (window.location.href.indexOf('www.lingtouniao.com') !== -1) {
    return (<ModLoader mod={() => (<div>404</div>)} />);
  }
  return (<ModLoader mod={DemoRoutes} />);
};
