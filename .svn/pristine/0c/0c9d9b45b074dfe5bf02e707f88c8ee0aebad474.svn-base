// 产品详情页面
import React from 'react';
import './components/project/ProjectDetailPage.scss';
// 各种项目详情 显示组件
import NormalProjectDetail from './components/project/NormalProjectDetail';
import ProjectShopPage from './components/project/ProjectShopPage';
import ProjectCashPage from './components/project/ProjectCashPage';
import ProjectSupplyPage from './components/project/ProjectSupplyPage';
import LCTProjectDetailPage from './components/project/LCTProjectDetailPage';

const ProjectDetailPage = (props) => {
  const prodetail = props.prodetail;
  let ResView = null;
  if (prodetail.productTag) {
    if (prodetail.productTag.indexOf('供应链') !== -1) {
      ResView = ProjectSupplyPage;
    } else if (prodetail.productTag.indexOf('消费分期') !== -1) {
      ResView = ProjectShopPage;
    } else if (prodetail.productTag.indexOf('信用宝') !== -1) {
      ResView = ProjectCashPage;
    } else if (prodetail.productType === 'LCT') {
      ResView = LCTProjectDetailPage;
    } else {
      ResView = NormalProjectDetail;
    }
  } else {
    ResView = () => (<div />);
  }
  return (
    <div className="animated fadeInRight">
      <ResView data={prodetail} />
    </div>
  );
};


export default ProjectDetailPage;
