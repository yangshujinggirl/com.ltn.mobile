/* eslint array-callback-return: 0*/
import React from 'react';
import { ListView } from 'antd-mobile';
import moment from 'moment';

import FinanceService from '../services/FinanceService';
import FinanceProjectDetail from './FinanceProjectDetail';
import FinanceProjectSafe from './FinanceProjectSafe';


class FinanceProjectBuyList extends React.Component {
  constructor(props) {
    super(props);
      // 初始化化数据源
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[sectionID][rowID];
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
      // 创建listview 数据源对象
    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.formatDate = date => moment(date).format('MM-DD HH:mm');
      // 创建源数据
    this.dataBlob = {};
    this.rowIDs = [];
      // 每一条数据
    this.row = (rowData, sectionID, rowID) => (
      <div key={rowID} className="buy-list-wrap">
        <p>
          <span>{rowData.userName}</span>
          <span>{rowData.orderAmount}</span>
          <span>{this.formatDate(rowData.orderDate)}</span>
        </p>
      </div>
      );
    this.state = {
      dataSource: dataSource.cloneWithRows(this.dataBlob, this.rowIDs),
      isLoading: false
    };
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.showSafe = this.showSafe.bind(this);
    this.showDetail = this.showDetail.bind(this);
    // 分页开始页码
    this.pageIndex = 0;
    this.totalCount = 1;
    this.pageSize = 10;
  }
  // 初始化加载数据
  componentDidMount() {
    this.loadData();
  }

  // view List  加载数据
  onEndReached() {
    if (this.pageIndex * this.pageSize > this.totalCount) {
      this.setState({ isLoading: false });
    } else if (!this.state.isLoading) {
      this.setState({ isLoading: true });
      this.loadData(this.pageIndex += 1);
    }
  }
  // 显示 安全保障
  showSafe() {
    this.props.changeTab(FinanceProjectSafe);
  }
  // 显示 项目概述
  showDetail() {
    this.props.changeTab(FinanceProjectDetail);
  }

  // 加载购买记录数据
  loadData(currentPage = 0) {
    const { finance } = this.props;
    FinanceService.getPurchasehistory(currentPage, 10, finance.id)
      .then((data) => {
        this.totalCount = data.totalCount;
        this.setState({
          totalCount: data.totalCount
        });
        data.purchaseHistoryList.map((items, index) => {
          this.dataBlob[`currentPage-${currentPage}-${index}`] = items;
          this.rowIDs.push(`currentPage-${currentPage}-${index}`);
        });
        this.rowIDs = [].concat(this.rowIDs);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(this.dataBlob, this.rowIDs),
          isLoading: false
        });
      });
  }

  // 滚动列表 头部
  renderSectionHeader(type) {
    return (
      <div className="finane-des-tabs">
        <div className="tab-wrap">
          <span onClick={this.showDetail}>
              项目概况
              <i />
          </span>
          <span onClick={this.showSafe}>
              安全保障
              <i />
          </span>
          <span className={'activity'}>
              购买记录
              <i />
          </span>
        </div>
        <div className="list-title buy-list-wrap">
          {
            type !== 'nodata' && <p>
              <span>投资用户</span>
              <span>投资金额</span>
              <span>投资时间</span>
            </p>
          }

          {
            type === 'nodata' && <p className="nodata">暂无数据</p>
          }

        </div>
      </div>
    );
  }

  render() {
    return (
        this.state.totalCount ? <ListView
          dataSource={this.state.dataSource}
          renderFooter={
                () => <div style={{ padding: 30, textAlign: 'center' }}>
                  {this.state.isLoading ? '加载中...' : ''}
                </div>
              }
          renderSectionHeader={this.renderSectionHeader}
          renderRow={this.row}
          className="am-list"
          pageSize={10}
          scrollEventThrottle={10}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
          stickyHeader
          stickyProps={{
            stickyStyle: { zIndex: 999, WebkitTransform: 'none', transform: 'none' }
          }}
          stickyContainerProps={{
            className: 'for-stickyContainer-demo'
          }}
        /> : <div className="wrap-nodata">{this.renderSectionHeader('nodata')}</div>
    );
  }

}


export default FinanceProjectBuyList;
