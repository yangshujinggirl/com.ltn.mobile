
//  签到页面
import React from 'react';
import { Link } from 'react-router-dom';
import arrowJpg from './img/arrow.png';
// 导航
class SignNav extends React.Component {
  popToRootController() {
    window.LtnApp.popToRootController();
  }
  render() {
    return (
      <div className="header-nav cf">
        <img src={arrowJpg} alt="arrow" onClick={this.popToRootController} className="icon-arrow" />
        <p className="nav-titile">签到领奖品</p>
        <Link to="/signin/recordlist" className="recorad-link">获奖记录</Link>
      </div>
    );
  }
}

export default SignNav;
