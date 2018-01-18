// 标的 项目 概述
import React from 'react';
import { ListView } from 'antd-mobile';

import FinanceProjectDetail from './FinanceProjectDetail';
import FinanceProjectBuyList from './FinanceProjectBuyList';

class FinanceProjectSafe extends React.Component {
  constructor(props) {
    super(props);
    let { safeHtml } = props.finance;
    if (!safeHtml) {
      safeHtml = `<h3 class="title">项目协议</h3>
          <div class="content">
            <a href='javascript:window.LtnApp.gotoWebPage({url:"https://www.lingtouniao.com/newmobile/#/protocol/1"})'>
              《借款协议》</a>
          </div>`;
    }
    safeHtml = safeHtml.replace(/(\r|\n)/g, '');
    // 初始化化数据源
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[sectionID][rowID];
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    // 创建listview 数据源对象
    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.createMarkup = () => ({ __html: safeHtml });
    // 创建源数据
    this.dataBlob = {
      'des-01': () => (<div className="finance-project-detail" dangerouslySetInnerHTML={this.createMarkup()} />)
    };
    this.rowIDs = ['des-01'];
    // 每一条数据
    this.row = (rowData, sectionID, rowID) => (
      <div key={rowID} className="row">
        <div>{rowData()}</div>
      </div>
    );
    this.state = {
      dataSource: dataSource.cloneWithRows(this.dataBlob, this.rowIDs)
    };
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.showDetail = this.showDetail.bind(this);
    this.showBuyList = this.showBuyList.bind(this);
  }
  // 显示 安全保障
  showDetail() {
    this.props.changeTab(FinanceProjectDetail);
  }
  // 显示 购买记录
  showBuyList() {
    this.props.changeTab(FinanceProjectBuyList);
  }
  // 滚动列表的头部
  renderSectionHeader() {
    return (
      <div className="finane-des-tabs">
        <div className="tab-wrap">
          <span onClick={this.showDetail}>
            项目概况
            <i />
          </span>
          <span className={'activity'}>
            安全保障
            <i />
          </span>
          <span onClick={this.showBuyList}>
            购买记录
            <i />
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (<ListView
      dataSource={this.state.dataSource} renderSectionHeader={this.renderSectionHeader} renderRow={this.row} stickyHeader stickyProps={{
        stickyStyle: {
          zIndex: 999,
          WebkitTransform: 'none',
          transform: 'none'
        }
      }} stickyContainerProps={{
        className: 'finance-project-safe-viewscroll'
      }}
    />);
  }
}

export default FinanceProjectSafe;
