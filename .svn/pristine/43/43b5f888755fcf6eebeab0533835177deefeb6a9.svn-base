
// app 唤醒页面
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd-mobile';
import { openApp, getBrowserName } from '../../common/scripts/util';

import './WakeUpAppPage.scss';
import weixinJpg from './img/weixin.jpg';
//
// let schemeUrl;
// const urlId = getSearchParts('urlId');

class WakeUpAppPage extends React.Component {
  constructor(props) {
    super(props);
    const { type = 1, params } = props.match.params;
    const browser = getBrowserName();
    this.state = {
      schemeUrl: `com.wy.lingtouniao://app?url=${type}${params ? `/${params}` : ''}`,
      confirmModal: false,
      timer: null,
      browser,
      isWeixinShow: browser === 'WeiXin'
    };
  }
  componentDidMount() {
    if (!this.state.isWeixinShow) {
      openApp(this.state.browser, (timer) => { this.showConfirmModal(timer); }, this.state.schemeUrl);
    }
  }
  showConfirmModal(timer) {
    this.setState({
      confirmModal: true,
      timer
    });
  }
  closeConfirmModal() {
    this.setState({
      confirmModal: false
    });
  }
  render() {
    return (
      <div className="wakeup-app-page">
        <p>
          正在跳转，请稍后...
        </p>
        {
          // 当前是微信浏览器，需要通知用户用其他浏览器打开
          this.state.isWeixinShow && <img src={weixinJpg} alt="微信里面打开" />
        }
        {
          // 当前非微信浏览器，渲染提示modal
          !this.state.isWeixinShow && <Modal
            title="确定打开领投鸟APP？"
            transparent
            maskClosable={false}
            visible={this.state.confirmModal}
            platform="ios"
          >
            <div className="modal-footer">
              <a onClick={() => this.closeConfirmModal()}>取消</a>
              <a
                href={this.state.schemeUrl}
                onClick={() => {
                  this.state.timer();
                }}
              >确认</a>
            </div>
            </Modal>
        }
      </div>
    );
  }
}
WakeUpAppPage.propTypes = {
  match: PropTypes.object.isRequired
};
export default WakeUpAppPage;
