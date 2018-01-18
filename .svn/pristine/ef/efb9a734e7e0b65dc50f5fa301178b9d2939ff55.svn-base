// 理财概述信息
import React from 'react';
import { Motion, spring } from 'react-motion';
import lodash from 'lodash';
import numeral from 'numeral';
import './FinaneOverview.scss';


// 预计年化
const YearRate = props => (
  <p className="year-rate">
    {
      props.annualIncomeTextArray.map(text => (
        <span key={lodash.uniqueId(text)}>{text}</span>
      ))
    }
  </p>
);
// 标的剩余金额
const ProductRemainAmount = props => (
  <div className="flex-item">
    <span>剩余金额</span>
    <p>
      <Motion
        defaultStyle={{ position: 0 }}
        style={{ position: spring(props.productRemainAmountFormat[0], { stiffness: 80, damping: 20 }) }}
      >
        {value => <span className="num">{
          props.productRemainAmountFormat[1] === '元' ?
          numeral(value.position).format('0,0') :
          numeral(value.position).format('0,0.00')}</span>}
      </Motion>
      <span className="unit">{props.productRemainAmountFormat[1]}</span></p>
  </div>
);
// 标的标签
const FinanceTag = props => (
  <div className="tag-wrap">
    {
      props.tags.map(tag => (
        <span key={lodash.uniqueId(tag)}>{tag}</span>
      ))
    }
  </div>
);

// 体验标
const TybOverview = ({ finance }) => (
  <div className="product-main-info-wrap ytb-main-info">
    <div className={'product-main-info'} >
      <h4>预期年化</h4>
      <YearRate annualIncomeTextArray={finance.annualIncomeTextArray} />
      <FinanceTag tags={finance.tags} />
      <div className="flex-wrap clearfix">
        <div className="flex-item">
          <span>投资期限 </span>
          <p>
            <span className="num">{finance.convertDay}</span>
            <span className="unit">天</span></p>
        </div>
        <div className="flex-item">
          <span>起投金额</span>
          <p>
            <span className="num">{numeral(6).format('0,0.00')}</span>
            <span className="unit">{'万'}</span></p>
        </div>
      </div>
    </div>
  </div>
);

// 非体验标
const UnTybOverview = ({ finance }) => (
  <div className="product-main-info-wrap">
    <div className={'product-main-info'} >
      <h4>预期年化</h4>
      <YearRate annualIncomeTextArray={finance.annualIncomeTextArray} />
      <FinanceTag tags={finance.tags} />
      <div className="flex-wrap clearfix">
        <div className="flex-item">
          <span>投资期限 </span>
          <p>
            <Motion
              defaultStyle={{ position: 0 }}
              style={{ position: spring(finance.convertDay, { stiffness: 80, damping: 20 }) }}
            >
              {value => <span className="num">{numeral(value.position).format('0,0')}</span>}
            </Motion>
            <span className="unit">天</span></p>
        </div>
        <ProductRemainAmount productRemainAmountFormat={finance.productRemainAmountFormat} />
      </div>
    </div>
    <div>
      <Motion defaultStyle={{ position: 80 }} style={{ position: spring(0, { stiffness: 60, damping: 40 }) }}>
        {value => <div
          className="wave-animate" style={{
            backgroundPosition: `${value.position}%`
          }}
        />}
      </Motion>
      <Motion
        defaultStyle={{ bottom: 0, right: 35, width: 8, height: 8, opacity: 1 }} style={{
          bottom: spring(100, { stiffness: 80, damping: 40 }),
          right: spring(25, { stiffness: 80, damping: 40 }),
          width: spring(16, { stiffness: 100, damping: 20 }),
          height: spring(16, { stiffness: 100, damping: 20 }),
          opacity: spring(0, { stiffness: 60, damping: 40 })
        }}
      >
        {value => <span
          className="bubble-animate" style={{
            bottom: value.bottom,
            right: `${value.right}%`,
            width: `${value.width}px`,
            height: `${value.height}px`,
            opacity: value.opacity
          }}
        /> }
      </Motion>
      <Motion
        defaultStyle={{ bottom: 10, right: 30, width: 14, height: 14, opacity: 1 }} style={{
          bottom: spring(140, { stiffness: 100, damping: 40 }),
          right: spring(13, { stiffness: 100, damping: 30 }),
          width: spring(28, { stiffness: 100, damping: 20 }),
          height: spring(28, { stiffness: 100, damping: 20 }),
          opacity: spring(0, { stiffness: 80, damping: 40 })
        }}
      >
        {value => <span
          className="bubble-animate" style={{
            bottom: value.bottom,
            right: `${value.right}%`,
            width: `${value.width}px`,
            height: `${value.height}px`,
            opacity: value.opacity
          }}
        /> }
      </Motion>
      <Motion
        defaultStyle={{ fontSize: 0, opacity: 0, borderRadius: 0, width: 0, right: 10 }} style={{
          fontSize: spring(30, { stiffness: 80, damping: 40 }),
          right: spring(6.5, { stiffness: 80, damping: 40 }),
          width: spring(100, { stiffness: 80, damping: 40 }),
          opacity: spring(1, { stiffness: 80, damping: 40 }),
          borderRadius: spring(40, { stiffness: 100, damping: 20 })
        }}
      >
        {value => <span
          className="percent-animate" style={{
            fontSize: value.fontSize,
            right: `${value.right}%`,
            width: `${value.width / 100}rem`,
            opacity: value.opacity,
            borderRadius: value.borderRadius
          }}
        >{`${finance.progress}%`}</span> }
      </Motion>

    </div>
  </div>
);

// 标的概要信息
const FinanceOverview = ({ finance }) => (
  <div>
    {
    finance.productType === 'TYB' ? (
      <TybOverview finance={finance} />
    ) : (
      <UnTybOverview finance={finance} />
    )
  }
  </div>
);

export default FinanceOverview;
