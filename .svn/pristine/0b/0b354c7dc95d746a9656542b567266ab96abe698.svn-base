import React from 'react';
import { List } from 'antd-mobile';

import './Operate.scss';

const Item = List.Item;

const OperatePage = ({ history }) => {
  const showOperateDetail = router => ((e) => {
    e.stopPropagation();
    history.push(router);
  });

  const OperateListItems = [
    {
      id: '1',
      text: '红包领取及注册',
      router: '/operate/redEnvelope'
    }, {
      id: '2',
      text: 'App下载及登录',
      router: '/operate/appDown'
    }, {
      id: '3',
      text: '实名认证',
      router: '/operate/realName'
    }, {
      id: '4',
      text: '绑定银行卡',
      router: '/operate/bindingBank'
    }, {
      id: '5',
      text: '账户充值',
      router: '/operate/userRecharge'
    }, {
      id: '6',
      text: '投资理财',
      router: '/operate/investment'
    }, {
      id: '7',
      text: '投资跟踪',
      router: '/operate/investTrack'
    }, {
      id: '8',
      text: '鸟币说明',
      router: '/operate/birdCoin'
    }, {
      id: '9',
      text: '还款说明',
      router: '/operate/repayment'
    }
  ];

  return (
    <div className="animated fadeInRight">
      <List>
        {OperateListItems.map((x, i) => (
          <Item arrow="horizontal" key={x.id} onClick={showOperateDetail(x.router)}>{i + 1}、{x.text}</Item>
        ))}
      </List>
    </div>
  );
};

export default OperatePage;
