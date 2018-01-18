// 债券转让
import React from 'react';
import { Accordion } from 'antd-mobile';
import Util from '../../Util';

const type = Util.getSearchParts('type');
const BondPage = () => (
  <div className="animated fadeInRight">
    <Accordion defaultActiveKey={type}>
      <Accordion.Panel header="一、什么是债权转让？">
        <div className="faq-text-content">
          <p>投资人（转让人）通过债券转让功能，将符合相应条件的标的转让给第三方（受让人）的行为。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="二、什么样的标的可进行债权转让？">
        <div className="faq-text-content">
          <p>（1）有 “ 可转让 ” 标签的标的；<br />
            （2）购买的标的持有天数超过30天或60天；<br />
            （3）标的到期前三天，不可申请债权转让。例：A标在4月30日到期，则4月28日零点至4月30日23:59:59系统不再受理债权转让。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="三、支持多次、多笔转让吗？">
        <div className="faq-text-content">
          <p>（1）投资人转让成功后，受让者不可再次进行转让；<br />
            （2）一个标的不可分笔进行转让；<br />
            （3）标的发起转让后的第二天的24点若还未转让成功，则系统自动取消债权转让，标的回到用户资产账户。例：A用户4月1日13:00发起转让，若一直无人购买，则4月3日23:59:59系统自动取消债转。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="四、标的债权价值规则？">
        <div className="faq-text-content">
          <p>（1）标的售卖（债转）时，系统自动算出标的当前价值（本金 + 当前所获利息）；<br />
            （2）转让者可自定义标的售卖价值，价值区间为：本金 ≤ 标的价值 ≥ 本金 + 当前所获利息。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="五、债权转让手续费谁来承担？">
        <div className="faq-text-content">
          <p>由债权转让者承担，暂时免费。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="六、转让者所使用的鸟币、券、分润、积分归谁所有？">
        <div className="faq-text-content">
          <p>返现券：不论价值，归受让者所有；<br />
            加息券：按照剩余价值可获利息来算；<br />
            鸟币：转让者所有；<br />
            分润：债权转让成功前的分润归转让者的上级所有，成功后的分润归受让者的上级所有；<br />
            积分：转让者所有。<br />
          </p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="七、如何发起债权转让？">
        <div className="faq-text-content">
          <p>打开【领投鸟App】—进入【我的】—【我的投资】—【计息中】，申请债权转让。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="八、如何取消债权转让？">
        <div className="faq-text-content">
          <p>标的申请转让后，点击“取消转让”，即可生效。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="九、如何购买转让标的？">
        <div className="faq-text-content">
          <p>打开【领投鸟App】—进入【理财】，在“转让区”购买转让标的即可。</p>
        </div>
      </Accordion.Panel>
      <Accordion.Panel header="十、如何查看购买的转让标的？">
        <div className="faq-text-content">
          <p>打开【领投鸟App】—进入【我的】—【我的投资】—【计息中】，查看购买的转让标的。</p>
        </div>
      </Accordion.Panel>

    </Accordion>
  </div>
);


export default BondPage;
