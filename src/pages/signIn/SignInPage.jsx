//  签到页面
import React from 'react';
import Moment from 'moment';
import { Toast, Modal } from 'antd-mobile';
import lodash from 'lodash';
import Item from './Item';
import { signHistory, sign } from './SignInService';

import {
  gotoWebPage,
  gotoAppPage,
  gotoProductDetail,
  loginExpired
} from '../../common/scripts/util';

import './SignInPage.scss';

import eggJpg from './img/egg.png';
import eggHI from './img/hi.png';
import title from './img/title.png';
import jiantou from './img/jiantou.png';

import SignNav from './SignNav';


class SignInPage extends React.Component {

  constructor(props) {
    super(props);
    const now = Moment();
    this.state = {
      rewardDesc: '',
      queryMonth: now.get('month'),
      lwDays: [],
      showAni: false, // 是否显示加积分动画，控制切换的时候动画的显示
      ruleModal: false, // 规则弹出层
      signResEgg: false, // 获取砸蛋机会，弹出层
      signResTz: false, // 获取 投资机会 ，弹出层
      sumDays: 0, // 签到总天数
      currentSigin: true, // 当天签到是否完成 true:表示完成
      currentMoment: now, // 当前的日期 默认值
      monthArry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // 月份初始化数据
      signDates: [], // 当前月份，签到的日期
      rewardDistributions: [] // 当前月份奖品
    };
  }
  // this.createMarkup = () => ({ __html: detailHtml.replace(/(\r|\n)/g, '') });

