import React from 'react';
import lodash from 'lodash';
import BorrowMoneyPage from './component/BorrowMoneyPage';// 借款协议 1
import FundCustodianPage from './component/FundCustodianPage';// 资金托管协议 2
import ProductPage from './component/ProductPage';// 智投产品协议 3
import ServerPage from './component/ServerPage';// 服务协议 4
import PaymentPage from './component/PaymentPage'; // 支付协议 5
import DiseaseDescPage from './component/DiseaseDescPage'; // 重大疾病说明 6
import FamilyHelpRulePage from './component/FamilyHelpRulePage'; // 重大疾病说明 7
import MemberRulePage from './component/MemberRulePage'; // 会员公约 8
import WorkerHelpRulePage from './component/WorkerHelpRulePage'; // 白领互助基金申请规则 9

import './protocol.scss';

const ProtocolPage = ({ match }) => {
  const ProtocolData = [
    {
      type: '1',
      desc: '借款协议',
      component: BorrowMoneyPage
    }, {
      type: '2',
      desc: '资金托管协议',
      component: FundCustodianPage
    }, {
      type: '3',
      desc: '智投产品协议',
      component: ProductPage
    }, {
      type: '4',
      desc: '服务协议',
      component: ServerPage
    }, {
      type: '5',
      desc: '支付协议',
      component: PaymentPage
    }, {
      type: '6',
      desc: '重大疾病说明',
      component: DiseaseDescPage
    }, {
      type: '7',
      desc: '家财盗抢互助金申请细则',
      component: FamilyHelpRulePage
    }, {
      type: '8',
      desc: '会员公约',
      component: MemberRulePage
    }, {
      type: '9',
      desc: '白领互助基金申请规则',
      component: WorkerHelpRulePage
    }
  ];
  const ResView = lodash.find(ProtocolData, o => o.type === match.params.type);
  return (
    <div className="animated fadeInRight">
      {
        ResView ? <ResView.component /> : <div>协议未找到</div>
      }
    </div>
  );
};

ProtocolPage.propTypes = {
  match: React.PropTypes.object
};
ProtocolPage.defaultProps = {
  match: {}
};
export default ProtocolPage;
