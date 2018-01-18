// 常规理财产品详情页面
import React from 'react';
import './NormalFinanceDetailPage.scss';
// 导入组件
import FinaneOverview from './components/FinaneOverview';
import FinanceItems from './components/FinanceItems';


// 项目描述tab  相关内容
import FinanceProjectDetail from './components/FinanceProjectDetail';

const HeaderContent = props => (
  <div className="header-content">
    <FinaneOverview {...props} />
    <FinanceItems {...props} />
  </div>
);


class NormalFinanceDetailPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Mod: FinanceProjectDetail
    };
    this.changeTab = this.changeTab.bind(this);
    const { detailHtml } = props.finance;
    this.createMarkup = () => ({ __html: detailHtml.replace(/(\r|\n)/g, '') });
  }

  changeTab(mod) {
    this.setState({
      Mod: mod
    });
  }

  render() {
    const TabMod = this.state.Mod;
    return (
      <div className="normal-finance-detail-wrap">
        <HeaderContent {...this.props} />
        {
          this.props.finance.productType === 'TYB' ? (
            <div className="tab-content-wrap tyb-detail">
              <div className="project-info-wrap" dangerouslySetInnerHTML={this.createMarkup()} />
            </div>

          ) : (
            <TabMod {...this.props} changeTab={this.changeTab} />
          )
        }

      </div>
    );
  }
}
export default NormalFinanceDetailPage;
