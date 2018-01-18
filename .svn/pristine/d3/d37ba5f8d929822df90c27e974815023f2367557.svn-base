/* eslint array-callback-return: 0*/
import React from 'react';
import {
   Picker,
   Flex,
   Modal
 } from 'antd-mobile';
import lodash from 'lodash';
import ApiClient from '../../common/ApiClient';
import Util from '../../Util';
import './VipSelectPage.scss';

// 起投金额
const InvestAmountSelect = props => (
  <div className="invest-amount-select">
    <p>投资金额（万）</p>
    <p onClick={props.onClick} className="money-value">{props.selectAmount}</p>
    <p className="tips">最低50万起投</p>
  </div>
  );
// 投资期限
const MonthSelect = props => (
  <div className="lable">
    <Flex>
      <Flex.Item>投资期限</Flex.Item>
      <Flex.Item>
        <div className="right-content" onClick={props.onClick}>
          <span className="rc">{props.selectMonth}</span>
          <span className="arrow-right" />
        </div>
      </Flex.Item>
    </Flex>
  </div>
  );
// 历史年化收益
const DateSelect = props => (
  <div className="lable">
    <Flex>
      <Flex.Item>历史年化收益</Flex.Item>
      <Flex.Item>
        <div className="right-content">
          <span className="rc">{props.selectDate}</span>
        </div>
      </Flex.Item>
    </Flex>
  </div>
  );
class VipSelectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectObj: {},
      selectAmountObj: {},
      amountArrays: [], // 起投金额 Picker
      monthArrays: [], // 投资期限 Picker
      dateArrays: [], // 历史年化收益 Picker
      dateRuleList: [], // 期限，年化数据
      amountRuleList: [], // 起投金额数据
      isClick: true,
      visible: false,
      modalText: ''
    };
  }
  componentWillMount() {
    this.getAmountList();
  }
  onClose() {
    this.setState({
      visible: false
    });
  }
  onChange(values) {
    const selectObj = lodash.filter(this.state.dateRuleList, obj => obj.id === values[0]);
    this.setState({
      selectObj: selectObj[0]
    });
  }

  onChange1(values) {
    const selectAmountObj = lodash.filter(this.state.amountRuleList, obj => obj.id === values[0]);
    this.setState({
      selectAmountObj: selectAmountObj[0]
    });
  }
  getAmountList() {
    ApiClient.getAmountList()
      .then((data) => {
        const { amountRuleList, dateRuleList } = data.data;
        const amountArrays = [];
        const monthArrays = [];
        const dateArrays = [];
        lodash.forEach(amountRuleList, (obj) => {
          const amountObj = {
            value: obj.id,
            label: `${obj.amountText}万`
          };
          amountArrays.push(amountObj);
        });
        // 期限 TODO
        dateRuleList.map((e) => {
          const monthObj = {
            value: e.id,
            label: e.convertDateText
          };
          monthArrays.push(monthObj);
        });
        // 年化 TODO
        dateRuleList.map((ele) => {
          const dateObj = {
            value: ele.id,
            label: ele.annualIncomeText
          };
          dateArrays.push(dateObj);
        });
        this.setState({
          selectAmountObj: amountRuleList[0],
          selectObj: dateRuleList[0],
          amountArrays,
          dateArrays,
          monthArrays,
          dateRuleList,
          amountRuleList
        });
      });
  }


  submit() {
    this.state.isClick = true;
    const { amount } = this.state.selectAmountObj;
    const { annualIncome, convertDate } = this.state.selectObj;
    ApiClient.goApply(amount, annualIncome, convertDate)
    .then((data) => {
      if (data.resultCode === '0') {
        location.hash = `/finance/vipSuccess/${this.props.match.params.productId}`;
      }
      this.state.isClick = false;
    }, (error) => {
      if (error.resultCode === '20000002') {
        this.setState({
          visible: true,
          modalText: <p>您的可用余额不足{this.state.selectAmountObj.amountText}万元，请先充值或更改投资金额。<br />
            <span className="red">若您需要充值的金额较大，建议登录领投鸟官网（www.lingtouniao.com）进行充值。</span>
            <br />详询客服400-999-9980</p>
        });
      } else if (error.resultCode === '10000006') {
        Util.goLogin(window.location.href);
      } else {
        this.setState({
          visible: true,
          modalText: error.resultMessage
        });
      }
    });
  }


  returnEvent() {
    location.hash = `/finance/vip/${this.props.match.params.productId}`;
  }

  render() {
    const { amountArrays, selectAmountObj, monthArrays, selectObj } = this.state;
    return (
      <div className="vip-select-page">
        <div className="nav-bar">
          <p className="sure-title">
            <span className="arrow-left" onClick={() => this.returnEvent()} />
            确认预约
          </p>
        </div>
        <div className="vip-content-wrap">
          <Picker
            data={amountArrays}
            cols={1} okText={'确认'}
            className="forss" value={[selectAmountObj.id]}
            onChange={val => this.onChange1(val)}
          >
            <InvestAmountSelect selectAmount={selectAmountObj.amountText} />
          </Picker>
          <div className="part-two">
            <Picker
              data={monthArrays}
              cols={1} okText={'确认'}
              className="forss"
              value={[selectObj.id]}
              onChange={val => this.onChange(val)}
            >
              <MonthSelect selectMonth={selectObj.convertDateText} />
            </Picker>
            <DateSelect selectDate={selectObj.annualIncomeText} />
          </div>
        </div>
        <div className="button-wrap">
          {
            this.state.isClick ?
              <button onClick={() => this.submit()}>确认预约</button>
            :
              <button>确认预约</button>
          }
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
            {this.state.modalText}
          </div>
        </Modal>
      </div>
    );
  }

}

export default VipSelectPage;
