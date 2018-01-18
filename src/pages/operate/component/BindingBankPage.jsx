// 绑定银行卡
import React from 'react';
import { List } from 'antd-mobile';

import BindingBank1 from './imgs/bindingBank-1.jpg';
import BindingBank2 from './imgs/bindingBank-2.jpg';
import BindingBank3 from './imgs/bindingBank-3.jpg';
import BindingBank4 from './imgs/bindingBank-4.jpg';
import BindingBank5 from './imgs/bindingBank-5.jpg';

const Item = List.Item;

const OperateBindingBankPage = () => (
  <div className="animated fadeInRight operate">
    <List>
      <Item>
        <div className="oper-title">步骤一：</div>
        <div className="oper-desc">在充值投资之前还需要绑定银行卡，方可使用银行卡进行充值。根据App的引导进入下图页面， 也可以从“我的账户”-“账户设置”-“银行卡认证”进入。</div>
        <img src={BindingBank1} />
        <img src={BindingBank2} />
        <img src={BindingBank3} />
      </Item>
    </List>
    <List>
      <Item>
        <div className="oper-title">步骤二：</div>
        <div className="oper-desc">选择常用的银行卡，并输入银行卡号，只能使用储蓄卡或借记卡，不能使用信用卡。</div>
        <img src={BindingBank3} />
      </Item>
    </List>
    <List>
      <Item>
        <div className="oper-title">步骤三：</div>
        <div className="oper-desc">输入支付密码（不是登录密码）以及短信验证码，即可完成银行卡的绑定。</div>
        <img src={BindingBank5} />
      </Item>
    </List>
  </div>
);

export default OperateBindingBankPage;
