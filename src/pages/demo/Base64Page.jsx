import React from 'react';

import { Base64 } from 'js-base64';

import { List, InputItem } from 'antd-mobile';

class Base64Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resVal: ''
    };
  }

  textChange(val) {
    this.setState({
      resVal: Base64.encode(val)
    });
  }

  render() {
    return (
      <div className="base-page">
        <List renderHeader={() => 'base64 转换'}>
          <InputItem onChange={val => this.textChange(val)} placeholder="http://www.lingtouniao.com">请输入内容</InputItem>
        </List>
        <List renderHeader={() => '转换结果'}>
          <List.Item>{this.state.resVal}</List.Item>
        </List>
      </div>
    );
  }

}

export default Base64Page;
