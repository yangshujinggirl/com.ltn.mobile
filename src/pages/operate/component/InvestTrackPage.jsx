// 投资跟踪
import React from 'react';
import { List } from 'antd-mobile';

import InvestTrack1 from './imgs/investTrack-1.jpg';
import InvestTrack2 from './imgs/investTrack-2.jpg';
import InvestTrack3 from './imgs/investTrack-3.jpg';

const Item = List.Item;

const OperateInvestTrackPage = () => (
  <div className="animated fadeInRight operate">
    <List>
      <Item>
        <div className="oper-title">投资后说明：</div>
        <div className="oper-desc">当天投资完成后您可以在“我的账户”-“我的投资”-“投标中”中查看到您刚刚投资过的理财产品情况<br/>产品开始计息后，可以在“计息中”查看您投资过的理财产品的情况<br/>之后可以在“还款中”及“已还款”选项中查看投资过的理财产品情况</div>
        <img src={InvestTrack1} />
        <img src={InvestTrack2} />
        <img src={InvestTrack3} />
      </Item>
    </List>
  </div>
);

export default OperateInvestTrackPage;
