import React from 'react';

import axios from 'axios';
import {
  Modal,
  Toast
} from 'antd-mobile';
import ApiClient from '../../common/ApiClient';
import Util from '../../Util';
import './VipFinancePage.scss';
import chart from './imgs/quxian.png';
import vipImg from './imgs/VIP-text.png';
import anquan from './imgs/anquan.png';
import gaoxiao from './imgs/gaoxiao.png';
import fuwu from './imgs/fuwu.png';

import VipNav from './VipNav';

class VipFinancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      modelText: ''
    };
  }
  onClose() {
    this.setState({
      visible: false
    });
  }
  // 签约逻辑处理
  getUserInfo() {
    axios.all([ApiClient.getIsagreement(), ApiClient.getUserInfo()])
    .then(axios.spread((dataOne, dataTwo) => {
      const usableAmount = dataOne.data.usableBalance;
      const isTz = dataTwo.data.agreementTZ;
      let modelText;
      if (usableAmount < 500000) {
        modelText = (<p>您的可用余额不足50万元，请先充值。<br />
          <span className="red">若您需要充值的金额较大，建议登录领投鸟官网（www.lingtouniao.com）进行充值。</span>
          <br />详询客服400-999-9980</p>);
        this.setState({
          visible: true,
          modelText
        });
      } else if (isTz === '0') {
        modelText = <p>您尚未开通免密投资，<br />不能预约VIP项目。<br />投资其他任何一个普通项目即可开通免密投资</p>;
        this.setState({
          visible: true,
          modelText
        });
      } else {
        location.hash = `/finance/vipselect/${this.props.match.params.productId}`;
      }
    }), (error) => {
      if (error.resultCode === '10000006') {
        Util.goLogin(window.location.href);
      } else {
        Toast.fail(error.resultMessage, 2);
      }
    });
  }
  // 立即签约
  goSignContract() {
    if (Util.isLogin()) {
      this.getUserInfo();
    } else {
      Util.goLogin(window.location.href);
    }
  }
  gotoAppPage(params) {
    window.LtnApp.gotoAppPage(params);
  }
  render() {
    return (
      <div className="vip-finance">
        <VipNav />
        <div className="banner">
          <div className="vipchart-wrap animated-slow slideInUp">
            <img src={vipImg} alt="vipImg" />
            <p>领投鸟平台为高净值客户提供的专属稳健型投资项目，尽调严格、投向分散、风险可控</p>
          </div>
        </div>
        <div className="chart">
          <h3>稳健收益</h3>
          <img src={chart} alt="vip" />
        </div>

        <div className="text-wrap">
          <p><span className="title">起投金额：</span><span>50万元起购，以5万的整数倍递增</span></p>
          <p><span className="title">投资期限：</span><span>3/6/9/12个月</span></p>
          <p><span className="title">起息日期：</span><span>预约投资后2个工作日内为您匹配优质资产</span></p>
          <p><span className="title">安全保障：</span><span>通过24重层层把关，筛选出符合标准的消费分期、供应链融资等优质资产</span></p>
        </div>
        <div className="text-icon-wrap">
          <p>
            <img src={anquan} alt="anquan" />
            <span className="title">安全可靠</span>
            <span >24重把关，优选家庭消费分期、国企供应链等优质资产。</span>
          </p>
          <p>
            <img src={gaoxiao} alt="anquan" />
            <span className="title">便捷高效</span>
            <span >一次投资，智能匹配到多个项目循环复投</span>
          </p>
          <p>
            <img src={fuwu} alt="anquan" />
            <span className="title">专心服务</span>
            <span >专属客服，全方位专业咨询与信息公示</span>
          </p>
        </div>
        <div className="button-wrap">
          <button onClick={() => this.goSignContract()}>立即预约</button>
        </div>
        <Modal
          title="温馨提示"
          transparent
          maskClosable={false}
          visible={this.state.visible}
          onClose={() => this.onClose()}
          footer={[{ text: '我知道了', onPress: () => { this.onClose(); } }]}
          platform="ios"
        >
          <div className="modal-text">
            {this.state.modelText}
          </div>
        </Modal>
      </div>
    );
  }
}
export default VipFinancePage;
