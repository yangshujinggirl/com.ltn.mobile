// 产品详情页面
import React from 'react';
import FinanceService from '../services/FinanceService';
import ProjectDetailPage from '../ProjectDetailPage';

class ProjectDetailController extends React.Component {
  constructor() {
    super();
    this.state = {
      prodetail: {}
    };
  }
  componentWillMount() {
    FinanceService.getProductDetail(this.props.match.params.productId)
    .then((data) => {
      this.state.prodetail = data;
      this.setState(this.state);
    }, (error) => {
      this.state.error = error;
    });
  }
  render() {
    return (
      <ProjectDetailPage prodetail={this.state.prodetail} />
    );
  }
}
export default ProjectDetailController;
