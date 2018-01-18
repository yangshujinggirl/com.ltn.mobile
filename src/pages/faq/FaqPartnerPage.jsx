import React from 'react';
import { Accordion } from 'antd-mobile';
import Util from '../../Util';

import registerpng from './imgs/partner-register.png';
import addpng from './imgs/partner-add.png';
import aboutpng from './imgs/partner-about.png';

const type = Util.getSearchParts('type');

const FaqPartnerPage = () => (
  <div className="animated fadeInRight">
    <Accordion defaultActiveKey={type}>
      <Accordion.Panel header="一、如何推荐好友？" >
        <div className="faq-text-content">
          <p>(1) 领投鸟理财新用户注册时可在注册界面上填写推荐人手机号码，推荐的好友账号将与推荐人关联。</p>
          <p className="faq-imgs">
            <img className="faqpwdimg" src={registerpng} alt="注册" />
          </p>
          <p>(2) 领投鸟理财新用户也可以在登录App后进入到合伙人页面补填推荐人号码</p>
          <p className="faq-imgs">
            <img className="faqpwdimg" src={addpng} alt="注册" />
          </p>
          <p>(3) 领投鸟理财用户登录App后在【关于我们】界面点击【分享给好友】进行分享，被推荐人打开链接后输入手机号码自动进入到注册页面，注册成功后即推荐成功。</p>
          <p className="faq-imgs">
            <img className="faqpwdimg" src={aboutpng} alt="注册" />
          </p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、合伙人奖励规则" >
        <div className="faq-text-content">
          <h4 className="title">普通合伙人</h4>
          <p>(1)如何成为普通合伙人：推荐者本人完成注册+实名认证+绑卡的步骤，推荐者本人推荐一名及以上新人注册认证及绑卡， 即可获得普通合伙人资格。</p>
          <p>(2) 推荐者：推荐者完成过一次投资后（不含体验标），
            每天推荐的前三名好友完成投资（不含体验标），每推荐一位，推荐者可获得10鸟币；
            每天推荐的第四名好友起，每推荐一位，推荐者可获得10元返现券（投资满3888元可用）；
            当被推荐者投资固收类产品， 推荐人获得被推荐人收益的7%（按日计提）, 且亦能获得二级被推荐人收益的3%（按日计提）。
            如下表展示：</p>

          <div className="data-tabel">
            <p> <span>若A推荐B，B推荐C</span> </p>
            <p><span>一级提成</span><span>二级提成</span></p>
            <p><span>A享受</span><span>B投资收益的7%+10鸟币</span><span>C投资收益的3%</span></p>
            <p><span>B享受</span><span>C投资收益的7%+10鸟币</span></p>
          </div>

          <p>(3) 被推荐者：注册有奖——万元体验金+88元返现劵+加息券</p>

          <h4 className="title">金牌合伙人</h4>
          <p>(1)如何成为金牌合伙人：推荐者满足成为普通合伙人条件，
            同时您历史累计推荐3位及以上好友成功绑卡，满足如上两个条件，将立即成为金牌合伙人。
            请进入您的领投鸟理财中“合伙人”中查看您的推荐等级（一年内有效）。</p>
          <p>(2)提成奖励：一级提成由普通合伙的7%提升至为10% （以下订单时的合伙人状态为准计算该部分提成），其他享有的奖励不变。</p>

        </div>
      </Accordion.Panel>
    </Accordion>
  </div>
);


export default FaqPartnerPage;
