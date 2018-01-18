import React from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom';
import transferpng from './imgs/project-transfer.png';

const Item = List.Item;

const NormalProjectDetail = ({ data }) => (
  <div className="project-detail-content">
    <List>
      <Item>购买流程</Item>
      <Item> <img src={transferpng} alt="transferpng" /></Item>
      <Item>
        <div>项目描述</div>
        <div className="pro-desc">{data.productTitle}</div>
      </Item>

      <Item>
        <div>投标范围</div>
        <div className="pro-desc">智能投向资产端严格筛选出的消费分期、赎楼等项目。</div>
      </Item>
      <Item>
        <div>项目协议</div>
        <div className="pro-desc">
          <Link to="/protocol/3">《智投产品协议》</Link>
        </div>
      </Item>
      <Item>
        <div>保障方式</div>
        <div className="pro-desc">
          <Link to="/static/safe">《平台安全保障详解》</Link>
        </div>
      </Item>
      <Item>
        <div>投资期限</div>
        <div className="pro-desc">{data.productDeadline}天</div>
      </Item>
      <Item>
        <div>加入条件</div>
        <div className="pro-desc">加入金额{data.staInvestAmount}元起。</div>
      </Item>
      <Item>
        <div>到账时间</div>
        <div className="pro-desc">{data.accountDate}</div>
      </Item>
    </List>
  </div>
);

export default NormalProjectDetail;
