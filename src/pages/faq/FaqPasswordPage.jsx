// 密码 帮助
import React from 'react';
import { Accordion } from 'antd-mobile';
import Util from '../../Util';

import faqpwdimg from './imgs/login-password.png';
import faqpwdimg1 from './imgs/change-password1.png';
import faqpwdimg2 from './imgs/change-password2.png';

const type = Util.getSearchParts('type');

const FaqPasswordPage = () => (
  <div className="animated fadeInRight">
    <Accordion defaultActiveKey={type}>
      <Accordion.Panel header="一、忘记登录密码怎么办？" >
        <div className="faq-text-content">
          <p>步骤1，打开领投鸟理财App，点击【登录】到登录界面后，点击登录按钮下方的【忘记密码？】：</p>
          <p className="faq-imgs">
            <img className="faqpwdimg" src={faqpwdimg} alt="忘记登录密码怎么办" />
          </p>
          <p>步骤2，在【修改密码】页面，输入注册时使用的手机号码，输入系统发送到您手机上的验证码、身份证号，点击【确认】，输入新密码，确定新密码，点击【确认修改】</p>
          <p className="faq-imgs">
            <img className="faqpwdimg" src={faqpwdimg1} alt="忘记登录密码怎么办" />
            <img className="faqpwdimg" src={faqpwdimg2} alt="忘记登录密码怎么办" />
          </p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、如何重置支付密码？" >
        <div className="faq-text-content">
          <p>
            打开领投鸟理财App，访问【我的账户】-【账户设置】-【重置支付密码】， 点击【重置支付密码】后，我们会讲新密码以短信的形式发送到您的注册手机上
          </p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="三、如何修改支付密码？" >
        <div className="faq-text-content">
          <p>
              打开领投鸟理财App，访问【我的账户】-【账户设置】-【修改支付密码】，
              输入您的原支付密码和新支付密码，并点击【修改支付密码】，我们会绑您编辑短信“GGMM#原密码#新密码”发送给联动优势，
              就可以修改您的支付密码支付密码只能是6位数字。
            </p>
        </div>
      </Accordion.Panel>
    </Accordion>
  </div>
);


export default FaqPasswordPage;
