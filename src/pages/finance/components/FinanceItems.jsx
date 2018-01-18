// 理财 主要信息类别
import React from 'react';
import numeral from 'numeral';
import wenhao from './imgs/wenhao.png';
import './FinanceItems.scss';

// 体验标
const TybFinanceItems = ({ finance }) => {
  const showExplainWindow = () => {
    window.LtnApp.showExplainWindow({ type: 'BirdCoin' });
  };
  return (
    <div className="items-wrap clearfix">
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

// 非体验标
const UnTybFinanceItems = ({ finance }) => (
  <div className="items-wrap clearfix">
    <div className="item">
      <span>起息时间</span>
      <span>{finance.staRateDate}</span>
    </div>
    <div className="item">
      <span>项目总额</span>
      <span>{numeral(finance.productTotalAmount / 10000).format('0,0.00')}万</span>
    </div>
    <div className="item">
      <span>收益方式</span>
      <span>{finance.repaymentType}</span>
    </div>
  </div>
);

const FinanceItems = ({ finance }) => (
  <div className="finance-items-wrap">
    {
      finance.productType === 'TYB' ? (
        <TybFinanceItems finance={finance} />
      ) : (
        <UnTybFinanceItems finance={finance} />
      )
    }
  </div>
  );


export default FinanceItems;
