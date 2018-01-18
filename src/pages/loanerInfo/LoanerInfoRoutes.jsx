import React from 'react';

import {
  Switch,
  Route
} from 'react-router-dom';

import LoanerInfoPage from './LoanerInfoPage';

const LoanerInfoRoutes = () => (
  <Switch>
    <Route path="/loanerinfo/:productId" component={LoanerInfoPage} />
  </Switch>
);

export default LoanerInfoRoutes;
