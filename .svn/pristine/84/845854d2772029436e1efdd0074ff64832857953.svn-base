import React from 'react';
import {
  Toast
} from 'antd-mobile';
import ApiClient from '../../common/ApiClient';
import Util from '../../Util';
import './IntegralPage.scss';

import bannerJpg from './imgs/banner.jpg';
import iconJpg0 from './imgs/icon0.png';
import iconJpg1 from './imgs/icon1.png';
import iconJpg2 from './imgs/icon2.png';
import iconCJpg0 from './imgs/iconC0.png';
import iconCJpg1 from './imgs/iconC1.png';
import iconCJpg2 from './imgs/iconC2.png';
import iconCJpg3 from './imgs/iconC3.png';


class IntegralPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClick: false
    };
  }
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo() {
    ApiClient.getUserInfo()
    .then((data) => {
      if (data.data.certification == '0' || data.data.bankAuthStatus == '0') {
        this.setState({
          isClick: true
        });
      }
    }, (error) => {
      if (error.resultCode === '10000006') {
        window.LtnApp.login({
          url: window.location.href
        });
      } else {
        Toast.fail(error.resultMessage, 2);
      }
    });
  }
  goNewUser() {
    window.LtnApp.gotoAppPage({ type: 'gotoBeginnerDivision' });
  }
  goProduct() {
    window.LtnApp.gotoAppPage({ type: 'gotoProductList' });
  }
  goSignIn() {
    window.LtnApp.gotoAppPage({ type: 'signin' });
  }
  goIntegra() {
    window.LtnApp.gotoAppPage({ type: 'integralStore' });
  }

  render() {
    return (
      <div className="integral-page-content">
        <img src={bannerJpg} alt="banner" />
        <div className="part-one part-same">
          <div className="part-wrap">
            <p>
              积分是用户在使用领投鸟理财过程中，参与签到、投资等方式给予的奖励，所得积分可在积分商城兑换使用。
            </p>
            <span className="top-arrow" />
          </div>
        </div>
        <div className="part-two part-same">
          <div className="part-wrap">
            <p className="part-title">小积分 大用处</p>
            <div className="action-list">
              <div className="item">
                <span className="ims">
                  <img src={iconCJpg0} />
                </span>
                <p>加息券<br />返现券</p>
              </div>
              <div className="item">
                <span className="ims">
                  <img src={iconCJpg1} />
                </span>
                <p>手机充值<br />流量加时</p>
              </div>
              <div className="item">
                <span className="ims">
                  <img src={iconCJpg2} />
                </span>
                <p>海量商品<br />种类丰富</p>
              </div>
              <div className="item">
                <span className="ims">
                  <img src={iconCJpg3} />
                </span>
                <p>积分签到<br />抽奖有礼</p>
              </div>
            </div>
          </div>
        </div>
        <div className="part-thr part-same">
          <div className="part-wrap">
            <p className="part-title">玩赚积分全攻略</p>
            <div>
              <div className="item">
                <div className="l-icon"><img src={iconJpg0} /></div>
                <div className="r-cont">
                  <p className="tt">新手赚积分</p>
                  <p>注册&nbsp;&nbsp;&nbsp;&nbsp;+20</p>
                  <p>首次实名绑卡&nbsp;&nbsp;&nbsp;&nbsp;+100</p>
                  {
                    this.state.isClick ?
                      <span className="btn" onClick={this.goNewUser}>去赚积分</span>
                    :
                      <span className="btn disable">去赚积分</span>
                  }
                </div>
              </div>
              <div className="item">
                <div className="l-icon"><img src={iconJpg1} /></div>
                <div className="r-cont">
                  <p className="tt">签到赚积分</p>
                  <p>每日签到&nbsp;&nbsp;&nbsp;&nbsp;+2</p>
                  <p>连续7天额外加&nbsp;&nbsp;&nbsp;&nbsp;+10</p>
                  <p>累计7天额外加&nbsp;&nbsp;&nbsp;&nbsp;+100</p>
                  <span className="btn" onClick={this.goSignIn}>去赚积分</span>
                </div>
              </div>
              <div className="item">
                <div className="l-icon"><img src={iconJpg2} /></div>
                <div className="r-cont">
                  <p className="tt">投资赚积分</p>
                  <span className="btn" onClick={this.goProduct}>去赚积分</span>
                </div>
                <div className="b-text">
                  <p>
                    1、常规积分=投资金额×标的期限（天）/5000
                  </p>
                  <p>2、加速积分</p>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>投资类型</th>
                      <th>积分倍数</th>
                      <th>备注</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>新手标</td>
                      <td>5</td>
                      <td>--</td>
                    </tr>
                    <tr>
                      <td>普通标</td>
                      <td>5</td>
                      <td>仅限首笔</td>
                    </tr>
                    <tr>
                      <td>第1次<br />还款后首笔复投</td>
                      <td>1.1</td>
                      <td rowSpan="5">
                        <p className="row-con">
                          1.还款后次日24点之前投资方可享受积分翻倍，还款后若未在规定时间内复投，所获积分按常规积分重新开始计算；<br /><br />
                          2.如当天有多笔还款，仅限首笔投资享积分翻倍。
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>第2-3次<br />还款后首笔复投</td>
                      <td>1.2</td>
                    </tr>
                    <tr>
                      <td>第4-6次<br />还款后首笔复投</td>
                      <td>1.3</td>
                    </tr>
                    <tr>
                      <td>第7-10次<br />还款后首笔复投</td>
                      <td>1.4</td>
                    </tr>
                    <tr>
                      <td>第10+N次<br />还款后首笔复投</td>
                      <td>1.5</td>
                    </tr>
                  </tbody>
                </table>
                <p>注：转让标、体验标除外</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">本规则最终解释权归领投鸟平台所有</div>
        <div className="btn-wrap">
          <span className="duihuan" onClick={this.goIntegra}>立即兑换</span>
        </div>
      </div>
    );
  }
}

export default IntegralPage;
