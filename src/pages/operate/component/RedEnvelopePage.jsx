// 红包领取及注册
import React from 'react';
import { List } from 'antd-mobile';

import Redenvelope1 from './imgs/redenvelope-1.jpg';
import Redenvelope2 from './imgs/redenvelope-2.jpg';
import Redenvelope3 from './imgs/redenvelope-3.jpg';
import Redenvelope4 from './imgs/redenvelope-4.jpg';
import Redenvelope5 from './imgs/redenvelope-5.jpg';

const Item = List.Item;

const OperateRedenvelopePage = () => (
  <div className="animated fadeInRight operate">
    <List>
      <Item>
        <div className="oper-title">1.通过好友分享的链接或者直接识别二维码进入领取红包界面</div>
        <div className="oper-desc">（a）直接点击链接进入页面</div>
        <img src={Redenvelope1} />
        <div className="oper-desc">（b）通过二维码进入领取红包界面</div>
        <img src={Redenvelope2} />
        <img src={Redenvelope3} />
      </Item>
    </List>
    <List>
      <Item>
        <div className="oper-title">2.输入手机号及验证码领取红包</div>
        <div className="oper-desc">（a）点击链接或者识别二维码之后会出现如下界面，您在方框内输入手机号， 按提示继续操作后即可领取60000元体验金及88元返现券 （推荐使用申请银行卡时在银行预留的手机号）</div>
        <img src={Redenvelope4} />
        <div className="oper-desc">（b）在第二行的输入框内输入右侧图片上显示的数字； 点击“获取短信验证码”来收取短信，并在左侧输入框内输入短信中的4位数验证码；最后，再设置登录密码，登录密码长度为6-18位，且必须同时包含数字和英文字母，比如“lingtouniao2016”；最后点击“注册领取红包”后， 就可以登录领投鸟理财App或官网查看自己的红包了。</div>
        <img src={Redenvelope5} />
      </Item>
    </List>
    <List>
      <Item>
        <div className="oper-desc oper-center">如在注册过程中遇到其他问题，<br />请联系我们的客服 400-999-9980</div>
      </Item>
    </List>
  </div>
);


export default OperateRedenvelopePage;
