// 鸟币说明
import React from 'react';
import { List } from 'antd-mobile';

import birdCoin1 from './imgs/birdCoin-1.jpg';

const Item = List.Item;

const OperateBirdCoinPage = () => (
  <div className="animated fadeInRight operate">
    <List>
      <Item>
        <div className="oper-title">什么是鸟币？</div>
        <div className="oper-desc">鸟币是领投鸟理财中的一种虚拟货币，它最主要的作用是在投资（不含新手标）中抵扣现金。</div>
        <div className="oper-desc">如下图中投资1000元，使用鸟币抵扣2.04元后， 实际只需支付997.96元，但待收益依然是按照1000元来计算，项目到期后，会得到1000元本金+6.11元。</div>
        <img src={birdCoin1} />
      </Item>
    </List>
  </div>
);

export default OperateBirdCoinPage;
