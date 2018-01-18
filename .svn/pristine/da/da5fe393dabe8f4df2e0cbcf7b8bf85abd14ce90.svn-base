import React from 'react';
import {
  Toast
} from 'antd-mobile';
import ApiClient from '../../common/ApiClient';

import './LoanerInfoPage.scss';

const LoanerInfoItem = ({ projectUseList }) => {
  if (projectUseList.lenght == 0) {
    return <div>暂无数据</div>;
  }
  return (
    <div className="item">
      <div className="row clearfix">
        <div className="l">
          <p className="lable">
            姓名：<span className="high-color">{projectUseList.borrowerName}</span>
          </p>
          <p className="lable">
            性别：<span className="high-color">{projectUseList.borrowerSex}</span>
          </p>
        </div>
        <div className="r">
          <p className="lable">
            身份证：<span className="high-color">{projectUseList.idCard}</span>
          </p>
          <p className="lable">
            手机号：<span className="high-color">{projectUseList.mobileNo}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

class LoanerInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectUseList: []
    };
  }
  componentWillMount() {
    this.getLoanerInfoList(this.props.match.params.productId);
  }
  getLoanerInfoList(productId) {
    ApiClient.getLoanerInfo(productId)
    .then((data) => {
      const { projectUseList } = data.data;
      this.setState({
        projectUseList
      });
    }, (error) => {
      Toast.fail(error.resultMessage, 2);
    });
  }
  render() {
    return (
      <div className="loaner-info-list">
        {
          this.state.projectUseList.map((el, index) => (
            <LoanerInfoItem projectUseList={el} key={index} />
          ))
        }

      </div>
    );
  }
}

export default LoanerInfoPage;
