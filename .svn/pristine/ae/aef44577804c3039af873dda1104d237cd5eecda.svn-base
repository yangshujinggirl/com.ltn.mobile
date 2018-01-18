// 合伙人特权   PartnerAdvancePage
import React from 'react';
import { Tabs, WhiteSpace, WingBlank } from 'antd-mobile';

import partnerImg1 from './imgs/partner-banner1.jpg';
import partnerImg2 from './imgs/partner-banner2.jpg';
import partnerImg3 from './imgs/partner-banner3.jpg';

const TabPane = Tabs.TabPane;

const PartnerAdvancePage = ({ match }) => (
  <div className="partner-advance-wrap animated fadeInRight">

    <Tabs defaultActiveKey={match.params.key || '1'}>
      <TabPane tab="推荐有奖" key="1">
        <div className="advance1">
          <p className="no-text-index">
            <img src={partnerImg1} alt="partnerImg1" />
          </p>
          <WingBlank>
            <h4>推荐有奖</h4>
            <h6>推荐人 - 获得10鸟币或返现券</h6>
            <p>
              推荐者完成过一次投资后（不含体验标），每天推荐的前三名好友完成投资（不含体验标），每推荐一位，推荐者即获得10鸟币；每天推荐的第四名好友起，每推荐一位，推荐者可获得10元返现券（投资满3888元可用）。
            </p>

            <h6>被推荐人 - 获得10%加息券</h6>
            <p>
              被推荐人获得一张10%的加息券，可用于购买固收类产品（
              不包含体验标、新手标），投资时使用该加息券，投资收益可增加10%！
            </p>

          </WingBlank>
        </div>
      </TabPane>
      <TabPane tab="收益提成" key="2">
        <div className="advance2">
          <p className="no-text-index">
            <img src={partnerImg2} alt="partnerImg2" />
          </p>
          <WingBlank>
            <h4>合伙人奖励规则</h4>
            <h6>普通合伙人</h6>
            <p>
              推荐者本人进行过一次投资（不包含体验标），并推荐一个好友完成绑卡后，即成为平台的普通合伙人。
            </p>
            <p className="no-text-index">
              可以获得：<br />
              一级好友每次投资固收类产品收益7%的平台奖励，按日计提。<br />
              二级好友每次投资固收类产品收益3%的平台奖励，按日计提。<br />
            </p>

            <h6>金牌合伙人</h6>
            <p>
              推荐者本人进行过一次投资（不包含体验标），并推荐三个好友完成绑卡后，即升级为平台的金牌合伙人。
            </p>
            <p className="no-text-index">
              可以获得：<br />
              一级好友每次投资固收类产品收益10%平台奖励，按日计提。<br />
              二级好友每次投资固收类产品收益3%的平台奖励，按日计提。<br />
            </p>
            <p className="tips no-text-index">说明：二级好友即一级好友推荐的好友。</p>
          </WingBlank>
        </div>
      </TabPane>
      <TabPane tab="徽章特权" key="3">
        <div className="advance3">
          <p className="no-text-index">
            <img src={partnerImg3} alt="partnerImg3" />
          </p>
          <WingBlank>
            <h4>徽章特权</h4>
            <p className="no-text-index">
              金牌合伙人尊享徽章，让您的身份与众不同
            </p>
          </WingBlank>
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>
);

PartnerAdvancePage.defaultProps = {
  match: {
    params: {
      key: 1
    }
  }
};
PartnerAdvancePage.propTypes = {
  match: React.PropTypes.object
};


export default PartnerAdvancePage;
