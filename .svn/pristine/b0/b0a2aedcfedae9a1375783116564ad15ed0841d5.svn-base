/* eslint class-methods-use-this: 0*/
import React from 'react';
import { Button } from 'antd-mobile';

import {
  getSessionKey,
  getUserInfo,
  login,
  signUp,
  share,
  gotoAppPage,
  gotoWebPage,
  gotoProductDetail,
  statusBarAppearanceUpdate,
  setNavigationBarHidden,
  openCunGuan
} from '../../common/scripts/util';

class NativeAppApiPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sid: null,
      userInfo: null
    };
  }

  updateSessionKey() {
    this.setState({
      sid: getSessionKey()
    });
  }
  updateUserInfo() {
    this.setState({
      userInfo: getUserInfo()
    });
  }

  gologin(url) {
    login(url);
  }
  gosignUp(url) {
    signUp(url);
  }
  goshare(config) {
    share(config);
  }
  testgotoAppPage(type) {
    gotoAppPage(type);
  }
  testgotoWebPage(url) {
    gotoWebPage(url);
  }
  testgotoProductDetail(productId) {
    gotoProductDetail(productId);
  }
  teststatusBarAppearanceUpdate(statusBarStyle) {
    statusBarAppearanceUpdate(statusBarStyle);
  }
  testsetNavigationBarHidden(statusBarStyle) {
    setNavigationBarHidden(statusBarStyle);
  }
  testDepostModal() {
    openCunGuan('http:/www.baidu.com');
  }

  render() {
    return (
      <div className="native-app-page">
        <p>
          <Button onClick={() => this.updateSessionKey()}>获取getSessionKey</Button>
        </p>
        <p>
          <Button onClick={() => this.updateUserInfo()}>获取用户信息</Button>
        </p>
        <p>
          <Button onClick={() => this.gologin()}>跳转登录，回来原始页面 不会刷新</Button>
        </p>
        <p>
          <Button onClick={() => this.gologin('http://www.baidu.com')}>跳转登录，回来刷新到百度</Button>
        </p>
        <p>
          <Button onClick={() => this.gosignUp()}>跳转注册，回来原始页面 不会刷新</Button>
        </p>
        <p>
          <Button onClick={() => this.gosignUp('http://www.baidu.com')}>跳转注册，回来刷新到百度</Button>
        </p>
        <p>
          <Button
            onClick={() => this.goshare({
              url: 'https://www.lingtouniao.com',
              imgUrl: 'https://www.lingtouniao.com/native/src/app/image/icon/logo.png',
              title: '测试分享 --标题',
              content: '这是一个测试--内容'
            })}
          >分享</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoMyInvestment')}>跳转 原生 ：我的投资</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoMyTask')}>跳转 原生 ：我的任务</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoBeginnerDivision')}>跳转 原生 ：新手专区</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoAdvancedDivision')}>跳转 原生 ：进阶专区</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoActivityDivision')}>跳转 原生 ：活动专区</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoProductList')}>跳转 原生 ：项目列表Tab</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoPartner')}>跳转 原生 ：合伙人</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoIncometSatement')}>跳转 原生 ：收益明细</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoTicketList')}>跳转 原生 ：理财金券</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoMyAccount')}>跳转 原生 ：账户中心Tab</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoMyHome')}>跳转 原生 ：首页Tab</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoDeposit')}>跳转 原生 ：充值</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('showGoldenEgg')}>跳转 原生 ：砸蛋</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('gotoDiscovery')}>跳转 原生 :发现Tab</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('helpCenter')}>跳转 原生 :帮助中心 </Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('signin')}>跳转 原生 :签到 </Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoAppPage('integralStore')}>跳转 原生 :积分商城 </Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoWebPage('https://www.lingtouniao.com')}>跳转web页面</Button>
        </p>
        <p>
          <Button onClick={() => this.testgotoProductDetail(1006633)}>跳转标的详情页面，1006633</Button>
        </p>
        <p>
          <Button onClick={() => this.teststatusBarAppearanceUpdate(0)}>顶部导航改为黑色</Button>
        </p>
        <p>
          <Button onClick={() => this.teststatusBarAppearanceUpdate(1)}>顶部导航改为白色</Button>
        </p>
        <p>
          <Button onClick={() => this.testsetNavigationBarHidden(0)}>顶部导航不隐藏</Button>
        </p>
        <p>
          <Button onClick={() => this.testsetNavigationBarHidden(1)}>顶部导航隐藏</Button>
        </p>
        <p>
          <Button onClick={() => this.testDepostModal()}>银行存管弹窗</Button>
        </p>


        <h3>结果显示区域</h3>
        <div>
          <p>
            `sid:${ this.state.sid || '没拿到sid' }`
          </p>
          <p>
            `userInfo:${ JSON.stringify(this.state.userInfo || { message: '没拿到' }) }`
          </p>
        </div>
      </div>
    );
  }

}

export default NativeAppApiPage;
