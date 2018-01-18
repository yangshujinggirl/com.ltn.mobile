// 投资成功结果页面  InvestSuccessPage
import React from 'react';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import './static.scss';

const InvestSuccessPage = () => (
  <div className="invest-success-wrap animated fadeInRight">
    <WingBlank>
      <WhiteSpace size="xl" />
      <Button className="ltn-btn">确认</Button>
    </WingBlank>
  </div>);

export default InvestSuccessPage;
