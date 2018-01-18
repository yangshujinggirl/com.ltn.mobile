import React from 'react';
import Util from '../../Util';
import './VipSuccessPage.scss';

class VipSuccessPage extends React.Component {
  // 理财列表页
  goProductList() {
    Util.goProductList();
  }

  returnEvent() {
    location.hash = `/finance/vip/${this.props.match.params.productId}`;
  }
  render() {
    return (
      <div className="vip-success-content">
        <div className="nav-bar">
          <p className="sure-title">
            <span className="arrow-left" onClick={this.returnEvent} />
            预约成功
          </p>
        </div>
        <div className="top-part">
          <div className="icon" />
          <p className="title">预约成功</p>
          <p className="tips">预计2个工作日内为您匹配资产</p>
        </div>
        <div className="btns-wrap">
          <button className="btn" onClick={() => this.goProductList()}>查看其他项目</button>
          <button className="btn" onClick={() => this.returnEvent()}>继续预约</button>
        </div>
      </div>
    );
  }

}

export default VipSuccessPage;