  componentWillMount() {
    this.upSignHistory(this.state.queryMonth);
  }
  // 处理奖品，将奖品累计天数，转换为数组
  getRewardArray(rewardDistributions) {
    return rewardDistributions.map(obj => obj.cumulativeDays);
  }
  // 处理剩余礼物需要的天数
  getLiWuDays(rewardDistributions, signDates) {
    const rewardArray = this.getRewardArray(rewardDistributions);
    const lwDays = rewardArray.map((tt) => {
      if (tt - signDates.length > 0) {
        return tt - signDates.length;
      }
      return -1;
    });
    return lwDays.filter(day => day > 0);
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

  // 计算 最近一次签到获奖天数
  getLastLwDays(rewardDistributions, signDates) {
    const llArray = rewardDistributions.map((obj) => {
      const ll = obj.cumulativeDays - signDates.length;
      if (ll > 0) {
        return ll;
      }
      return 40;
    });
    return lodash.min(llArray);
  }

  createMarkup() {
    return {
      __html: this.state.rewardDesc.replace(/(\r|\n)/g, '')
    };
  }
  // 更新签到数据
  upSignHistory(queryMonth) {
    const queryMoment = lodash.cloneDeep(this.state.currentMoment);
    queryMoment.set('month', queryMonth);
    // 查询历史数据
    signHistory(queryMoment.format('YYYYMM'))
    .then(({ currentTime, isSign, calendarDesc, signDates, rewardDistributions }) => {
      const moment = Moment(currentTime);
      this.getLiWuDays(rewardDistributions, signDates);
      this.setState({
        isALL: moment.daysInMonth() === signDates.length,
        currentMoment: moment, // 矫正当前日期
        isSign, // 用户当天是否签到
        currentSigin: !!isSign,
        calendarDesc, // 日历描述语
        signDates: lodash.sortedUniq(signDates), // 用户签到的日期
        llDay: this.getLastLwDays(rewardDistributions, signDates), // 最近一次获取礼物，还需要的天数
        lwDays: this.getLiWuDays(rewardDistributions, signDates), // 剩余礼物展示数组
        sumDays: lodash.sortedUniq(signDates).length,
        rewardDistributions // 日历对应的奖品
      });
      if (!isSign) {
        this.goSign();
      }
    }, (err) => {
      const { resultCode } = err.data;
      if (resultCode === '10000006' || resultCode === '10000005') {
        loginExpired(window.location.href);
      } else {
        Toast.fail(err.message);
      }
    });
  }


  // 显示签到结果
  showSignRes(skipModel, rewardDesc, buttonText) {
    // skipModel :ZND:砸鸟蛋 LCLB:理财列表 GB:关闭
    // rewardDesc : 中奖明细， html模板
    if (skipModel === 'ZND') {
      this.setState({
        signResEgg: true,
        signResTz: false,
        skipModel,
        buttonText,
        rewardDesc
      });
    } else {
      this.setState({
        signResEgg: false,
        signResTz: true,
        skipModel,
        buttonText,
        rewardDesc
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
  btnAction(skipModel) {
    this.closeTzModal();
    if (skipModel === 'GB') {
      this.setState({
        signResTz: false
      });
      // 点击按钮，关闭弹出层
    } else if (skipModel.indexOf('http') !== -1) {
      // 跳转web页面
      gotoWebPage(skipModel, 0);
    } else if (!isNaN(parseInt(skipModel, 10))) {
      // 跳转产品详情
      gotoProductDetail(skipModel, 0);
    } else {
      gotoAppPage(skipModel, 0);
    }
  }
  // 马上砸蛋
  goToZd() {
    this.closeEggModal();
    gotoAppPage('showGoldenEgg', 0);
  }
  goToTz() {
    this.closeTzModal();
    gotoAppPage('gotoProductList');
  }
  // 签到
  goSign() {
    const tempsignDates = lodash.cloneDeep(this.state.signDates);
    sign()
    .then(({ skipModel, rewardDesc, signTime, buttonText }) => {
      tempsignDates.push(Moment(signTime).get('date'));// 将当前签到日期加入到签到数组中
      if (Moment(signTime).daysInMonth() === tempsignDates.length) {
        this.setState({
          isALL: true
        });
      }
      if (typeof skipModel !== 'undefined') {
        this.showSignRes(skipModel, rewardDesc, buttonText);
      }
      this.setState({
        showAni: true,
        sumDays: this.state.sumDays + 1,
        llDay: this.getLastLwDays(this.state.rewardDistributions, tempsignDates)
      });
    }, (err) => {
      const { resultCode } = err.data;
      if (resultCode === '10000006' || resultCode === '10000005') {
        loginExpired(window.location.href);
      } else {
        Toast.fail(err.message);
      }
    });
  }
  // 签到 //TODO
  toggleRuleModal(ruleModal) {
    this.setState({
      ruleModal
    });
  }
  // 查看规则 //TODO
  showSignRule() {
    // gotoWebPage
    const { origin, pathname } = window.location;
    gotoWebPage(`${origin}${pathname}#/faq/qiandao`, 0);
    // this.props.history.push('/faq/qiandao');
  }
  // 查看兑奖记录 //TODO
  render() {
    // 解析弹出参数
    const {
      skipModel, buttonText
    } = this.state;
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
        <div className="month-wrap-list">
          <img src={jiantou} alt="jiantou" className="arrow" />
          <Item
            showAni={this.state.showAni}
            lwDays={this.state.lwDays}
            queryMonth={this.state.queryMonth}
            currentMoment={this.state.currentMoment}
            calendarDesc={this.state.calendarDesc}
            monthArray={this.getDay(this.state.currentMoment.get('month'))}
            month={this.state.currentMoment.get('month')}
            signDates={this.state.signDates}
            rewardDistributions={this.state.rewardDistributions}
            rewardArray={this.getRewardArray(this.state.rewardDistributions)}
            currentSigin={this.state.currentSigin}
          />
        </div>
        {
          this.state.isALL ? (
            <p className="tips">
              奖品都被你拿走了，太厉害了！
            </p>
          ) : (
            <p className="tips">
              再签到<span>{this.state.llDay}</span>天，将会得到一份小礼物。
            </p>
          )
        }
        <div className="rule" onClick={() => this.showSignRule()}>
          了解规则
        </div>
        <img className="ltn-dan-dan" onClick={() => this.goToZd()} src={eggJpg} alt="砸蛋" />

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
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            <img src={eggHI} alt="eggHI" />
            <button onClick={() => this.goToZd()}>{buttonText}</button>
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
            <div dangerouslySetInnerHTML={this.createMarkup()} />
            {
              // 这个地方的显示，需要函数控制
            }
            <button onClick={() => this.btnAction(skipModel)}>{buttonText}</button>
          </div>
        </Modal>

      </div>
    );
  }
}

export default SignInPage;
