import React from 'react';
import wenhao from './imgs/wenhao.png';
import Moment from 'moment';
import './FinanceTimes.scss';

// 体验标
const TybFinanceItems = ({ finance }) => {
  const showExplainWindow = () => {
    window.LtnApp.showExplainWindow({ type: 'BirdCoin' });
  };
  return (
    <div className="items-content clearfix">
      <div className="item">
        <span>起息时间</span>
        <span>{finance.staRateDate}</span>
      </div>
      <div className="item">
        <span>收益方式</span>
        <span className="has-icon">{finance.repaymentType}
          <img src={wenhao} alt="wenhao" className="wenhao" onClick={showExplainWindow} /></span>
      </div>
    </div>
  );
};
const formatDate = (key) => {
  const months = Moment(key).month() + 1;
  const date = Moment(key).date();
  const fw = `${months}-${date}`;
  return fw;
};
const NormalItems = ({ finance }) => (
  <div className="normal-item-content">
    <div className="normal-wrap">
      <div className="circle-list">
        <div className="circle circle1">
          <p className="type">起息</p>
          <p className="out"><span className="inner" /></p>
          <p className="date">{formatDate(finance.staRateDate)}</p>
        </div>
        <div className="circle circle2">
          <p className="type">结息</p>
          <p className="out"><span className="inner" /></p>
          <p className="date">{formatDate(finance.auctionDate)}</p>
        </div>
        <div className="circle circle3">
          <p className="type">还款</p>
          <p className="out"><span className="inner" /></p>
          <p className="date">{formatDate(finance.repaymentDate2)}</p>
        </div>
      </div>
    </div>
  </div>
);

const FinanceTimes = ({ finance }) => (
  <div className="finance-times-content">
    {
      finance.productType === 'TYB' ?
        <TybFinanceItems finance={finance} />
      :
        <NormalItems finance={finance} />
    }

  </div>
);

export default FinanceTimes;
