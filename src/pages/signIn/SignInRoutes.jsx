// 签到
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

import SiginInPage from './SignInPage';
import PrizeRecordPage from './PrizeRecordPage';

const SignInRoutes = () => (
  <div className="signin-page-wrap">
    <Switch>
      <Route path="/signin/recordlist" component={PrizeRecordPage} />
      <Route path="/signin" component={SiginInPage} />
    </Switch>
  </div>
);

export default SignInRoutes;
