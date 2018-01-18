// 实名认证
import React from 'react';
import { List } from 'antd-mobile';

import RealName1 from './imgs/realName-1.jpg';
import RealName2 from './imgs/realName-2.jpg';
import RealName3 from './imgs/realName-3.jpg';
import RealName4 from './imgs/realName-4.jpg';
import RealName5 from './imgs/realName-5.jpg';
import RealName6 from './imgs/realName-6.jpg';

const Item = List.Item;

const OperateRealNamePage = () => (
  <div className="animated fadeInRight operate">
    <List>
      <Item>
        <div className="oper-title">步骤一：</div>
        <div className="oper-desc">根据App的引导进入下图页面，也可以从“我的账户”-“账户设置”-“实名认证”进入， 填写真实姓名与身份证信息，身份证最后一位如果是X，就填写X，大小写均可。</div>
        <img src={RealName1} />
        <img src={RealName2} />
        <img src={RealName3} />
        <img src={RealName4} />
      </Item>
    </List>
    <List>
      <Item>
        <div className="oper-title">步骤二：</div>
        <div className="oper-desc">确认个人信息，只需要输入最底部的短信验证码即可。</div>
        <img src={RealName5} />
      </Item>
    </List>
    <List>
      <Item>
        <div className="oper-title">步骤三：</div>
        <div className="oper-desc">设置支付密码，此密码将会在充值、提现、投资等操作时使用到，不同于登录密码，一定要牢记！</div>
        <img src={RealName6} />
      </Item>
    </List>
  </div>
);
export default OperateRealNamePage;
