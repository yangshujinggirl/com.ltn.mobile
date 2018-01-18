import React from 'react';
import arrow from './imgs/arrow.png';

class VipNav extends React.Component {

  popToRootController() {
    window.LtnApp.popToRootController();
  }
  render() {
    return (
      <div className="vip-nav-wrap">
        <img src={arrow} alt="arrow" onClick={this.popToRootController} />
      </div>
    );
  }
}

export default VipNav;
