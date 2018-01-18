// App下载及登录
import React from 'react';
import { List } from 'antd-mobile';

import AppDown1 from './imgs/appDown-1.jpg';
import AppDown2 from './imgs/appDown-2.jpg';
import AppDown3 from './imgs/appDown-3.jpg';
import AppDown4 from './imgs/appDown-4.jpg';
import AppDown5 from './imgs/appDown-5.jpg';

const Item = List.Item;

const OperateAppDownPage = () => (
  <div className="animated fadeInRight operate">
    <List>
      <Item>
        <div className="oper-title">在手机上下载“领投鸟理财”App使用</div>
        <div className="oper-desc">（a）注册成功！接下来就可以选择对应的平台开始下载领投鸟理财App了</div>
        <img src={AppDown1} />
        <div className="oper-desc">（b）苹果手机：点击苹果版本下载，然后点击右上角的“…”按钮， 再在弹出的底部菜单中选择“在Safari中打开”，即可自动跳转到App Store</div>
        <img src={AppDown2} />
        <img src={AppDown3} />
        <div className="oper-desc">（c）安卓手机：点击“安卓版本下载”会弹出如下窗口，选择“安全下载”将会跳转到应用市场 （不同型号的安卓手机可能会到不同的应用市场）下载App， 也可以选择“普通下载”直接下载App进行安装</div>
        <img src={AppDown4} />
        <div className="oper-desc">（d）打开领投鸟理财App，点击“我的账户”即弹出登录界面， 输入注册时填写的手机号，密码，以及图形验证码来登录</div>
        <img src={AppDown5} />
        <div className="oper-desc">（e）领投鸟理财的所有资金均由联动优势提供托管，平台本身不触碰资金，确保了资金的安全性。在投资之前， 用户需要先完成实名认证，同时会在联动优势开通资金托管账户</div>
      </Item>
    </List>
  </div>
);


export default OperateAppDownPage;
