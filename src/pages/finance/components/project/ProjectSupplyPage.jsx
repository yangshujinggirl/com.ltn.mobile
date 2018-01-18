import React from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

const ProjectSupplyPage = () => (
  <div className="project-detail-content">
    <List>
      <Item>
        <div>产品描述</div>
        <div className="pro-desc">
          供应链融资是在领投鸟风控保障体系下，经过严格的论证和实践运作，
          精心设计推出的产品。资金主要用于央企、国企、上市公司等大型生产贸易企业与下游服务供应商的应收账款提前结算，
          借款方资金需求合理，上游还款企业经营利润率较高，还款来源稳定可靠，且平台对借款方严格背调审核，极大地降低了项目风险。
        </div>
      </Item>
      <Item>
        <div>项目描述</div>
        <div className="pro-desc">
          该供应链的上游核心企业是浙江物产集团（A股上市系大型国有流通企业），
          对服务方（实际借款方）的应收账款结算时间固定。本次合作采用应收账款贴现方式，
          若未能按照借款合同约定按时还款，则全额代偿，且其法定代表人（实际控制人）提供共同担保。
        </div>
      </Item>
      <Item>
        <div>资金用途</div>
        <div className="pro-desc">借款人借款主要用于供应链下游企业的资金结算。</div>
      </Item>
      <Item>
        <div>还款来源</div>
        <div className="pro-desc">借款人借款主要用于供应链下游企业的资金结算。</div>
      </Item>
      <Item>
        <div>到账时间</div>
        <div className="pro-desc">
          结息日期之后1-3个工作日内到账。<br />
          注:结息之后还款如遇法定节假日、公休日，因银行业务开展原因，则顺延至下一个工作日开始还款。
        </div>
      </Item>
      <Item>
        <div>风险控制</div>
        <div className="pro-desc">
          1：对供应链上中下游合作模式进行调查及确认。<br />
          2：深入了解供应链上下游企业业务往来，并要求借款方提供业务往来证明。<br />
          3：对借款方进行严格的个人身份及信用信息调查审核。<br />
          4：对借款方企业进行企业信息审核。<br />
          5：资产端公司成立专职团队承担贷后跟踪管理、监督检查。<br />
          6：借款方承诺按期足额还款， 担保方承担连带责任保证。
        </div>
      </Item>
      <Item>
        <div>保障措施</div>
        <div className="pro-desc">借款方无条件归还借款本息，担保方承担连带责任保证。</div>
      </Item>
    </List>
  </div>
);

export default ProjectSupplyPage;
