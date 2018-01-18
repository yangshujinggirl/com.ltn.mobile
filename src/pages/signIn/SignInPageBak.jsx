//  签到页面
import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import { StaggeredMotion, spring } from 'react-motion';
import { Toast, Modal } from 'antd-mobile';
import lodash from 'lodash';
import Item from './Item';
import { signHistory, sign } from './SignInService';

import {
  gotoAppPage
} from '../../common/scripts/util';

import './SignInPage.scss';

import arrowJpg from './img/arrow.png';
import eggJpg from './img/egg.png';
import eggHI from './img/hi.png';
import title from './img/title.png';

// 导航
class SignNav extends React.Component {
  popToRootController() {
    window.LtnApp.popToRootController();
  }
  render() {
    return (
      <div className="sign-nav-wrap">
        <img src={arrowJpg} alt="arrow" onClick={this.popToRootController} className="icon-arrow" />
        <p className="nav-titile">签到领奖品</p>
        <Link to="/sigin/prizerecord" className="recorad-link">获奖记录</Link>
      </div>
    );
  }
}


class SignInPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAni: false, // 是否显示加积分动画，控制切换的时候动画的显示
      ruleModal: false, // 规则弹出层
      signResEgg: false, // 获取砸蛋机会，弹出层
      signResTz: false, // 获取 投资机会 ，弹出层
      sumDays: 0, // 签到总天数
      currentSigin: false, // 当天签到是否完成
      queryIndex: Moment().month(), // 当前查询的序号、月份
      currentMoment: Moment(), // 当前的日期 默认值
      defaultStyles: [], // 月份卡牌切换默认样式
      actIndex: Moment().month(), // 显示的月份
      index: 0,  //  滑动触发的月份
      monthArry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // 月份初始化数据
      clientWidth: document.body.clientWidth, // 页面宽度
      signDates: [], // 当前月份，签到的日期
      rewardDistributions: [] // 当前月份奖品
    };
  }

  componentWillMount() {
    // 初始化样式
    const styles = this.state.monthArry.map((item, i) => ({
      left: (this.state.clientWidth * 0.075) + (i * (this.state.clientWidth * 0.87)),
      height: 550,
      top: 50,
      boxShadow: 0
    }));
    this.setState({
      defaultStyles: styles
    });
    this.upSignHistory();
  }
    // 处理奖品
  getRewardArray(rewardDistributions) {
    return rewardDistributions.map(obj => obj.cumulativeDays);
  }
  // 计算每个月对应的日期，和星期相关
  getDay(month) {
    const temCurrentMoment = lodash.cloneDeep(this.state.currentMoment);
    const moment = temCurrentMoment.set('month', month).set('date', '1'); // 当前月 第一天
    const weekForFirtDayOfMonth = moment.day();
    const totalDaysOfMonth = moment.daysInMonth();
    const monthArray = [];
    const weekArray = [];
    let i = 1;
    while (i <= totalDaysOfMonth) {
      monthArray.push({
        day: i
      });
      i += 1;
    }
    i = 0;
    while (i < weekForFirtDayOfMonth) {
      weekArray.push({
        day: 0
      });
      i += 1;
    }
    return lodash.concat(weekArray, monthArray);
  }

  getStyles(prevInterpolatedStyles) {
    const styles = prevInterpolatedStyles.map((style, i) => this.getStyle(style, i));
    return styles;
  }

  getStyle(style, i) {
    let left;
    let height;
    let top;
    if (i === this.state.actIndex || i === (this.state.actIndex - 1) || i === (this.state.actIndex + 1)) {
      left = spring((this.state.clientWidth * 0.1) + ((i - this.state.actIndex) * (this.state.clientWidth * 0.85)));
      height = i === this.state.actIndex ? spring(600) : spring(550);
      top = i === this.state.actIndex ? spring(30) : spring(60);
    } else {
      left = (this.state.clientWidth * 0.1) + ((i - this.state.actIndex) * (this.state.clientWidth * 0.85));
      height = 300;
      top = 60;
    }
    let boxShadow;
    if (i === this.state.actIndex) {
      boxShadow = spring(30);
    } else {
      boxShadow = spring(0);
    }
    return {
      left,
      height,
      top,
      boxShadow
    };
  }

  changeArray(actIndex, index) {
    this.upSignHistory(actIndex);
    this.setState({
      showAni: false,
      actIndex,
      index
    });
  }
  // 更新签到数据
  upSignHistory(actIndex) {
    let queryIndex;
    if (!actIndex && actIndex !== 0) {
      queryIndex = this.state.actIndex;
    } else {
      queryIndex = actIndex;
    }
    const yerar = this.state.currentMoment.get('year');

    const month = (queryIndex + 1) > 9 ? `${queryIndex + 1}` : `0${queryIndex + 1}`;
    // 查询历史数据
    signHistory(`${yerar}${month}`)
    .then(({ currentTime, isSign, calendarDesc, signDates, rewardDistributions }) => {
      const moment = Moment(currentTime);
      this.setState({
        isSign, // 用户当天是否签到
        calendarDesc, // 日历描述语
        signDates, // 用户签到的日期
        rewardDistributions, // 日历对应的奖品
        queryIndex, // 查询的月份
        actIndex: (actIndex !== 0 && !actIndex) ? moment.month() : actIndex
      });
      // 固话本月数据
      if (!actIndex && actIndex !== 0) {
        const llArray = rewardDistributions.map((obj) => {
          const ll = obj.cumulativeDays - signDates.length;
          if (ll > 0) {
            return ll;
          }
          return 40;
        });
        this.setState({
          currentMoment: moment, // 矫正当前日期
          currentSigin: !!isSign,
          llDay: lodash.min(llArray),
          sumDays: signDates.length
        });
        if (isSign === 0) {
          this.goSign();
        }
      }
    }, (err) => {
      Toast.fail(err.message);
    });
  }

  // 显示签到结果
  showSignRes(skipModel, rewardDesc) {
    // skipModel :ZND:砸鸟蛋 LCLB:理财列表 GB:关闭
    // rewardDesc : 中奖明细， html模板
    if (skipModel !== 'ZND') {
      this.setState({
        signResEgg: true
      });
    } else if (skipModel === 'LCLB') {
      this.setState({
        signResTz: true
      });
    }
  }
  closeEggModal() {
    this.setState({
      signResEgg: false
    });
  }
  closeTzModal() {
    this.setState({
      signResTz: false
    });
  }
  // 马上砸蛋
  goToZd() {
    this.closeEggModal();
    gotoAppPage('showGoldenEgg');
  }
  goToTz() {
    this.closeTzModal();
    gotoAppPage('gotoProductList');
  }
  // 签到
  goSign() {
    sign()
    .then(({ skipModel, rewardDesc }) => {
      this.showSignRes(skipModel, rewardDesc);
      this.setState({
        currentSigin: true,
        showAni: true,
        sumDays: this.state.sumDays + 1
      });
    }, (err) => {
      Toast.fail(err.message);
    });
  }
  // 签到 //TODO
  toggleRuleModal(ruleModal) {
    this.setState({
      ruleModal
    });
  }
  // 查看规则 //TODO
  // 查看兑奖记录 //TODO


  render() {
    return (
      <div className="signin-page">
        <SignNav />
        <div className="banner">
          <div className="mark" />
          <p className="sum-days">
            <img src={title} alt="本月累计签到" />
            <span>{this.state.sumDays}<i>天</i></span>
          </p>
        </div>

        <StaggeredMotion
          defaultStyles={this.state.defaultStyles}
          styles={prevInterpolatedStyles => this.getStyles(prevInterpolatedStyles)}
        >
          {interpolatingStyles =>
            <div className="data-items">
              {interpolatingStyles.map((style, i) =>
                <Item
                  showAni={this.state.showAni}
                  currentSigin={this.state.currentSigin}
                  index={i}
                  month={i + 1}
                  queryIndex={this.state.queryIndex}
                  monthArray={this.getDay(i)}
                  currentMoment={this.state.currentMoment}
                  calendarDesc={this.state.calendarDesc}
                  rewardDistributions={this.state.rewardDistributions}
                  rewardArray={this.getRewardArray(this.state.rewardDistributions)}
                  signDates={this.state.signDates}
                  key={lodash.uniqueId('item')}
                  left={style.left}
                  height={style.height}
                  top={style.top}
                  boxShadow={style.boxShadow}
                  changeArray={(actIndex, index) => { this.changeArray(actIndex, index); }}
                />
                )
              }
            </div>
          }

        </StaggeredMotion>
        <p className="tips">
          再签到<span>{this.state.llDay}</span>天，将会得到一份小礼物。
        </p>
        <div className="rule" onClick={() => this.toggleRuleModal(true)}>
          了解规则
        </div>
        <img className="ltn-dan-dan" onClick={() => this.goToZd()} src={eggJpg} alt="炸弹" />
        <Modal
          title="签到规则"
          transparent
          maskClosable={false}
          visible={this.state.ruleModal}
          footer={[{ text: '知道了', onPress: () => this.toggleRuleModal(false) }]}
        >
          这是内容...<br />
          这是内容...<br />
        </Modal>

        <Modal
          closable
          platform="ios"
          style={{
            width: '80%'
          }}
          onClose={() => this.closeEggModal()}
          transparent
          maskClosable={false}
          visible={this.state.signResEgg}
        >
          <div className="egg-modal res-modal">
            <h4>恭喜</h4>
            <p>活动砸蛋机会</p>
            <img src={eggHI} alt="eggHI" />
            <button onClick={() => this.goToZd()}>马上去砸蛋</button>
          </div>
        </Modal>

        <Modal
          closable
          platform="ios"
          style={{
            width: '80%'
          }}
          onClose={() => this.closeTzModal()}
          transparent
          maskClosable={false}
          visible={this.state.signResTz}
        >
          <div className="egg-modal res-modal">
            <h4>恭喜</h4>
            <p>获得<span>30</span>鸟币</p>
            <p>两张<span>99999</span>返<span>22</span>鸟币</p>
            <button onClick={() => this.goToTz()}>马上投资</button>
          </div>
        </Modal>

      </div>
    );
  }
}

export default SignInPage;
